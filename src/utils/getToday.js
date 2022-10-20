import { DateTime } from 'luxon';

export const getToday = () => DateTime.now().startOf('day');
