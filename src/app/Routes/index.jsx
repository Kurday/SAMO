import { Route, Redirect, Switch } from 'react-router-dom';
import classNames from 'classnames';

import { WeekResult } from '../../pages/Results/WeekRes';
import { MonthResult } from '../../components/MonthRes';
import ValueWrapper from '../../pages/Values/ValuesWrapper';
import MainWrapper from '../../components/mainPage/MainWrapper';
import Diary from 'pages/Diary/Diary';
import DarkDiary from 'pages/Diary/DarkDiary';
import Goals from 'pages/Goals';
import { Lists } from 'pages/Lists';
import Analytics from '../../components/analytics/Analytics';
import Login from '../../components/LoginRegistration/Login/index';
import SignUp from '../../components/LoginRegistration/SignUp';
import Sider from 'components/Sider';
import { useAuthState } from 'hooks/authHook';

import '../../assets/project-styles/index.css';
import { Calendar } from 'pages/Calendar';

const ResultContent = ({ children }) => <div className="result-content">{children}</div>;
const GridContainer = ({ children, active = true }) => (
    <div className={classNames('grid_container', active && 'grid_active')}>{children}</div>
);

export const Routes = () => {
    const isLoggedIn = useAuthState();

    return isLoggedIn ? (
        <GridContainer>
            <Sider />
            <Switch>
                <Route exact path="/values" component={ValueWrapper} />
                <Route exact path={['/main', '/']} component={MainWrapper} />
                <Route path="/diary" component={Diary} />
                <Route path="/darkdiary" component={DarkDiary} />
                <Route exact path="/analytics" component={Analytics} />
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route exact path={['/purpose', '/goalsTime', '/goalsBalance']}>
                    <ResultContent>
                        <Goals />
                    </ResultContent>
                </Route>
                <Route exact path="/month">
                    <ResultContent>
                        <MonthResult />
                    </ResultContent>
                </Route>
                <Route exact path="/week">
                    <ResultContent>
                        <WeekResult />
                    </ResultContent>
                </Route>
                <Route exact path="/lists">
                    <Lists />
                </Route>
                <Redirect to="/main" />
            </Switch>
        </GridContainer>
    ) : (
        <>
            <Route exact path="/auth/login">
                <Login />
            </Route>
            <Route exact path="/auth/signup">
                <SignUp />
            </Route>
            <Redirect to="/auth/login" />
        </>
    );
};
