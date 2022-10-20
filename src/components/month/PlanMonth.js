import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import Close from '../../icons/close.svg';
import Pencil from '../../icons/pencil.svg';
import Plus from '../../icons/plus.svg';
import Trash from '../../icons/trash.svg';
import { getData, postData, deleteData, patchData } from '../../service';
import useRequest from 'hooks/useRequest';

const PlanMonth = () => {
    const [showItem, setShowItem] = useState(false);
    const [plans, setPlans] = useState([]);

    const request = () => getData('results/plans/');

    const [res] = useRequest(request);

    let newTarget = React.createRef();
    let selector = React.createRef();

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
                // date: `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-01`,s
                date: DateTime.local().toISO().substr(0, 10),
                sphere: selector.current.value,
            };
            postData(data, `results/plans/`);
        }
    };

    useEffect(() => {
        if (res?.month_plan) setPlans(res?.month_plan);
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

    const done = plans.filter((item) => item.status);

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    const handleRemoveItem = ({ target }) => {
        const index = plans.findIndex((point) => `${point.id}` === target.id);

        if (plans.length >= 1) {
            setPlans([...plans.slice(0, index), ...plans.slice(index + 1)]);
            deleteData(`results/plans/${target.id}`).then(async () => {
                await getData('results/').then((result) => {
                    setPlans(result.month_plan);
                });
            });
        } else {
            setPlans([]);
            deleteData(`results/plans/${target.id}`);
        }
    };

    const handleEditItem = ({ target }) => {
        const index = plans.findIndex((point) => `${point.id}` === target.id);

        let editTitle = document.querySelectorAll('#month_plan span')[index].textContent;
        patchData(`results/plans/${target.id}/`, { title: editTitle }).then(async () => {
            await getData('results/').then((result) => {
                setPlans(result.month_plan);
            });
        });
    };

    const handleCheckedItem = ({ target }) => {
        patchData(`results/plans/${target.id}/`, { done: true }).then(async () => {
            await getData('results/').then((result) => {
                setPlans(result.month_plan);
            });
        });
    };

    // const save = () => {
    //   window.location.reload()
    // }

    const Modal = () => {
        return (
            <div className="modal-wrap">
                <div className="block plan-month_block modal_window">
                    <div className="headline_block">
                        <h2>План месяца</h2>
                        <img onClick={handleShow} src={Close} alt="close" className="edit" />
                    </div>
                    <div className="plan-month_checkbox" id="month_plan">
                        {plans
                            ? plans?.map(({ data, id }, i) => {
                                  return (
                                      <p key={i} className={'checkbox'}>
                                          {/* <input type="checkbox"/> */}
                                          <span
                                              id={id}
                                              onBlur={handleEditItem}
                                              contentEditable="true"
                                          >
                                              {' '}
                                              {data}{' '}
                                          </span>
                                          =======
                                          <img
                                              id={id}
                                              onClick={handleRemoveItem}
                                              src={Trash}
                                              alt=""
                                          />
                                      </p>
                                  );
                              })
                            : null}
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
            <div className="block plan-month_block">
                <div className="headline_block">
                    <h2>План месяца</h2>
                    <img onClick={handleShow} src={Pencil} alt="edit" className="edit" />
                    {showItem && <Modal />}
                </div>
                <div className="progress-block">
                    {done?.length} / {plans?.length}
                    <div className="progress-bar">
                        <span style={{ width: `${(done?.length / plans?.length) * 100}%` }}> </span>
                    </div>
                </div>
                <div className="plan-month_checkbox" id="month_plan">
                    {!!plans?.length &&
                        plans.map(({ data, status, sphere, id }, i) => {
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

export default PlanMonth;
