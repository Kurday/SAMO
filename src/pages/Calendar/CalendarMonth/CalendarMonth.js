import { useState, useMemo, useReducer } from 'react';
import cn from 'classnames';
import { DateTime } from 'luxon';

import { getToday } from 'utils/getToday';
import { titleClassNames } from '../constants';
import { dateTimeReducer } from '../helpers';
import { CalendarReminderModal } from '../CalendarReminderModal';
import { CalendarHeader } from '../CalendarHeader';
import { useCalendarEventsQuery } from '../api';
import Modal from './Components/Modal/Modal';

import './CalendarMonth.css';

export const CalendarMonth = () => {
    const [eventId, setEventId] = useState(null);
    const [date, setDate] = useReducer(dateTimeReducer, null, getToday);
    const [editFormOpen, setEditFormOpen] = useState(false);
    const calendarEventsQuery = useCalendarEventsQuery();
    const [modalActive, setModalActive] = useState(false);
    const [dateItem, setDateItem] = useState({});
    console.log(DateTime);

    const groupedByDayEvents = useMemo(
        () =>
            Array.isArray(calendarEventsQuery.data)
                ? calendarEventsQuery.data.reduce((acc, event) => {
                      const date = DateTime.fromSQL(event.start_date).toISODate();
                      if (acc[date]) {
                          acc[date].push(event);
                      } else {
                          acc[date] = [event];
                      }

                      return acc;
                  }, {})
                : {},
        [calendarEventsQuery.data],
    );

    const weeks = useMemo(() => {
        const start = date.startOf('month').startOf('week');
        const end = date.endOf('month').endOf('week');
        const weeks = Math.ceil(end.diff(start, 'days').days) / 7;

        return Array.from(Array(weeks), (_, weekIndex) =>
            Array.from(Array(7), (_, i) => start.plus({ days: weekIndex * 7 + i })),
        );
    }, [date]);

    const previousMonth = () => setDate((prev) => prev.minus({ months: 1 }));
    const showToday = () => setDate(getToday);
    const nextMonth = () => setDate((prev) => prev.plus({ months: 1 }));

    const closeEditForm = () => {
        setEditFormOpen(false);
    };

    return (
        <>
            <CalendarHeader
                previousMonth={previousMonth}
                showToday={showToday}
                nextMonth={nextMonth}
            />
            <div className="calendarMonth">
                <div className="calendarMonthDates">
                    <span className="calendarDates">
                        {date.toFormat('LLLL')} {date.toFormat('yyyy')}
                    </span>
                </div>
                <div className="calendarMonthDayHeader">
                    <div>Понедельник</div>
                    <div>Вторник</div>
                    <div>Среда</div>
                    <div>Четверг</div>
                    <div>Пятница</div>
                    <div>Суббота</div>
                    <div>Воскресенье</div>
                </div>
                {weeks.map((week) => (
                    <div className="calendarMonthWeek">
                        {week.map((day) => {
                            const isoDate = day.toISODate();
                            const dayEvents = groupedByDayEvents[isoDate];

                            return (
                                <div className="day" onClick={() => setModalActive(true)}>
                                    <div className="number">{day.day}</div>
                                    {Array.isArray(dayEvents)
                                        ? dayEvents.map((event, i) => (
                                              <div
                                                  key={event.id}
                                                  className={cn(
                                                      titleClassNames[event.sphere.title],
                                                  )}
                                                  onClick={() => {
                                                      setEventId(event.id);
                                                      setEditFormOpen(true);
                                                  }}
                                              >
                                                  <div>{event.title}</div>
                                              </div>
                                          ))
                                        : null}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            {editFormOpen ? (
                <CalendarReminderModal onClose={closeEditForm} eventId={eventId} />
            ) : null}
            <Modal active={modalActive} dateItem={dateItem} setActive={setModalActive} />
        </>
    );
};
