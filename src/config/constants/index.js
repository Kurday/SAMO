export const PROTOCOL = process.env.REACT_APP_PROTOCOL;
export const API_URL = process.env.REACT_APP_BASE_URL;

export const API_ORIGIN = `${PROTOCOL}://${API_URL}/api/v1/`;
export const LOGIN_URL = 'users/login/';
export const REGISTRATION_URL = 'users/';
export const STORAGE_AUTH_KEY = 'auth';

export const sphereDataOption = [
    {
        title: 'Здоровье и спорт',
        value: 'health_and_sports',
    },
    {
        title: 'Бизнес и карьера',
        value: 'business_and_career',
    },
    {
        title: 'Семья и любовь',
        value: 'family_and_love',
    },
    {
        title: 'Личностный рост',
        value: 'personal_growth',
    },
    {
        title: 'Инвестиции',
        value: 'investment',
    },
    {
        title: 'Окружение и друзья',
        value: 'environment_and_friends',
    },
    {
        title: 'Яркость жизни',
        value: 'brightness_of_life',
    },
    {
        title: 'Благотворительность',
        value: 'charity',
    },
];

export const dataDateOptions = [
    {
        title: '2 месяца',
        value: 'two_months',
    },
    {
        title: '6 месяцев',
        value: 'six_months',
    },
    {
        title: '1 год',
        value: 'one_years',
    },
];
