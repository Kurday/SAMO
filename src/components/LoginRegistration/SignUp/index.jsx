import React, { memo, useCallback } from 'react';
import styles from '../Login.module.css';
import Form from '../../form/Form';
import Input from '../../input/Input';
import { useFormWithValidation } from '../validation';
import { useHistory } from 'react-router-dom';
import { registration } from 'utils/login';
import { useAuthActions } from 'hooks/authHook';

const SignUp = () => {
    const history = useHistory();
    const { values, handleChange } = useFormWithValidation();
    const { login } = useAuthActions;

    const loginRedirect = useCallback(() => {
        history.push('/auth/login');
    }, []);

    const loginFormOnFinish = useCallback(
        (e) => {
            e.preventDefault();
            registration(values, login);
        },
        [values, login],
    );

    return (
        <div className={styles.loginPage}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <h1 className={styles.h1}>Регистрация</h1>

                    <Form className={styles.container} onSubmit={loginFormOnFinish}>
                        <Input required label="Имя" name="firstname" onChange={handleChange} />
                        <Input required label="Фамилия" name="lastname" onChange={handleChange} />
                        <Input
                            required
                            label="Имя пользователя*"
                            name="username"
                            onChange={handleChange}
                        />
                        <Input required label="Email*" name="email" onChange={handleChange} />
                        <Input
                            required
                            label="Пароль*"
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <Input
                            required
                            label="Занятие*"
                            name="occupation"
                            onChange={handleChange}
                        />
                        <button className={styles.registerbtn} type="submit">
                            Зарегистрироваться
                        </button>
                    </Form>
                    <p>
                        Есть аккаунта?{' '}
                        <button className={styles.registrationButton} onClick={loginRedirect}>
                            Войти
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(SignUp);
