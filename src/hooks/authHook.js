import { useEffect, useState, useMemo, useRef } from 'react';
import { useQueryClient } from 'react-query';
import axios from 'axios';
import constate from 'constate';

import { STORAGE_AUTH_KEY } from 'config/constants';
import { pushStateToCookie, deleteStateFromCookie } from 'config/workWithCookieLocalStorage';

export const [AuthContext, useAuthState, useAuthActions] = constate(
    () => {
        const [isLoggedIn, setIsLoggedIn] = useState(
            () => localStorage.getItem(STORAGE_AUTH_KEY) === 'true',
        );
        const queryClient = useQueryClient();

        const actions = useMemo(
            () => ({
                login: (token) => {
                    pushStateToCookie('token', token, 90);
                    localStorage.setItem(STORAGE_AUTH_KEY, 'true');
                    setIsLoggedIn(true);
                },
                logout: () => {
                    deleteStateFromCookie('token');
                    localStorage.setItem(STORAGE_AUTH_KEY, 'false');
                    setIsLoggedIn(false);
                },
            }),
            [],
        );

        useEffect(() => {
            if (!isLoggedIn) {
                queryClient.removeQueries();
            }
        }, [queryClient, isLoggedIn]);

        useEffect(() => {
            const listener = (event) => {
                if (event.key === null) {
                    setIsLoggedIn(false);
                } else if (event.key === STORAGE_AUTH_KEY) {
                    setIsLoggedIn(event.newValue === 'true');
                }
            };
            window.addEventListener('storage', listener);
            return () => {
                window.removeEventListener('storage', listener);
            };
        }, []);

        const idRef = useRef(null);
        if (idRef.current === null) {
            idRef.current = axios.interceptors.response.use(
                (response) => response,
                (err) => {
                    if (axios.isAxiosError(err) && err.response?.status === 403) {
                        actions.logout();
                    }
                    return Promise.reject(err);
                },
            );
        }

        useEffect(
            () => () => {
                const id = idRef.current;
                if (id !== null) {
                    idRef.current = null;
                    axios.interceptors.response.eject(id);
                }
            },
            [],
        );

        return [isLoggedIn, actions];
    },
    ([isLoggedIn]) => isLoggedIn,
    ([, actions]) => actions,
);
