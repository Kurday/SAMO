import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import Close from '../../icons/close.svg';
import Pencil from '../../icons/pencil.svg';
import Plus from '../../icons/plus.svg';
import Trash from '../../icons/trash.svg';
import { getData, patchData, postData, deleteData } from '../../service';
import useRequest from 'hooks/useRequest';

const TargetWeek = () => {
    const [showItem, setShowItem] = useState(false);
    const [targets, setTargets] = useState([]);

    let newTarget = React.createRef();
    let selector = React.createRef();

    const handleAddTarget = () => {
        if (newTarget.current.value) {
            setTargets([
                ...targets,
                {
                    id: targets.length + 1,
                    status: false,
                    data: newTarget.current.value,
                    sphere: selector.current.value,
                },
            ]);

            let newItem = {
                title: newTarget.current.value,
                date: DateTime.local().toISO().substr(0, 10),
                sphere: selector.current.value,
            };
            postData(newItem, `results/targets/`);
        }
    };

    const request = () => getData('results/');

    const [data] = useRequest(request);

    useEffect(() => {
        setTargets(data?.week_target);
        return () => {
            setTargets([]);
        };
    }, [data]);

    if (!targets) {
        return (
            <div>
                <h4>Loading</h4>
            </div>
        );
    }

    const done = targets.filter((item) => item.status);

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    const handleRemoveItem = ({ target }) => {
        const index = targets.findIndex((point) => `${point.id}` === target.id);

        if (targets.length >= 1) {
            setTargets([...targets.slice(0, index), ...targets.slice(index + 1)]);
            deleteData(`results/targets/${target.id}`).then(async () => {
                await getData(`results/`).then((result) => {
                    setTargets(result.week_target);
                });
            });
        } else {
            setTargets([]);
        }
    };

    const handleEditItem = ({ target }) => {
        const index = targets.findIndex((point) => `${point.id}` === target.id);
        let editTitle = document.querySelectorAll('#week_target span')[index].textContent;
        patchData(`results/targets/${target.id}/`, { title: editTitle }).then(async () => {
            await getData(`results/`).then((result) => {
                setTargets(result.week_target);
            });
        });
    };

    const handleCheckedItem = ({ target }) => {
        patchData(`results/targets/${target.id}/`, { done: true }).then(async () => {
            await getData(`results/`).then((result) => {
                setTargets(result.week_target);
            });
        });
    };

    // const save = () => {
    //   window.location.reload()
    // }

    const Modal = () => {
        return (
            <div className="modal-wrap">
                <div className="block target-month_block modal_window">
                    <div className="headline_block">
                        <h2>Цели недели</h2>
                        <img onClick={handleShow} src={Close} alt="close" className="edit" />
                    </div>
                    <div className="plan-month_checkbox" id="week_target">
                        {targets.map(({ data, id }, i) => {
                            return (
                                <p key={i} className={'checkbox'}>
                                    <input type="checkbox" />
                                    <span id={id} onBlur={handleEditItem} contentEditable="true">
                                        {' '}
                                        {data}{' '}
                                    </span>
                                    <img id={id} onClick={handleRemoveItem} src={Trash} alt="" />
                                </p>
                            );
                        })}
                    </div>
                    <div className="add-task">
                        <input type="text" ref={newTarget} placeholder="введите здесь" />
                        <img onClick={handleAddTarget} src={Plus} alt="plus" />
                    </div>
                    <div>
                        <span className="calendarColorText">
                            Сфера:{' '}
                            <select ref={selector}>
                                <option value="" selected disabled hidden>
                                    Выбрать опцию
                                </option>
                                <option value="health_and_sports">Здоровье и спорт</option>
                                <option value="business_and_career">Бизнес и карьера</option>
                                <option value="family_and_love">Семья и любовь</option>
                                <option value="personal_growth">Личностный рост</option>
                                <option value="investment">Инвестиции</option>
                                <option value="environment_and_friends">Окружение и друзья</option>
                                <option value="brightness_of_life">Яркость жизни</option>
                                <option value="charity">Благотворительность</option>
                            </select>
                        </span>
                    </div>
                    {/* <div className="save">
            <button className="save-btn">Сохранить</button>
          </div> */}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="block target-month_block">
                <div className="headline_block">
                    <h2>Цели недели </h2>
                    <img onClick={handleShow} src={Pencil} alt="edit" className="edit" />
                    {showItem ? <Modal /> : null}
                </div>
                <div className="progress-block">
                    {done.length} / {targets.length}
                    <div className="progress-bar">
                        <span style={{ width: `${(done.length / targets.length) * 100}%` }}> </span>
                    </div>
                </div>
                <div className="plan-month_checkbox" id="month_plan">
                    {targets.map(({ data, status, sphere, id }, i) => {
                        return (
                            <label key={i} className={`checkbox ${sphere}`}>
                                {status ? (
                                    <input
                                        id={id}
                                        disabled={status ? true : false}
                                        onChange={handleCheckedItem}
                                        type="checkbox"
                                        checked={status}
                                    />
                                ) : (
                                    <input
                                        id={id}
                                        disabled={status ? true : false}
                                        onChange={handleCheckedItem}
                                        type="checkbox"
                                    />
                                )}
                                <span> {data} </span>
                            </label>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TargetWeek;
