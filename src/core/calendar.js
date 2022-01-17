import {
  startDay,
  daysPerMonth,
  previousMonth,
  nextMonth,
  firstDaysPerMonth,
  lastDaysPerMonth,
  compareDayToDate,
} from '.';

const position = (row, col) => row * 7 + col;

const remaining = (previousDays, currentDays) => 42 - (previousDays.length + currentDays.length);

const mapDay = (day, date) => {
  const year = date.year();
  const month = date.month();
  return {
    reminderIds: [],
    year,
    month,
    day,
    toDate: () => {
      let dateTime = new Date();
      dateTime.setFullYear(year, month, day);
      dateTime.setHours(date.hour() + 1, 0, 0, 0);
      return dateTime;
    },
  };
};

const table = (days) => {
  const table = [];
  for (let row = 0; row < 6; row++) {
    const cols = [];
    for (let col = 0; col < 7; col++) {
      let day = days[position(row, col)];
      if (col === 0 || col === 6) {
        day.weekend = true;
      }
      cols.push(day);
    }
    table.push(cols);
  }
  return table;
};

const calendar = (date) => {
  let currDate = previousMonth(date);
  const prevDays = lastDaysPerMonth(currDate, startDay(date)).map((day) => mapDay(day, currDate));
  const currDays = daysPerMonth(date).map((day) => {
    let currDay = { ...mapDay(day, date), current: true };
    if (compareDayToDate(currDay, new Date())) {
      currDay.today = true;
    }
    return currDay;
  });
  currDate = nextMonth(date);
  const nextDays = firstDaysPerMonth(currDate, remaining(prevDays, currDays)).map((day) => mapDay(day, currDate));
  return table(prevDays.concat(currDays).concat(nextDays));
};

export { calendar };
