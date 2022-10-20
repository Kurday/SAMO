import { useState, useMemo, useReducer } from 'react';
import cn from 'classnames';
import { DateTime } from 'luxon';

import { getToday } from 'utils/getToday';
import { titleClassNames } from '../constants';
import { dateTimeReducer } from '../helpers';
import { CalendarReminderModal } from '../CalendarReminderModal';
import { CalendarHeader } from '../CalendarHeader';
import { useCalendarEventsQuery } from '../api';

import './CalendarWeek.css';

const dayHours = Array.from(Array(24), (_, index) =>
    DateTime.now().startOf('day').plus({ hours: index }),
);

export const CalendarWeek = () => {
    const calendarEventsQuery = useCalendarEventsQuery();
    const events = calendarEventsQuery.data;
    const [eventId, setEventId] = useState(-1);

    const [date, setDate] = useReducer(dateTimeReducer, null, getToday);
    const showToday = () => setDate(getToday);

    const [reminderVisible, setReminderVisible] = useState(false);
    const showReminder = () => setReminderVisible(true);
    const hideReminder = () => setReminderVisible(false);

    const setPreviousWeek = () => setDate((prevDate) => prevDate.minus({ week: 1 }).startOf('day'));
    const setNextWeek = () => setDate((prevDate) => prevDate.plus({ week: 1 }).startOf('day'));

    const { startingWeek, endingWeek, weekDays } = useMemo(() => {
        const startingWeek = date.startOf('week');

        return {
            startingWeek,
            endingWeek: date.endOf('week'),
            weekDays: Array.from(Array(7), (_, index) =>
                startingWeek.plus({ days: index }).startOf('day'),
            ),
        };
    }, [date]);

    return (
        <>
            <CalendarHeader
                previousWeek={setPreviousWeek}
                nextWeek={setNextWeek}
                showToday={showToday}
            />
            <div className={'calendarWeek'}>
                <div className={'calendarWeekDates'}>
                    <span className={'calendarDates'}>
                        {startingWeek.toFormat('d MMMM yyyy')} -{' '}
                        {endingWeek.toFormat('d MMMM yyyy')}
                    </span>
                </div>
                <div className={'calendarMonthDayHeader'}>
                    {weekDays.map((weekDay, i) => (
                        <div key={i}>{weekDay.weekdayLong}</div>
                    ))}
                </div>
                <div className={'calendarDayTimeBlockWeek'}>
                    {dayHours.map((day) => (
                        <span className="calendarDayTimeBlockData">
                            {day.toLocaleString(DateTime.TIME_24_SIMPLE)}
                        </span>
                    ))}
                </div>

                <div className="calendarMonthWeek">
                    {weekDays.map((weekDay, i) => (
                        <div key={i} className={'dayWeek'} onClick={() => setDate(weekDay)}>
                            <div className="digit">{weekDay.day}</div>

                            {Array.isArray(events) &&
                                events.map((event, i) => {
                                    const endDate = DateTime.fromSQL(event.end_date);
                                    if (endDate.day !== weekDay.day) {
                                        return null;
                                    }

                                    const startDate = DateTime.fromSQL(event.start_date);
                                    const diffInHours = endDate.hour - startDate.hour;
                                    const top = (startDate.hour + 1) * 20;
                                    const height =
                                        diffInHours < 2 || diffInHours > 15
                                            ? undefined
                                            : (diffInHours + 1) * 20;

                                    return (
                                        <div
                                            className={cn(titleClassNames[event.sphere.title])}
                                            key={i}
                                            onClick={() => {
                                                setEventId(event.id);
                                                showReminder();
                                            }}
                                            style={{
                                                position: 'sticky',
                                                top,
                                                height,
                                            }}
                                        >
                                            <div>{event.title}</div>
                                        </div>
                                    );
                                })}
                        </div>
                    ))}

                    {reminderVisible && Array.isArray(events) ? (
                        <CalendarReminderModal onClose={hideReminder} eventId={eventId} />
                    ) : null}
                </div>
            </div>
        </>
    );
};
