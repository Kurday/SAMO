import {
    BalanceWheelIcon,
    DiaryIcon,
    CalendarIcon,
    PurposesIcon,
    ValuesIcon,
    ResultsIcon,
    ListIcon,
    SettingsIcon,
} from 'assets/icons';

export const menuData = [
    { id: 'balance', title: 'Колесо баланса', icon: <BalanceWheelIcon />, path: '/main' },
    { id: 'diary', title: 'Дневник', icon: <DiaryIcon />, path: '/diary' },
    { id: 'calendar', title: 'Календарь', icon: <CalendarIcon />, path: '/calendar' },
    { id: 'purpose', title: 'Мои цели', icon: <PurposesIcon />, path: '/purpose' },
    { id: 'values', title: 'Мои ценности', icon: <ValuesIcon />, path: '/values' },
    { id: 'results', title: 'Итоги', icon: <ResultsIcon />, path: '/week' },
    { id: 'analytics', title: 'Аналитика', icon: <ResultsIcon />, path: '/analytics' },
    { id: 'lists', title: 'Список книг и фильмов', icon: <ListIcon />, path: '/lists' },
    { id: 'settings', title: 'Настройки', icon: <SettingsIcon />, path: '/settings' },
];
