import { alertError, alertSuccess } from 'components/Alert';
import { API } from 'service';
import Swal from 'sweetalert2';

export const authorizationPost = async ({ email, password }, login) => {
    const data = {
        user: {
            email,
            password,
        },
    };
    await API.login
        .loginPost(data)
        .then((res) => {
            Swal.fire(alertSuccess);
            login(res.data.user.token);
        })
        .catch(() => {
            Swal.fire(alertError);
        });
};

export const registration = async (
    { email, password, username, occupation, firstname, lastname },
    login,
) => {
    const data = {
        user: {
            email,
            password,
            username,
            occupation,
            firstname,
            lastname,
        },
    };
    await API.login
        .registrationtPost(data)
        .then((res) => {
            login(res.data.user.token);
        })
        .catch(() => {
            Swal.fire(alertError);
        });
};
