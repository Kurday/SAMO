import React, { useState } from 'react';

import {
    CalendarIcon,
    ClockCalendarIcon,
    CloseCalendarIcon,
    FlagIcon,
    PeopleIcon,
    LocationIcon,
} from 'assets/icons';
import { useCreateCalendarEventMutation } from '../api';
// import { CALENDAR_ICONS_PATH } from "../../../paths/paths";
// import TimePicker from 'react-time-picker'
// import { MODAL_PATH } from "../../../paths/paths";

import './CalendarAddReminderForm.css';

export const CalendarAddReminderForm = ({ onClose }) => {
    const calendarEventMutation = useCreateCalendarEventMutation();
    const [title, setTitle] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [startTimeValue, setStartTimeValue] = useState('');
    const [endTimeValue, setEndTimeValue] = useState('');
    const [author, setAuthor] = useState('');

    const [locationValue, setLocationValue] = useState('');
    const [personValue, setPersonValue] = useState('');
    const [events, setEvents] = useState(['Мероприятие', 'Задача', 'Напоминание']);

    const [eventSlug, setEventSlug] = useState('event');
    const [eventId, setEventId] = useState('1');
    const [eventName, setEventName] = useState('');
    const [sphereId, setSphereId] = useState('');
    const [sphereTitle, setSphereTitle] = useState('');
    const [sphereName, setSphereName] = useState('');
    const [titleIsValid, setTitleIsValid] = useState(false);
    const [startDateIsValid, setStartDateIsValid] = useState(false);
    const [endDateIsValid, setEndDateIsValid] = useState(false);
    const [eventIsValid, setEventIsValid] = useState(false);
    const [placeIsValid, setPlaceIsValid] = useState(false);
    const [valid, setValid] = useState(false);

    const [colorBlockClass, setColorBlockClass] = useState('');
    let validOverall = false;
    let validTitle = false;
    let validDate = false;
    let validStart = false;
    let validEnd = false;
    let validEvent = false;
    let validSphere = false;
    let validEventId = false;
    let validPlace = false;

    const setNameTitle = (e) => {
        setTitle(e.target.value);
        // if (title.length === 0) {
        //   validTitle = false
        // } else {
        //   validTitle = true
        // }
    };
    const setDate = (e) => {
        setDateValue(e.target.value);
    };
    const setStartTime = (e) => {
        setStartTimeValue(e.target.value);
        // if (startTimeValue === null || startTimeValue === undefined) {
        //   validStart = false
        // } else {
        //   validStart = true
        // }
    };
    const setEndTime = (e) => {
        setEndTimeValue(e.target.value);
        // if (endTimeValue === null || endTimeValue === undefined) {
        //   validEnd = false
        // } else {
        //   validEnd = true
        // }
    };
    const setAuthorName = (e) => {
        setAuthor(e.target.value);
    };
    const setLocation = (e) => {
        setLocationValue(e.target.value);
        // if (locationValue.length === 0) {
        //   validPlace = false
        // } else {
        //   validPlace = true
        // }
    };
    if (title.length === 0) {
        validTitle = false;
    } else {
        validTitle = true;
    }
    if (dateValue === null || dateValue === undefined || dateValue.length === 0) {
        validDate = false;
    } else {
        validDate = true;
    }
    if (startTimeValue === null || startTimeValue === undefined || startTimeValue.length === 0) {
        validStart = false;
    } else {
        validStart = true;
    }
    if (endTimeValue === null || endTimeValue === undefined || endTimeValue.length === 0) {
        validEnd = false;
    } else {
        validEnd = true;
    }

    if (sphereName === undefined || sphereName === null || sphereName.length === 0) {
        validSphere = false;
    } else {
        validSphere = true;
    }
    // if (eventName === undefined || eventName === null || eventName.length === 0) {
    //   validEvent = false;
    // } else {
    //   validEvent = true;
    // }

    if (validTitle && validStart && validEnd && validSphere) {
        validOverall = true;
    } else {
        validOverall = false;
    }
    const validation = () => {
        // if (validTitle && validStart && validEnd && validEvent && validPlace) {
        //   validOverall = true
        // } else {
        //   validOverall = false
        // }
    };

    const getCurrentValue = (e) => {
        if (selector.current.value === 'brightness_of_life') {
            setColorBlockClass('bright');
        } else if (selector.current.value === 'family_and_love') {
            setColorBlockClass('gathering');
        } else if (selector.current.value === 'personal_growth') {
            setColorBlockClass('self');
        } else if (selector.current.value === 'investment') {
            setColorBlockClass('longterm');
        } else if (selector.current.value === 'environment_and_friends') {
            setColorBlockClass('nature');
        } else if (selector.current.value === 'business_and_career') {
            setColorBlockClass('deal');
        } else if (selector.current.value === 'health_and_sports') {
            setColorBlockClass('extreme');
        } else if (selector.current.value === 'charity') {
            setColorBlockClass('gratitude');
        }
        setSphereName(selector.current.value);
    };
    const getStartTime = () => {
        setStartTimeValue(startTimeCapture.current.value);
    };
    const getEndTime = () => {
        setEndTimeValue(endTimeCapture.current.value);
    };

    const setPerson = (e) => {
        setPersonValue(e.target.value);
    };
    const eventKey = (e) => {
        setEventId(e.target.id);
        setEventName(e.target.textContent);
        setEventSlug(e.target.getAttribute('value'));

        e.target.getAttribute('id');
    };
    const sphereKey = () => {
        selector.options[selector.selectedIndex].getAttribute('data-key');
    };

    let selector = React.createRef();
    let startTimeCapture = React.createRef();
    let endTimeCapture = React.createRef();

    let saveItem = (e) => {
        const object = {
            title: title,
            start_date: dateValue + ' ' + startTimeValue,
            end_date: dateValue + ' ' + endTimeValue,
            event: eventSlug,
            place: locationValue,
            sphere: selector.current.value,
            description: '',
        };
        // let validTitle = false
        // let validStart = false
        // let validEnd = false
        // let validEvent = false
        // let validPlace = false
        // let validOverall = false
        if (object.title.length === 0) {
            validTitle = false;
        } else {
            validTitle = true;
        }

        if (
            object.start_date === undefined ||
            object.start_date === null ||
            object.start_date === ' :00' ||
            object.start_date.length < 17
        ) {
            validStart = false;
        } else {
            validStart = true;
        }

        if (
            object.end_date === undefined ||
            object.end_date === null ||
            object.end_date === ' :00' ||
            object.end_date.length < 17
        ) {
            validEnd = false;
        } else {
            validEnd = true;
        }

        // if (
        //   object.event === undefined ||
        //   object.event === null ||
        //   object.event.length === 0
        // ) {
        //   validEvent = false;
        // } else {
        //   validEvent = true;
        // }

        if (validTitle && validStart && validEnd && validSphere) {
            validOverall = true;
        } else {
            validOverall = false;
        }

        // const tempo = [...backendData];
        // tempo.push(object);
        // setBackendData((tempo) => [...tempo, object]);

        if (validOverall) {
            calendarEventMutation.mutate(object);
            onClose();
        } else {
            e.preventDefault();
            alert('Форма не заполнена!');
        }
    };

    return (
        <>
            <div className="modal-wrap">
                <div className="modal_window">
                    <div
                        className="calendarReminderAdder"
                        style={{
                            border: validOverall ? '2px solid green' : '2px solid red',
                        }}
                        onChange={validation}
                    >
                        <div className="calendarReminderCreaterVisit">
                            <input
                                type="text"
                                name="text"
                                placeholder="Цель заметки"
                                value={title}
                                onChange={setNameTitle}
                            />
                        </div>
                        <div className="calendarReminderCreaterTypes" onClick={eventKey}>
                            <div
                                id="1"
                                value="event"
                                className={eventId === '1' ? 'totalTimeSpansSelected' : ''}
                            >
                                Мероприятие
                            </div>
                            <div
                                id="2"
                                value="task"
                                className={eventId === '2' ? 'totalTimeSpansSelected' : ''}
                            >
                                Задача
                            </div>
                            <div
                                id="3"
                                value="reminder"
                                className={eventId === '3' ? 'totalTimeSpansSelected' : ''}
                            >
                                Напоминание
                            </div>
                        </div>
                        <div className="calendarReminderCreaterCloser" onClick={onClose}>
                            <CloseCalendarIcon />
                        </div>
                        <div className="calendarReminderCreaterData">
                            <div>
                                <ClockCalendarIcon />
                            </div>
                            <span className="calendarReminderCreaterDataText">
                                <input
                                    type="date"
                                    name="text"
                                    placeholder="Время"
                                    value={dateValue}
                                    onChange={setDate}
                                />
                                {/* <input
                  type="time"
                  name="text"
                  placeholder="Время"
                  value={startTimeValue}
                  onChange={setStartTime}
                /> */}
                                {/* <input
                  type="time"
                  name="text"
                  placeholder="Время"
                  value={endTimeValue}
                  onChange={setEndTime}
                /> */}

                                <select
                                    ref={startTimeCapture}
                                    className="endDropdownTime"
                                    onChange={getStartTime}
                                >
                                    <option value="" selected disabled hidden>
                                        Начало
                                    </option>
                                    <option value="00:00:00">00:00</option>
                                    <option value="00:30:00">00:30</option>
                                    <option value="01:00:00">01:00</option>
                                    <option value="01:30:00">01:30</option>
                                    <option value="02:00:00">02:00</option>
                                    <option value="02:30:00">02:30</option>
                                    <option value="03:00:00">03:00</option>
                                    <option value="03:30:00">03:30</option>
                                    <option value="04:00:00">04:00</option>
                                    <option value="04:30:00">04:30</option>
                                    <option value="05:00:00">05:00</option>
                                    <option value="05:30:00">05:30</option>
                                    <option value="06:00:00">06:00</option>
                                    <option value="06:30:00">06:30</option>
                                    <option value="07:00:00">07:00</option>
                                    <option value="07:30:00">07:30</option>
                                    <option value="08:00:00">08:00</option>
                                    <option value="08:30:00">08:30</option>
                                    <option value="09:00:00">09:00</option>
                                    <option value="09:30:00">09:30</option>
                                    <option value="10:00:00">10:00</option>
                                    <option value="10:30:00">10:30</option>
                                    <option value="11:00:00">11:00</option>
                                    <option value="11:30:00">11:30</option>
                                    <option value="12:00:00">12:00</option>
                                    <option value="12:30:00">12:00</option>
                                    <option value="13:00:00">13:00</option>
                                    <option value="13:30:00">13:30</option>
                                    <option value="14:00:00">14:00</option>
                                    <option value="14:30:00">14:30</option>
                                    <option value="15:00:00">15:00</option>
                                    <option value="15:30:00">15:30</option>
                                    <option value="16:00:00">16:00</option>
                                    <option value="16:30:00">16:30</option>
                                    <option value="17:00:00">17:00</option>
                                    <option value="17:30:00">17:30</option>
                                    <option value="18:00:00">18:00</option>
                                    <option value="18:30:00">18:30</option>
                                    <option value="19:00:00">19:00</option>
                                    <option value="19:30:00">19:30</option>
                                    <option value="20:00:00">20:00</option>
                                    <option value="20:30:00">20:30</option>
                                    <option value="21:00:00">21:00</option>
                                    <option value="21:30:00">21:00</option>
                                    <option value="22:00:00">22:00</option>
                                    <option value="22:30:00">22:30</option>
                                    <option value="23:00:00">23:00</option>
                                    <option value="23:30:00">23:30</option>
                                </select>

                                <select
                                    ref={endTimeCapture}
                                    className="endDropdownTime"
                                    onChange={getEndTime}
                                >
                                    <option value="" selected disabled hidden>
                                        Конец
                                    </option>
                                    <option value="00:00:00">00:00</option>
                                    <option value="00:30:00">00:30</option>
                                    <option value="01:00:00">01:00</option>
                                    <option value="01:30:00">01:30</option>
                                    <option value="02:00:00">02:00</option>
                                    <option value="02:30:00">02:30</option>
                                    <option value="03:00:00">03:00</option>
                                    <option value="03:30:00">03:30</option>
                                    <option value="04:00:00">04:00</option>
                                    <option value="04:30:00">04:30</option>
                                    <option value="05:00:00">05:00</option>
                                    <option value="05:30:00">05:30</option>
                                    <option value="06:00:00">06:00</option>
                                    <option value="06:30:00">06:30</option>
                                    <option value="07:00:00">07:00</option>
                                    <option value="07:30:00">07:30</option>
                                    <option value="08:00:00">08:00</option>
                                    <option value="08:30:00">08:30</option>
                                    <option value="09:00:00">09:00</option>
                                    <option value="09:30:00">09:30</option>
                                    <option value="10:00:00">10:00</option>
                                    <option value="10:30:00">10:30</option>
                                    <option value="11:00:00">11:00</option>
                                    <option value="11:30:00">11:30</option>
                                    <option value="12:00:00">12:00</option>
                                    <option value="12:30:00">12:00</option>
                                    <option value="13:00:00">13:00</option>
                                    <option value="13:30:00">13:30</option>
                                    <option value="14:00:00">14:00</option>
                                    <option value="14:30:00">14:30</option>
                                    <option value="15:00:00">15:00</option>
                                    <option value="15:30:00">15:30</option>
                                    <option value="16:00:00">16:00</option>
                                    <option value="16:30:00">16:30</option>
                                    <option value="17:00:00">17:00</option>
                                    <option value="17:30:00">17:30</option>
                                    <option value="18:00:00">18:00</option>
                                    <option value="18:30:00">18:30</option>
                                    <option value="19:00:00">19:00</option>
                                    <option value="19:30:00">19:30</option>
                                    <option value="20:00:00">20:00</option>
                                    <option value="20:30:00">20:30</option>
                                    <option value="21:00:00">21:00</option>
                                    <option value="21:30:00">21:00</option>
                                    <option value="22:00:00">22:00</option>
                                    <option value="22:30:00">22:30</option>
                                    <option value="23:00:00">23:00</option>
                                    <option value="23:30:00">23:30</option>
                                </select>
                            </span>

                            <div>
                                <FlagIcon />
                            </div>
                            <span className="calendarReminderCreaterDataText">
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Частота"
                                    value={endTimeValue}
                                    onChange={setEndTime}
                                />
                            </span>
                            <div>
                                <PeopleIcon />
                            </div>
                            <span className="calendarReminderCreaterDataText">
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Создатель"
                                    value={author}
                                    onChange={setAuthorName}
                                />
                            </span>
                            <div>
                                <LocationIcon />
                            </div>
                            <span className="calendarReminderCreaterDataText">
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Место"
                                    value={locationValue}
                                    onChange={setLocation}
                                />
                            </span>
                            <div>
                                <CalendarIcon />
                            </div>
                            <span className="calendarReminderCreaterDataText">
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Человек"
                                    value={personValue}
                                    onChange={setPerson}
                                />
                            </span>
                            <div className={colorBlockClass} />
                            <span className="calendarColorText">
                                Сфера:
                                <select ref={selector} onChange={getCurrentValue}>
                                    <option value="" selected disabled hidden>
                                        Выбрать опцию
                                    </option>
                                    <option value="health_and_sports" onClick={sphereKey}>
                                        Здоровье и спорт
                                    </option>
                                    <option value="business_and_career" onClick={sphereKey}>
                                        Бизнес и карьера
                                    </option>
                                    <option value="family_and_love" onClick={sphereKey}>
                                        Семья и любовь
                                    </option>
                                    <option value="personal_growth" onClick={sphereKey}>
                                        Личностный рост
                                    </option>
                                    <option value="investment" onClick={sphereKey}>
                                        Инвестиции
                                    </option>
                                    <option value="environment_and_friends" onClick={sphereKey}>
                                        Окружение и друзья
                                    </option>
                                    <option value="brightness_of_life" onClick={sphereKey}>
                                        Яркость жизни
                                    </option>
                                    <option value="charity" onClick={sphereKey}>
                                        Благотворительность
                                    </option>
                                </select>
                            </span>
                        </div>
                        <div className="calendarReminderCreaterButtons">
                            <button
                                className="calendarReminderCreaterDoneButton"
                                onClick={saveItem}
                            >
                                Создать
                            </button>
                        </div>
                    </div>
                    <div className="cover"> </div>
                </div>
            </div>
        </>
    );
};
