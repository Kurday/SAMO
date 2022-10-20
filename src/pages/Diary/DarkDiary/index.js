import React, { useState } from 'react';
import HeaderDiary from '../HeaderDiary/index';
import './DarkDiary.scss';
import Slider from 'rc-slider';
import { IsDone } from '../ModalDiary/Evening/ModalIsDone';
import { HowHappy } from '../ModalDiary/Evening/ModalHowHappy';
import { MainTasks } from '../ModalDiary/Evening/ModalMainTasks';
import { CreateDarkIcon } from '../../../assets/icons';
import { getData } from 'service/index.js';
import useRequest from 'hooks/useRequest';

const DarkDiary = () => {
    const request = () => getData('results/');

    const [isDoneModal, setIsDoneModal] = useState(false);
    const [howHappyModal, setHowHappyModal] = useState(false);
    const [mainTasksModal, setMainTasksModal] = useState(false);

    const onModalCloseIsDone = () => setIsDoneModal(false);
    const onModalOpenIsDone = () => setIsDoneModal(true);
    const onModalCloseHowHappy = () => setHowHappyModal(false);
    const onModalOpenHowHappy = () => setHowHappyModal(true);
    const onModalCloseMainTasks = () => setMainTasksModal(false);
    const onModalOpenMainTasks = () => setMainTasksModal(true);

    const getMarksValues = ({ min = 0, max = 1, step = 1 } = {}) => {
        if (min > max) {
            [min, max] = [max, min];
        }

        const size = Math.ceil(max - min / step) + 1;
        return Array.from(Array(size), (_, i) => (i === size - 1 ? max : i * step + min));
    };

    const [state, setState] = useState([]);

    const min = 0;
    const max = 10;
    const step = 1;

    return (
        <div>
            <HeaderDiary />
            <div className="dark__content">
                <div className="darkIsDone">
                    <div className="dark__title">
                        Что было сделано сегодня
                        <button className="dcreate" onClick={onModalOpenIsDone}>
                            <CreateDarkIcon />
                        </button>
                    </div>
                    <div className="dark__title">
                        Какие ключевые действия я сделал для достижения цели?
                    </div>
                    <div className="dark__title">Что можно было сделать лучше</div>
                    <div className="dark__title">Что хорошего произошло</div>
                    <div className="dark__title">Мои достижения</div>
                    <div className="dark__title">Кого я хочу поблагодарить</div>
                </div>
                <div className="darkHowHappy">
                    <div className="dark__title">
                        Насколько я доволен работой
                        <button className="dcreate" onClick={onModalOpenHowHappy}>
                            <CreateDarkIcon />
                        </button>
                    </div>
                    <Slider
                        min={0}
                        max={10}
                        step={1}
                        onChange={(value) => {
                            setState({ value });
                        }}
                        style={{
                            color: '#25315B',
                            paddingTop: '50px',
                            width: '95%',
                        }}
                        marks={getMarksValues({ min, max }).reduce((acc, val) => {
                            acc[val] = {
                                label: <span>{val}</span>,
                                style: {
                                    color: '#DDE2FF',
                                },
                            };
                            return acc;
                        }, {})}
                    />
                    <div className="dark__title">Насколько я счастлив</div>
                    <Slider
                        min={0}
                        max={10}
                        step={1}
                        onChange={(value) => {
                            setState({ value });
                        }}
                        style={{
                            color: '#DDE2FF',
                            paddingTop: '50px',
                            width: '95%',
                        }}
                        marks={getMarksValues({ min, max }).reduce((acc, val) => {
                            acc[val] = {
                                label: <span>{val}</span>,
                                style: {
                                    color: '#DDE2FF',
                                },
                            };
                            return acc;
                        }, {})}
                    />
                    <div className="dark__title">Недельный трекер привычек</div>
                    <div className="tracker">
                        <div className="block__text">Начать вставать в 6 часов утра</div>
                        <div className="block__text">Бросить курить</div>
                        <div className="block__text">Читать каждый день минимум час</div>
                        <div className="tracker__wrapper">
                            <div className="tracker__title">
                                <div>ПН</div>
                                <div>ВТ</div>
                                <div>СР</div>
                                <div>ЧТ</div>
                                <div>ПТ</div>
                                <div>СБ</div>
                                <div>ВС</div>
                            </div>
                            <div className="checkdarkmarkK">
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkdarkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="darkMainTasks">
                    <div className="dark__title">
                        Главные задачи на завтра
                        <button className="dcreate" onClick={onModalOpenMainTasks}>
                            <CreateDarkIcon />
                        </button>
                    </div>
                    <div className="dark__title">Инсайт дня</div>
                </div>
            </div>

            <IsDone title={'Modal'} isOpened={isDoneModal} onModalClose={onModalCloseIsDone} />

            <HowHappy
                title={'Modal'}
                isOpened={howHappyModal}
                onModalClose={onModalCloseHowHappy}
            />

            <MainTasks
                title={'Modal'}
                isOpened={mainTasksModal}
                onModalClose={onModalCloseMainTasks}
            />
        </div>
    );
};

export default DarkDiary;
