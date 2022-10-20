import { memo, useCallback, useState, useEffect, useMemo } from 'react';
import { getData, patchData, postData, deleteData } from 'service';
import useRequest from 'hooks/useRequest';

import { GoalTime, GoalBalance, GoalProgressBar, GoalModal } from './sections';
import { MainHeader } from 'app/Layout';

import cn from 'classnames';
import './goal.scss';

const Goals = () => {
    const [goalData, setGoalData] = useState([]);
    const [goalTimeMode, setGoalTimeMode] = useState(false);
    const [mission, setMission] = useState([{}]);
    const [editMission, setEditMission] = useState(false);
    const [editInputMission, setEditInputMission] = useState('');
    const [newMission, setNewMission] = useState('');
    const [goalBalanceMode, setGoalBalanceMode] = useState(true);
    const [sphereValue, setSphereValue] = useState('health_and_sports');
    const [sphereTimeValue, setSphereTimeValue] = useState('');
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [goalToEdit, setGoalToEdit] = useState({});
    const request = () => getData('goals_summary/');
    const missionRequest = () => getData('mission/');
    const [data] = useRequest(request);
    const [missionData] = useRequest(missionRequest);
    useEffect(() => {
        setMission(missionData);
        if (missionData !== null) {
            setEditInputMission(missionData[0]?.text);
        }
        return () => setMission([]);
    }, [missionData]);

    useEffect(() => {
        setGoalData(data);
        return () => setGoalData([]);
    }, [data]);

    const onSwitcherTimeChange = useCallback(() => {
        setGoalTimeMode(true);
        setGoalBalanceMode(false);
    }, [setGoalTimeMode, setGoalBalanceMode]);

    const onSwitcherBalanceChange = useCallback(() => {
        setGoalTimeMode(false);
        setGoalBalanceMode(true);
    }, [setGoalTimeMode, setGoalBalanceMode]);

    const closeModalCreate = useCallback(() => {
        setCreateModalOpen(false);
        setSphereValue('health_and_sports');
    }, [setSphereValue, setCreateModalOpen]);

    const openModalCreate = useCallback(
        (sphere = '', timeSphere = '') => {
            setCreateModalOpen(true);
            if (!!sphere) {
                setSphereValue(sphere);
            }
            if (!!timeSphere) {
                setSphereTimeValue(timeSphere);
            }
        },
        [setSphereValue, setCreateModalOpen],
    );

    const closeModalEdit = useCallback(() => {
        setEditModalOpen(false);
        setGoalToEdit({});
    }, [setEditModalOpen, setGoalToEdit]);

    const openModalEdit = useCallback(
        (goal) => {
            setEditModalOpen(true);
            setGoalToEdit({
                data: goal,
                can_add_favorite: !goalData[goal.sphere.slug].some((item) => item?.favorite),
            });
        },
        [setGoalToEdit, setEditModalOpen, goalData],
    );

    const setNewMissionHandler = useCallback((e) => {
        setNewMission(e.target.value);
    }, []);

    const createMission = useCallback(() => {
        const data = {
            text: newMission,
        };
        postData(data, 'mission/').then((res) => {
            setMission([...mission, res.data]);
        });
    }, [mission, newMission]);

    const deleteMission = useCallback(
        (id) => {
            deleteData(`mission/${id}/`).then(() => {
                setMission(mission?.filter((item) => item?.id !== id));
            });
        },
        [mission],
    );

    const saveMission = useCallback(
        (id) => {
            const data = {
                text: editInputMission,
            };
            patchData(`mission/${id}/`, data).then((res) => {
                setMission(mission.map((item) => (item?.id === id ? res.data : item)));
            });
            setEditMission(false);
        },
        [editInputMission, mission],
    );

    const editModeActivate = useCallback(() => {
        setEditMission(true);
    }, []);

    const editMissionHandler = useCallback((e) => {
        setEditInputMission(e.target.value);
    }, []);

    const disabledMission = useMemo(() => (!!newMission ? false : true), [newMission]);
    const disableEditMission = useMemo(
        () => (!!editInputMission ? false : true),
        [editInputMission],
    );

    return (
        <div className="goals">
            <MainHeader title="Мои цели" />
            <div className="goals__container">
                <div className="goals__container-switcher-title">
                    <div
                        className={cn({
                            title: true,
                            goalContainer: true,
                            maxPadding: true,
                            goalInternalContainer: true,
                            missionContent: true,
                        })}
                    >
                        <h2>Миссия</h2>
                        {!!mission?.length && (
                            <div
                                className={cn({
                                    'goal__item-mission': true,
                                    'missionRead': mission[0]?.text,
                                    'missionEdit': editMission,
                                })}
                            >
                                {editMission ? (
                                    <input
                                        type="text"
                                        onChange={editMissionHandler}
                                        value={editInputMission}
                                    />
                                ) : (
                                    <p>{mission[0]?.text}</p>
                                )}
                                {editMission ? (
                                    <button
                                        onClick={() => saveMission(mission[0]?.id)}
                                        disabled={disableEditMission}
                                    >
                                        Сохранить миссию
                                    </button>
                                ) : (
                                    <>
                                        <button onClick={() => deleteMission(mission[0]?.id)}>
                                            Удалить миссию
                                        </button>
                                        <button onClick={editModeActivate}>
                                            Редактировать миссию
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        {!mission?.length && (
                            <div className="goal__item-mission">
                                <input
                                    type="text"
                                    placeholder="Введите вашу миссию"
                                    onChange={setNewMissionHandler}
                                />
                                <button onClick={createMission} disabled={disabledMission}>
                                    Создать миссию
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className={cn({
                            switcher: true,
                            goalContainer: true,
                            maxPadding: true,
                        })}
                    >
                        <div className="switcher__toggle">
                            <button
                                className={cn({ active: goalBalanceMode })}
                                onClick={onSwitcherBalanceChange}
                            >
                                Баланс
                            </button>
                            <button
                                className={cn({ active: goalTimeMode })}
                                onClick={onSwitcherTimeChange}
                            >
                                Время
                            </button>
                        </div>
                        <div className="switcher__container">
                            {goalTimeMode ? (
                                <GoalTime
                                    data={goalData}
                                    openModalEdit={openModalEdit}
                                    openModal={openModalCreate}
                                />
                            ) : (
                                <GoalBalance
                                    data={goalData}
                                    openModalEdit={openModalEdit}
                                    openModal={openModalCreate}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="goals__container-purposeCount-balance-sphere">
                    <GoalProgressBar
                        goalsCount={goalData?.goals_count}
                        goalsDoneCount={goalData?.goals_done_count}
                    />
                    <div
                        className={cn({
                            balance: true,
                            goalContainer: true,
                            minPadding: true,
                            goalInternalContainer: true,
                        })}
                    >
                        <h2>Баланс целей</h2>
                    </div>
                </div>
            </div>
            {createModalOpen && (
                <GoalModal
                    create
                    setGoalData={setGoalData}
                    goalData={goalData}
                    close={closeModalCreate}
                    sphereValue={sphereValue}
                    sphereValueTime={sphereTimeValue}
                />
            )}
            {editModalOpen && (
                <GoalModal
                    read
                    setGoalData={setGoalData}
                    goalData={goalData}
                    close={closeModalEdit}
                    goal={goalToEdit}
                />
            )}
        </div>
    );
};

export default memo(Goals);
