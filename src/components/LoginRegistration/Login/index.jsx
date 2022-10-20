import React, { memo, useCallback } from 'react';
import { authorizationPost } from 'utils/login';
import styles from '../Login.module.css';
import Form from '../../form/Form';
import Input from '../../input/Input';
import { useFormWithValidation } from '../validation';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { useAuthActions } from 'hooks/authHook';

const Login = () => {
    const { values, handleChange } = useFormWithValidation();
    const { login } = useAuthActions();
    const history = useHistory();

    const registrationRedirect = useCallback(() => {
        history.push('/auth/signup');
    }, []);

    const loginFormOnFinish = useCallback(
        (e) => {
            e.preventDefault();
            authorizationPost(values, login);
        },
        [values, login],
    );

    return (
        <div className={styles.loginPage}>
            <div className={styles.body}>
                <div className={cn(styles.header, styles.header__login)}>
                    <h1 className={styles.h1}>Вход</h1>
                    <Form className={styles.container} onSubmit={loginFormOnFinish}>
                        <Input required label="Email*" name="email" onChange={handleChange} />
                        <Input
                            required
                            label="Пароль*"
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <button className={styles.registerbtn} type="submit">
                            Войти
                        </button>
                    </Form>
                    <div className={styles.containerSignin}>
                        <p>
                            Нет аккаунта?{' '}
                            <button
                                className={styles.registrationButton}
                                onClick={registrationRedirect}
                            >
                                Зарегистрироваться
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Login);
