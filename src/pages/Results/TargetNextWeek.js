import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import Close from '../../icons/close.svg';
import Pencil from '../../icons/pencil.svg';
import Plus from '../../icons/plus.svg';
import Trash from '../../icons/trash.svg';
import { getData, patchData } from '../../service';
import { postData } from '../../service';
import { deleteData } from '../../service';
import useRequest from 'hooks/useRequest';

const TargetNextWeek = () => {
    const [showItem, setShowItem] = useState(false);
    const [targets, setTargets] = useState([]);

    let newTarget = React.createRef();
    let selector = React.createRef();

    const handleAddTarget = () => {
        if (newTarget.current.value && selector.current.value) {
            setTargets([
                ...targets,
                {
                    id: targets.length + 1,
                    done: false,
                    data: newTarget.current.value,
                    sphere: selector.current.value,
                },
            ]);

            let newItem = {
                title: newTarget.current.value,
                sphere: selector.current.value,
                date: DateTime.local().plus({ days: 7 }).toISO().substr(0, 10),
            };
            postData(newItem, `results/targets/`);
        }
    };

    const request = () => getData('results/');

    const [res] = useRequest(request);

    useEffect(() => {
        setTargets(res?.next_week_target);
        return () => {
            setTargets([]);
        };
    }, [res]);
    if (!targets) {
        return (
            <div>
                <h4>Loading</h4>
            </div>
        );
    }

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    const handleRemoveItem = ({ target }) => {
        const index = targets.findIndex((point) => `${point.id}` === target.id);

        if (targets.length >= 1) {
            setTargets([...targets.slice(0, index), ...targets.slice(index + 1)]);
            deleteData(`results/targets/${target.id}`).then(() => {
                getData('results/').then((result) => {
                    setTargets(result.next_week_target);
                });
            });
        } else {
            setTargets([]);
        }
    };

    const handleEditItem = ({ target }) => {
        const index = targets.findIndex((point) => `${point.id}` === target.id);
        let editTitle = document.querySelectorAll('#next_week_target li')[index].textContent;
        patchData(`results/targets/${target.id}/`, { title: editTitle }).then(async () => {
            await getData('results/').then((result) => {
                setTargets(result.next_week_target);
            });
        });
    };

    // const save = () => {
    //   window.location.reload()
    // }

    const Modal = () => {
        return (
            <div className="modal-wrap">
                <div className="block target-next-month_block modal_window">
                    <div className="headline_block">
                        <h2> Цели следующей недели </h2>
                        <img onClick={handleShow} src={Close} alt="close" />
                    </div>
                    <div>
                        <ul className="block_list" id="next_week_target">
                            {targets.map(({ data, id }, i) => {
                                return (
                                    <li
                                        id={id}
                                        onBlur={handleEditItem}
                                        key={i}
                                        contentEditable="true"
                                    >
                                        {data}
                                        <img
                                            id={id}
                                            onClick={handleRemoveItem}
                                            src={Trash}
                                            alt=""
                                        />
                                    </li>
                                );
                            })}
                        </ul>
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
                                    <option value="environment_and_friends">
                                        Окружение и друзья
                                    </option>
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
            </div>
        );
    };

    return (
        <>
            <div className="block target-next-month_block">
                <div className="headline_block">
                    <h2> Цели следующей недели </h2>
                    <img onClick={handleShow} src={Pencil} alt="edit" className="edit" />
                    {showItem ? <Modal /> : null}
                </div>
                <div>
                    <ul className="block_list" id="next_month_target">
                        {targets.map(({ data, sphere }, index) => {
                            return (
                                <li className={sphere} key={index}>
                                    {' '}
                                    {data}{' '}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TargetNextWeek;
