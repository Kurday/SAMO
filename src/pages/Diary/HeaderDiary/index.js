import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUserQuery } from 'service/sections/user';
import './HeaderDiary.scss';
import { PushIcon, SearchIcon } from '../../../assets/icons';

const HeaderDiary = () => {
    const userQuery = useUserQuery();
    const user = userQuery.data.user;

    const history = useHistory();
    const redirectTo = (path) => history.push(path);
    return (
        <div className="header__diarly">
            <div className="header__title">Дневник</div>

            <div className="header__nav">
                <div onClick={() => redirectTo('/diary')} className="hover">
                    Утренний
                </div>
                <div onClick={() => redirectTo('/darkdiary')} className="hover">
                    Вечерний
                </div>

                <div onClick={() => redirectTo('/')} className="search">
                    <SearchIcon />
                </div>
                <div onClick={() => redirectTo('/')} className="notifications">
                    <PushIcon />
                </div>
                <div onClick={() => redirectTo('/')} className="profile"></div>
                <div className="profile">
                    <span>{user.username}</span>
                    <img src={user.user_image} alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default HeaderDiary;
