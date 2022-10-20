import React, { useEffect, useState } from 'react';
import './ContentDiarly.scss';
import { HabitTracker } from '../ModalDiary/Day/HabitTracker';
import { Rituals } from '../ModalDiary/Day/ModalRituals';
import { Todo } from '../ModalDiary/Day/ModalTodo';
import { CreateIcon } from '../../../assets/icons';
import Slider from 'rc-slider';
import { getData } from 'service/index.js';
import useRequest from 'hooks/useRequest';

const getMarksValues = ({ min = 0, max = 1, step = 1 } = {}) => {
    if (min > max) {
        [min, max] = [max, min];
    }

    const size = Math.ceil(max - min / step) + 1;
    return Array.from(Array(size), (_, i) => (i === size - 1 ? max : i * step + min));
};

const ContentDiarly = () => {
    const [ritual, setRitual] = useState([]);

    const onAddRitual = (obj) => {
        const newRitual = [...ritual, obj];
        setRitual(newRitual);
    };

    const request = () => getData('results/');

    const [data] = useRequest(request);

    useEffect(() => {
        setRitual(data);
        return () => {
            setRitual([]);
        };
    }, [data]);

    const [ritualModal, setRitualModal] = useState(false);
    const [habitModal, setHabitModal] = useState(false);
    const [todoModal, setTodoModal] = useState(false);

    const onModalCloseRitual = () => setRitualModal(false);
    const onModalOpenRitual = () => setRitualModal(true);
    const onModalCloseHabit = () => setHabitModal(false);
    const onModalOpenHabit = () => setHabitModal(true);
    const onModalCloseTodo = () => setTodoModal(false);
    const onModalOpenTodo = () => setTodoModal(true);

    const [state, setState] = useState([]);

    const min = 0;
    const max = 10;
    const step = 1;

    return (
        <div className="content">
            <div className="block__rituals">
                <div className="block__title">
                    Утренние ритуалы
                    <button className="create" onClick={onModalOpenRitual}>
                        <CreateIcon />
                    </button>
                </div>
                <div className="wrap">
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        <span className="visually-hidden"></span>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        <span className="visually-hidden"></span>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="block__title">Фокус дня</div>
            </div>
            <div className="block__habit">
                <div className="block__title">
                    Ежедневный трекер привычек
                    <button className="create" onClick={onModalOpenHabit}>
                        <CreateIcon />
                    </button>
                </div>
                <div className="slider-title">Тысячи шагов</div>
                <div className="slider-content">
                    <Slider
                        min={min}
                        max={max}
                        step={step}
                        onChange={(value) => {
                            setState({ value });
                        }}
                        style={{
                            color: '#25315B',
                            paddingTop: '50px',
                            width: '40%',
                        }}
                        marks={getMarksValues({ min, max, step }).reduce((acc, val) => {
                            acc[val] = {
                                label: <span>{val}</span>,
                                style: {
                                    color: '#25315B',
                                },
                            };
                            return acc;
                        }, {})}
                    />
                </div>
                <div className="slider-title">Стаканы воды</div>
                <div className="slider-content">
                    <Slider
                        min={min}
                        max={8}
                        step={step}
                        onChange={(value) => {
                            setState({ value });
                        }}
                        style={{
                            color: '#25315B',
                            paddingTop: '50px',
                            width: '40%',
                        }}
                        marks={getMarksValues({ min, max: 8, step }).reduce((acc, val) => {
                            acc[val] = {
                                label: <span>{val}</span>,
                                style: {
                                    color: '#25315B',
                                },
                            };
                            return acc;
                        }, {})}
                    />
                </div>
                <div className="slider-title">Часы сна</div>
                <div className="slider-content">
                    <Slider
                        min={min}
                        max={8}
                        step={step}
                        onChange={(value) => {
                            setState({ value });
                        }}
                        style={{
                            color: '#25315B',
                            paddingTop: '50px',
                            width: '40%',
                        }}
                        marks={getMarksValues({ min, max: 8, step }).reduce((acc, val) => {
                            acc[val] = {
                                label: <span>{val}</span>,
                                style: {
                                    color: '#25315B',
                                },
                            };
                            return acc;
                        }, {})}
                    />
                </div>
                <div className="slider-title">Порций сладкого</div>
                <div className="slider-content">
                    <Slider
                        min={min}
                        max={4}
                        step={step}
                        onChange={(value) => {
                            setState({ value });
                        }}
                        style={{
                            color: '#25315B',
                            paddingTop: '50px',
                            width: '40%',
                        }}
                        marks={getMarksValues({ min, max: 4, step }).reduce((acc, val) => {
                            acc[val] = {
                                label: <span>{val}</span>,
                                style: {
                                    color: '#25315B',
                                },
                            };
                            return acc;
                        }, {})}
                    />
                </div>
            </div>
            <div className="block__todo">
                <div className="block__title">
                    Список дел на сегодня
                    <button className="create" onClick={onModalOpenTodo}>
                        <CreateIcon />
                    </button>
                </div>
            </div>

            <Rituals
                title={'Modal'}
                onAdd={onAddRitual}
                isOpened={ritualModal}
                onModalClose={onModalCloseRitual}
            />
            <HabitTracker title={'Modal'} isOpened={habitModal} onModalClose={onModalCloseHabit} />
            <Todo title={'Modal'} isOpened={todoModal} onModalClose={onModalCloseTodo} />
        </div>
    );
};

export default ContentDiarly;
