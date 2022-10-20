import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import Close from '../../icons/close.svg';
import Pencil from '../../icons/pencil.svg';
import Plus from '../../icons/plus.svg';
import Trash from '../../icons/trash.svg';
import { getData, postData, deleteData, patchData } from '../../service';
import useRequest from 'hooks/useRequest';

const PlanNextMonth = () => {
    const [showItem, setShowItem] = useState(false);
    const [plans, setPlans] = useState([]);

    let newTarget = React.createRef();
    let selector = React.createRef();

    const request = () => getData('results/');

    const [res] = useRequest(request);

    const handleAddTarget = () => {
        if (newTarget.current.value && selector.current.value) {
            setPlans([
                ...plans,
                {
                    id: plans.length + 1,
                    done: false,
                    data: newTarget.current.value,
                    sphere: selector.current.value,
                },
            ]);

            let data = {
                title: newTarget.current.value,
                // date: `${new Date().getFullYear()}-0${new Date().getMonth() + 2}-01`,
                date: DateTime.local().plus({ month: 1 }).toISO().substr(0, 10),
                sphere: selector.current.value,
            };
            postData(data, `results/plans/`);
        }
    };

    useEffect(() => {
        setPlans(res?.next_month_plan);
        return () => {
            setPlans([]);
        };
    }, [res]);

    if (!plans) {
        return (
            <div>
                <h4>Loading</h4>
            </div>
        );
    }

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    const handleRemoveItem = ({ target }) => {
        const index = plans.findIndex((point) => `${point.id}` === target.id);

        if (plans.length >= 1) {
            setPlans([...plans.slice(0, index), ...plans.slice(index + 1)]);
            deleteData(`results/plans/${target.id}`).then(async () => {
                await getData('results/').then((result) => {
                    setPlans(result.next_month_plan);
                });
            });
        } else {
            setPlans([]);
        }
    };

    const handleEditItem = ({ target }) => {
        const index = plans.findIndex((point) => `${point.id}` === target.id);
        let editTitle = document.querySelectorAll('#next_month_plan li')[index].textContent;
        patchData(`results/plans/${target.id}/`, { title: editTitle }).then(async () => {
            await getData('results/').then((result) => {
                setPlans(result.next_month_plan);
            });
        });
    };

    // const save = () => {
    //   window.location.reload()
    // }

    const Modal = () => {
        return (
            <div className="modal-wrap">
                <div className="block plan-next-month_block modal_window">
                    <div className="headline_block">
                        <h2> План следующего месяца </h2>
                        <img onClick={handleShow} src={Close} alt="edit" className="edit" />
                    </div>
                    <div>
                        <ul className="block_list" id="next_month_plan">
                            {plans.map(({ data, id }, i) => {
                                return (
                                    <>
                                        <li
                                            id={id}
                                            onBlur={handleEditItem}
                                            contentEditable="true"
                                            key={i}
                                        >
                                            {data}
                                            <img
                                                id={id}
                                                onClick={handleRemoveItem}
                                                src={Trash}
                                                alt=""
                                            />
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
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
            <div className="block plan-next-month_block">
                <div className="headline_block">
                    <h2> План следующего месяца </h2>
                    <img onClick={handleShow} src={Pencil} alt="edit" className="edit" />
                    {showItem ? <Modal /> : null}
                </div>
                <div>
                    <ul className="block_list" id="next_month_plan">
                        {plans.map(({ data, sphere }, i) => {
                            return (
                                <li className={sphere} key={i}>
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

export default PlanNextMonth;
