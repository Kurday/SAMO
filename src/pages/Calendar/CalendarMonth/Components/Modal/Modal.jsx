import { memo, useState } from 'react';
import cn from 'classnames';
import './Modal.scss';
import { postData } from 'service';
import { sphereDataOption } from 'config/constants';
import { sphereColor } from 'utils/colors';
import {
    CalendarTime,
    CalendarGuests,
    CalendarPlace,
    CalendarPerson,
    CalendarCheck,
    CalendarAddDescription,
    CalendarFlag,
    CalendarCloseCross,
    ArrowIcon,
} from 'assets/icons';

const Modal = ({ active, setActive, dateItem }) => {
    // 1) для выбора опции для отправки
    const [sphere, setSphere] = useState('');
    const [title, setTitle] = useState('');
    const [descript, setDescript] = useState('');
    const [checked, setChecked] = useState(false);
    const [arrowActive, setArrowActive] = useState(false);
    const [mainSphereColor, setMainSphereColor] = useState('rgb(255, 168, 118)');
    const [clicked, setClicked] = useState('');
    const [Tab, setTab] = useState({
        t1: true,
        t2: false,
        t3: false,
    });
    // const checkMainSphere = (e) => {
    //     setMainSphereColor(e.target.value);
    // };

    const handleChange = (e) => {
        setChecked(!checked);
        setSphere(e.target.value);
        setMainSphereColor(sphereColor(e.target.value).color);
    };

    const handleClick = () => {
        setArrowActive(!arrowActive);
        //базвый стиль, стель по клику
        clicked ? setClicked('') : setClicked('base-close click-open');
    };

    //изменение описания
    const onChangeDescription = (e) => {
        setDescript(e.target.value);
    };

    // const onChangeSphere = (e) => {
    //     // console.log(e.target.value);
    //     setSphere(e.target.value);
    // };

    const onChangeTitle = (e) => {
        // console.log(e.target.value);
        setTitle(e.target.value);
    };

    // чекмарк

    // 2) по кнопке отправляем запрос
    const submit = () => {
        const taskData = {
            sphere,
            event: 'event',
            start_date: '2022-04-07T22:30',
            end_date: '2022-04-08T23:30',
            title,
            place: 'string',
            description: 'descript',
        };
        postData(taskData, 'calendar/day/');
        setActive(false);
    };
    return (
        // по клику на затемненную область закрываем окно
        <div className={cn('modal', { active })} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className="modal-content modal--1" data-target="one">
                    <div className="closeCross" onClick={() => setActive(false)}>
                        {' '}
                        <CalendarCloseCross />
                    </div>
                    <div class="modal__inform">
                        <input
                            type="text"
                            class="addEvent"
                            placeholder="Добавить название"
                            onChange={onChangeTitle}
                        />
                    </div>
                    <div class="modal__inform">
                        <a
                            className={`${Tab.t1 ? 'active_tab' : ''}`}
                            onClick={() => setTab({ t1: true, t2: false, t3: false })}
                        >
                            Мероприятие
                        </a>
                        <a
                            className={`${Tab.t2 ? 'active_tab' : ''}`}
                            onClick={() => setTab({ t1: false, t2: true, t3: false })}
                        >
                            Задача
                        </a>
                        <a
                            className={`${Tab.t3 ? 'active_tab' : ''}`}
                            onClick={() => setTab({ t1: false, t2: false, t3: true })}
                        >
                            Напоминание
                        </a>
                    </div>

                    {/* первый таб */}
                    {Tab.t1 ? (
                        <div>
                            <div class="modal__inform icon">
                                <CalendarTime />
                                <span>Вторник, 4 мая 16:00 Весь день</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarGuests />
                                <span>Добавить гостей</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarPlace />
                                <span>Добавить местоположение</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarPerson />
                                <span>Ксюша донская</span>
                            </div>
                            {/* <nav class="list">
                                <div className="arrow">{arrowActive ? <ArrowIcon /> : null}</div>
                                <input type="checkbox" id="spisok-check-menu" />
                                <label
                                    class="spisok-label"
                                    for="spisok-check-menu"
                                    onClick={() => setArrowActive(!arrowActive)}
                                >
                                    <span
                                        class="fakeMain"
                                        style={{
                                            background: mainSphereColor,
                                        }}
                                    ></span>{' '}
                                    Сфера:
                                </label>{' '}
                            </nav> */}
                            <nav class="list">
                                <div className="arrow">{arrowActive ? <ArrowIcon /> : null}</div>
                                <label
                                    className="spisok-label"
                                    for="spisok-check-menu"
                                    onClick={handleClick}
                                >
                                    <span
                                        class="fakeMain"
                                        style={{
                                            background: mainSphereColor,
                                        }}
                                    ></span>
                                    Сфера:
                                </label>
                                <ul className={cn('spisok-list', clicked || 'base-close')}>
                                    {sphereDataOption.map((item) => (
                                        <li key={item.value}>
                                            <label class="label" key={item.value}>
                                                {/* {console.log(item.value)} */}
                                                <input
                                                    type="radio"
                                                    name="myR"
                                                    class="checkbox"
                                                    onChange={handleChange}
                                                    value={item.value}
                                                />
                                                <span
                                                    class="fake "
                                                    style={{
                                                        background: sphereColor(item.value)?.color,
                                                    }}
                                                ></span>
                                                <span class="text">{item.title}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    ) : null}

                    {/* ********************ВТОРОЙ ТАБ ЗАДАЧА*************** */}

                    {Tab.t2 ? (
                        <div>
                            <div class="modal__inform icon">
                                <CalendarTime />
                                <span>Вторник, 4 мая 16:00 </span>
                                <div className="allDay">
                                    <input type="checkbox" className="fake " />
                                    <span>Весь день</span>
                                </div>
                            </div>
                            <div className="modal__inform icon flex-top">
                                <CalendarAddDescription />
                                <textarea
                                    type="text"
                                    placeholder="Добавить описание"
                                    className="description"
                                    onChange={onChangeDescription}
                                />
                            </div>
                            <div class="modal__inform icon">
                                {/* <div className="arrow">{arrowActive ? <ArrowIcon /> : null}</div> */}
                                <CalendarFlag />
                                <span>3 раза в неделю</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarGuests />
                                <span>Добавить гостей</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarPlace />
                                <span>Добавить местоположение</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarPerson />
                                <span>Ксюша донская</span>
                            </div>
                            <nav class="list">
                                <div className="arrow-right">
                                    {!arrowActive ? <ArrowIcon /> : null}
                                </div>
                                <label
                                    class="spisok-label"
                                    for="spisok-check-menu"
                                    onClick={handleClick}
                                >
                                    Сфера:
                                </label>
                                <div className={cn('spisok-taskResults', clicked || 'base-close')}>
                                    <div className="taskResults">
                                        <div className="taskResults__block fx">
                                            <div className="taskResults__circle">0/3</div>
                                            <span>май 10</span>
                                        </div>
                                        <div className="fx taskResults__block">
                                            <div className="taskResults__circle">0/3</div>
                                            <span>май 10</span>
                                        </div>
                                        <div className="fx taskResults__block">
                                            <div className="taskResults__circle">0/3</div>
                                            <span>май 10</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    ) : null}
                    {/* ********************Третий ТАБ ЗАДАЧА*************** */}
                    {Tab.t3 ? (
                        <div>
                            <div class="modal__inform icon">
                                <CalendarTime />
                                <span>Вторник, 4 мая 16:00 </span>
                                <div className="allDay">
                                    <input type="checkbox" className="fake " />
                                    <span>Весь день</span>
                                </div>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarFlag />
                                <span>3 раза в неделю</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarGuests />
                                <span>Добавить гостей</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarPlace />
                                <span>Добавить местоположение</span>
                            </div>
                            <div class="modal__inform icon">
                                <CalendarPerson />
                                <span>Ксюша донская</span>
                            </div>
                            <nav class="list">
                                <div className="arrow-right">
                                    {!arrowActive ? <ArrowIcon /> : null}
                                </div>
                                <label
                                    class="spisok-label"
                                    for="spisok-check-menu"
                                    onClick={handleClick}
                                >
                                    Сфера:
                                </label>

                                <div className={cn('spisok-taskResults', clicked || 'base-close')}>
                                    <div className="taskResults">
                                        <div className="taskResults__block fx">
                                            <div className="taskResults__circle">0/3</div>
                                            <span>май 10</span>
                                        </div>
                                        <div className="fx taskResults__block">
                                            <div className="taskResults__circle">0/3</div>
                                            <span>май 10</span>
                                        </div>
                                        <div className="fx taskResults__block">
                                            <div className="taskResults__circle">0/3</div>
                                            <span>май 10</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    ) : null}

                    <div>
                        <button class="modal__button" onClick={submit}>
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Modal);
