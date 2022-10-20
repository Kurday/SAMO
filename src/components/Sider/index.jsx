import { useReducer, memo, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthActions } from 'hooks/authHook';

import { menuData } from './menuItems';

import { ArrowIcon } from 'assets/icons';
import cn from 'classnames';
import './index.scss';

const Sider = () => {
    const [open, toggleOpen] = useReducer((prev) => !prev, false);
    const history = useHistory();
    const [activeModule, setActiveModule] = useState('/main');
    const { logout } = useAuthActions();
    const redirectTo = useCallback(
        (path) => {
            history.push(path);
            setActiveModule(path);
        },
        [history],
    );

    useEffect(() => {
        setActiveModule(history.location.pathname);
    }, [history]);

    return (
        <div
            className={cn({
                sidenav: true,
                active: open,
            })}
        >
            <h1 className="logo_h">Samo</h1>
            <hr />
            <button className="sider__closebtn" onClick={toggleOpen}>
                <ArrowIcon />
                <span>Свернуть</span>
            </button>
            <ul>
                {menuData?.map((item) => (
                    <li
                        onClick={() => redirectTo(item?.path)}
                        className={cn({
                            sider__item: true,
                            activeRoute: activeModule === item?.path,
                        })}
                        key={item?.id}
                    >
                        {item?.icon}
                        <span>{item?.title}</span>
                    </li>
                ))}
            </ul>
            <button className="logout btn btn_active" onClick={logout}>
                Выйти
            </button>
        </div>
    );
};

export default memo(Sider);
