import { useState, useMemo, useReducer } from 'react';
import { DateTime } from 'luxon';

import { getToday } from 'utils/getToday';
import { titleClassNames } from '../constants';
import { dateTimeReducer } from '../helpers';
import { CalendarReminderModal } from '../CalendarReminderModal';
import { CalendarHeader } from '../CalendarHeader';
import { useCalendarEventsQuery } from '../api';

import './CalendarDay.css';

export const CalendarDay = () => {
    const [eventId, setEventId] = useState(-1);
    const [date, setDate] = useReducer(dateTimeReducer, null, getToday);
    const [editFormOpen, setEditFormOpen] = useState(false);

    const calendarMonthQuery = useCalendarEventsQuery();
    const events = calendarMonthQuery.data;

    const dayHours = useMemo(
        () => Array.from(Array(24), (_, index) => date.plus({ hour: index })),
        [date],
    );

    const setPreviousDay = () => setDate((prevDate) => prevDate.minus({ days: 1 }));
    const setNextDay = () => setDate((prevDate) => prevDate.plus({ days: 1 }));
    const setToday = () => setDate(getToday);

    const showEditForm = () => setEditFormOpen(true);
    const closeEditForm = () => setEditFormOpen(false);

    return (
        <>
            <CalendarHeader
                previousDay={setPreviousDay}
                nextDay={setNextDay}
                showToday={setToday}
            />
            <div className="calendarDay">
                <div className="calendarDayDate">{date.toLocaleString(DateTime.DATE_HUGE)}</div>

                <div className="calendarDayTimeBlock">
                    {dayHours.map((day, i) => (
                        <span key={i} className="calendarDayTimeBlockData">
                            {day.toLocaleString(DateTime.TIME_24_SIMPLE)}
                        </span>
                    ))}
                    <div className="calendarBackendBlockData">
                        {Array.isArray(events)
                            ? events.map((event, i) => {
                                  const startDate = DateTime.fromSQL(event.start_date);
                                  if (startDate.toISODate() !== date.toISODate()) {
                                      return null;
                                  }

                                  const endDate = DateTime.fromSQL(event.end_date);
                                  const hourDifference = endDate.hour - startDate.hour;
                                  const top =
                                      startDate.hour === 0 ? 0 : (startDate.hour - 1) * 33 + 50;
                                  const height =
                                      hourDifference < 2 || hourDifference > 15
                                          ? undefined
                                          : 30 * hourDifference + 25;

                                  return (
                                      <div
                                          key={i}
                                          onClick={() => {
                                              setEventId(event.id);
                                              showEditForm();
                                          }}
                                          className={titleClassNames[event.sphere.title]}
                                          style={{
                                              position: 'absolute',
                                              top,
                                              height,
                                          }}
                                      >
                                          <div className="dataText">{event.title}</div>
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>

                {editFormOpen ? (
                    <CalendarReminderModal onClose={closeEditForm} eventId={eventId} />
                ) : null}
            </div>
        </>
    );
};
