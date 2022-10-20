import {
    CalendarIcon,
    ClockCalendarIcon,
    FlagIcon,
    LocationIcon,
    PeopleIcon,
    CloseCalendarIcon,
} from 'assets/icons';
import { useCalendarEventQuery } from '../api';

import './CalendarReminderModal.css';

export const CalendarReminderModal = ({ onClose, eventId }) => {
    const calendarEventQuery = useCalendarEventQuery(eventId);
    const calendarEvent = calendarEventQuery.data;
    if (calendarEvent == null) {
        return null;
    }

    return (
        <>
            <div className="calendarReminderCreater">
                <div className="calendarReminderCreaterVisit">
                    <h3>{calendarEvent.title}</h3>
                </div>

                <div className="calendarReminderCreaterTypes">
                    <div
                        className={
                            calendarEvent.event.title === 'Мероприятие'
                                ? 'totalTimeSpansSelected'
                                : ''
                        }
                    >
                        Мероприятие
                    </div>
                    <div
                        className={
                            calendarEvent.event.title === 'Задача' ? 'totalTimeSpansSelected' : ''
                        }
                    >
                        Задача
                    </div>
                    <div
                        className={
                            calendarEvent.event.title === 'Напоминание'
                                ? 'totalTimeSpansSelected'
                                : ''
                        }
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
                    <span className="calendarReminderCreaterDataText">{calendarEvent.id}</span>
                    <div>
                        <FlagIcon />
                    </div>
                    <span className="calendarReminderCreaterDataText">
                        {calendarEvent.start_date} - {calendarEvent.end_date}
                    </span>
                    <div>
                        <PeopleIcon />
                    </div>
                    <span className="calendarReminderCreaterDataText">{calendarEvent.author}</span>
                    <div>
                        <LocationIcon />
                    </div>
                    <span className="calendarReminderCreaterDataText">{calendarEvent.place}</span>
                    <div>
                        <CalendarIcon />
                    </div>
                    <span className="calendarReminderCreaterDataText">{calendarEvent.author}</span>
                    <div className="calendarColorBlock" />
                    <span className="calendarColorText">Сфера: {calendarEvent.sphere.title}</span>
                </div>

                <div className="calendarReminderCreaterButtons">
                    <button
                        type="button"
                        className="calendarReminderCreaterDoneButton"
                        onClick={onClose}
                    >
                        Понял
                    </button>
                </div>
            </div>
            <div className="cover" onClick={onClose} />
        </>
    );
};
