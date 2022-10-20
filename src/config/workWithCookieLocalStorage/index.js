import Cookies from 'js-cookie';

export const readStateFromCookie = (id) => {
    return Cookies.get(id);
};

export const deleteStateFromCookie = (id) => {
    return Cookies.remove(id);
};

export const pushStateToCookie = (id, val, expires = 1) => {
    return Cookies.set(id, val, { expires });
};
