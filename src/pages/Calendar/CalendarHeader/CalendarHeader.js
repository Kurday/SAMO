import { useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { SearchIcon, PushIcon, PlusCalendarIcon } from 'assets/icons';
import { CalendarAddReminderForm } from '../CalendarAddReminderForm';
import { useUserQuery } from 'service/sections/user';
import NoAvatar from 'assets/img/no-avatar.png';

import './CalendarHeader.scss';

export const CalendarHeader = ({
    sidebarStatusTrue,
    previousMonth,
    showToday,
    nextMonth,
    previousWeek,
    nextWeek,
    previousDay,
    nextDay,
}) => {
    const [adderVisibility, setAdderVisibility] = useState(false);
    const showAdder = () => {
        setAdderVisibility(true);
    };
    const hideAdder = () => {
        setAdderVisibility(false);
    };

    const userQuery = useUserQuery();
    // const user = userQuery.data.user;

    return (
        <div className="totalHeader">
            <div className={sidebarStatusTrue ? 'totalBlock' : 'totalBlockOpened'}>Календарь</div>
            <div className="totalTimeSpans">
                <div className="calendarFeatures">
                    <div className="calendarAdd">
                        <div className="calendarAddButton" onClick={showAdder}>
                            <PlusCalendarIcon />
                        </div>
                    </div>
                    <Switch>
                        <Route path="/calendar/day">
                            <div className="calendarSwitchDate">
                                <button onClick={previousDay}>{'<'}</button>
                                <button onClick={showToday}>Сегодня</button>
                                <button onClick={nextDay}>{'>'}</button>
                            </div>
                        </Route>
                        <Route path="/calendar/week">
                            <div className="calendarSwitchDate">
                                <button onClick={previousWeek}>{'<'}</button>
                                <button onClick={showToday}>Сегодня</button>
                                <button onClick={nextWeek}>{'>'}</button>
                            </div>
                        </Route>
                        <Route path="/calendar/month">
                            <div className="calendarSwitchDate">
                                <button onClick={previousMonth}>{'<'}</button>
                                <button onClick={showToday}>Сегодня</button>
                                <button onClick={nextMonth}>{'>'}</button>
                            </div>
                        </Route>
                    </Switch>
                </div>
                <div className="calendarTimeSpansBlock">
                    <div className="calendarTimeSpansDay">
                        <NavLink activeClassName="totalTimeSpansSelected" to="/calendar/day">
                            День
                        </NavLink>
                    </div>
                    <div className="calendarTimeSpansWeek">
                        <NavLink activeClassName="totalTimeSpansSelected" to="/calendar/week">
                            Неделя
                        </NavLink>
                    </div>
                    <div className="calendarTimeSpansMonth">
                        <NavLink activeClassName="totalTimeSpansSelected" to="/calendar/month">
                            Месяц
                        </NavLink>
                    </div>
                </div>
                <div className="header-icons">
                    <div className="search">
                        <div className="searchCircle">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="bell">
                        <div className="bellNotified">
                            <PushIcon />
                        </div>
                    </div>
                </div>

                <div className="user">
                    <div className="userName">
                        <p>Vadim</p>
                    </div>
                    <div className="userImage">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            {adderVisibility ? <CalendarAddReminderForm onClose={hideAdder} /> : null}
        </div>
    );
};
