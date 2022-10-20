import React, { useState, useRef, useEffect } from 'react';
import { DateTime } from 'luxon';
import Close from '../../icons/close.svg';
import Pencil from '../../icons/pencil.svg';
import Plus from '../../icons/plus.svg';
import Trash from '../../icons/trash.svg';
import { getData, patchData } from '../../service';
import { postData } from '../../service';
import { deleteData } from '../../service';
import axios from 'axios';
import useRequest from 'hooks/useRequest';

const PlanWeek = () => {
    const imgPath = '../../../../static/icons/';
    const [showItem, setShowItem] = useState(false);
    const [plans, setPlans] = useState([]);
    // const [isChecked, setChecked] = (status);

    let newTarget = React.createRef();
    let selector = React.createRef();

    const handleCheckbox = ({ target }) => {};
    const handleAddTarget = () => {
        if (newTarget.current.value && selector.current.value) {
            setPlans([
                ...plans,
                {
                    id: plans.length + 1,
                    data: newTarget.current.value,
                    sphere: selector.current.value,
                },
            ]);

            let newItem = {
                title: newTarget.current.value,
                date: DateTime.local().toISO().substr(0, 10),
                sphere: selector.current.value,
            };
            postData(newItem, `results/plans/`);
        }
    };

    const request = () => getData('results/');

    const [res] = useRequest(request);

    useEffect(() => {
        setPlans(res?.week_plan);
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

    const handleShow = () => {
        showItem ? setShowItem(false) : setShowItem(true);
    };

    const handleRemoveItem = ({ target }) => {
        const index = plans.findIndex((point) => `${point.id}` === target.id);

        if (plans.length >= 1) {
            setPlans([...plans.slice(0, index), ...plans.slice(index + 1)]);
            deleteData(`results/plans/${target.id}`).then(async () => {
                await getData(`results/`).then((result) => {
                    setPlans(result.week_plan);
                });
            });
        } else {
            setPlans([]);
        }
    };

    const handleEditItem = ({ target }) => {
        const index = plans.findIndex((point) => `${point.id}` === target.id);
        let editTitle = document.querySelectorAll('#week_plan span')[index].textContent;
        patchData(`results/plans/${target.id}/`, { title: editTitle }).then(async () => {
            await getData(`results/`).then((result) => {
                setPlans(result.week_plan);
            });
        });
    };

    const handleCheckedItem = ({ target }) => {
        patchData(`results/plans/${target.id}/`, { done: true }).then(async () => {
            await getData(`results/`).then((result) => {
                setPlans(result.week_plan);
            });
        });

        // window.location.reload()
    };

    const save = () => {
        // window.location.reload()
    };
    const Modal = () => {
        return (
            <div className="modal-wrap">
                <div className="block plan-month_block modal_window">
                    <div className="headline_block">
                        <h2>План недели</h2>
                        <img onClick={handleShow} src={Close} alt="close" className="edit" />
                    </div>
                    <div className="plan-month_checkbox" id="week_plan">
                        {plans.length
                            ? plans.map(({ data, id }, i) => {
                                  return (
                                      <p key={i} className={'checkbox'}>
                                          {/* <input type="checkbox" checked={done}/ */}
                                          <span
                                              onBlur={handleEditItem}
                                              id={id}
                                              contentEditable="true"
                                          >
                                              {' '}
                                              {data}{' '}
                                          </span>
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
                    <h2> План недели </h2>
                    <img onClick={handleShow} src={Pencil} alt="edit" className="edit" />
                    {showItem ? <Modal /> : null}
                </div>
                <div className="progress-block">
                    {done.length} / {plans.length}
                    <div className="progress-bar">
                        <span style={{ width: `${(done.length / plans.length) * 100}%` }}> </span>
                    </div>
                </div>
                <div className="plan-month_checkbox" id="month_plan">
                    {plans.length
                        ? plans.map(({ data, sphere, id, status }, i) => {
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
                                      {/* <input id={id} disabled={status ? true: false} onChange={handleCheckedItem} type="checkbox" checked={(status ? true : null) || ''}/> */}

                                      <span> {data} </span>
                                  </label>
                              );
                          })
                        : null}
                </div>
            </div>
        </>
    );
};

export default PlanWeek;
