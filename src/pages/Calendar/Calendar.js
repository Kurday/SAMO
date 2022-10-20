import { Switch, Route, Redirect } from 'react-router-dom';

import { CalendarDay } from './CalendarDay';
import { CalendarMonth } from './CalendarMonth';
import { CalendarWeek } from './CalendarWeek';

export const Calendar = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/calendar/day">
                    <CalendarDay />
                </Route>
                <Route path="/calendar/week">
                    <CalendarWeek />
                </Route>
                <Route path="/calendar/month">
                    <CalendarMonth />
                </Route>
                <Redirect to="/calendar/month" />
            </Switch>
        </div>
    );
};
