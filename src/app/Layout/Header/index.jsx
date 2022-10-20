import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { PushIcon, SearchIcon } from 'assets/icons';
import { useUserQuery } from 'service/sections/user';
import NoAvatar from 'assets/img/no-avatar.png';

import './Header.scss';

const MainHeader = (props) => {
    const { title, withNav, withChangeTheme, darkTheme } = props;
    const userQuery = useUserQuery();
    const user = userQuery?.data?.user;

    return (
        <header className={cn({ header: true, headerDark: darkTheme })}>
            <h1>{title}</h1>
            <div className="header_profile">
                {withChangeTheme && (
                    <>
                        <div className="header__item header__day">
                            <span>
                                <NavLink to="/diary" activeClassName="active-period">
                                    Утренний
                                </NavLink>
                            </span>
                        </div>
                        <div className="header__item header__night">
                            <span>
                                <NavLink to="/diarydark" activeClassName="active-period">
                                    Вечерний
                                </NavLink>
                            </span>
                        </div>
                    </>
                )}
                {withNav && (
                    <div className="header_nav">
                        <NavLink
                            to="week"
                            className="header_nav-item"
                            activeClassName="active-period"
                        >
                            Неделя
                        </NavLink>
                        <NavLink
                            to="month"
                            className="header_nav-item"
                            activeClassName="active-period"
                        >
                            Месяц
                        </NavLink>
                    </div>
                )}
                <div className="header-icons">
                    <SearchIcon stroke={darkTheme && '#dde2ff'} className="icon_search" />
                    <PushIcon
                        stroke={darkTheme && '#384363'}
                        fill={darkTheme && '#dde2ff'}
                        className="icon_push"
                    />
                </div>
                <div className="profile">
                    <span>{user?.username}</span>
                    <img
                        src={user.user_image === null ? NoAvatar : user.user_image}
                        alt="profile"
                    />
                </div>
            </div>
        </header>
    );
};

export default memo(MainHeader);
