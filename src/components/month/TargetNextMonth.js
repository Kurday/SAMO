import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import Close from '../../icons/close.svg';
import Pencil from '../../icons/pencil.svg';
import Plus from '../../icons/plus.svg';
import Trash from '../../icons/trash.svg';
import { getData, patchData, postData, deleteData } from '../../service';
import useRequest from 'hooks/useRequest';

const TargetNextMonth = () => {
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
                    data: newTarget.current.value,
                    sphere: selector.current.value,
                },
            ]);

            let newItem = {
                title: newTarget.current.value,
                date: DateTime.local().plus({ month: 1 }).toISO().substr(0, 10),
                sphere: selector.current.value,
            };
            postData(newItem, `results/targets/`);
        }
    };

    const request = () => getData('results/');

    const [res] = useRequest(request);

    useEffect(() => {
        setTargets(res?.next_month_target);
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
            deleteData(`results/targets/${target.id}`).then(async () => {
                await getData('results/').then((result) => {
                    setTargets(result.next_month_target);
                });
            });
        } else {
            setTargets([]);
        }
    };

    const handleEditItem = ({ target }) => {
        const index = targets.findIndex((point) => `${point.id}` === target.id);
        let editTitle = document.querySelectorAll('#next_month_target li')[index].textContent;
        patchData(`results/targets/${target.id}/`, { title: editTitle }).then(async () => {
            await getData('results/').then((result) => {
                setTargets(result.next_month_target);
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
                        <h2>???????? ???????????????????? ????????????</h2>
                        <img onClick={handleShow} src={Close} alt="close" />
                    </div>
                    <div>
                        <ul className="block_list" id="next_month_target">
                            {targets.map(({ data, id }, i) => {
                                return (
                                    <li
                                        onBlur={handleEditItem}
                                        key={i}
                                        contentEditable="true"
                                        id={id}
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
                            <input type="text" ref={newTarget} placeholder="?????????????? ??????????" />
                            <img onClick={handleAddTarget} src={Plus} alt="plus" />
                        </div>
                        <div>
                            <span className="calendarColorText">
                                ??????????:{' '}
                                <select ref={selector}>
                                    <option value="" selected disabled hidden>
                                        ?????????????? ??????????
                                    </option>
                                    <option value="health_and_sports">???????????????? ?? ??????????</option>
                                    <option value="business_and_career">???????????? ?? ??????????????</option>
                                    <option value="family_and_love">?????????? ?? ????????????</option>
                                    <option value="personal_growth">???????????????????? ????????</option>
                                    <option value="investment">????????????????????</option>
                                    <option value="environment_and_friends">
                                        ?????????????????? ?? ????????????
                                    </option>
                                    <option value="brightness_of_life">?????????????? ??????????</option>
                                    <option value="charity">??????????????????????????????????????</option>
                                </select>
                            </span>
                        </div>
                        {/* <div className="save">
              <button className="save-btn">??????????????????</button>
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
                    <h2>???????? ???????????????????? ????????????</h2>
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

export default TargetNextMonth;
