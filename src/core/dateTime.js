import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

const WEEKDAYS = dayjs.weekdays();

const today = () => dayjs();

const previousMonth = (date) => date.subtract(1, 'month');

const nextMonth = (date) => date.add(1, 'month');

const startDay = (date) => date.startOf('M').day();

const daysPerMonth = (date) => Array.from({ length: date.daysInMonth() }, (_, i) => i + 1);

const firstDaysPerMonth = (date, count = 1) => daysPerMonth(date).splice(0, count);

const lastDaysPerMonth = (date, count = 1) => daysPerMonth(date).splice(-count, count);

const compareDayToDate = ({ year, month, day }, date) =>
  year === date.getFullYear() && month === date.getMonth() && day === date.getDate();

const is16CurrentDays = (date) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const ge = date >= now;
  now.setDate(now.getDate() + 16);
  const le = date <= now;
  return ge && le;
};

const formatMonth = (date) => date.format('MMMM');

const formatYear = (date) => date.format('YYYY');

const formatMonthYear = (date) => formatMonth(date) + '-' + formatYear(date);

const formatTime = (date) => dayjs(date).format('h:mm A');

export {
  WEEKDAYS,
  today,
  previousMonth,
  nextMonth,
  startDay,
  daysPerMonth,
  firstDaysPerMonth,
  lastDaysPerMonth,
  compareDayToDate,
  is16CurrentDays,
  formatMonth,
  formatYear,
  formatMonthYear,
  formatTime,
};
