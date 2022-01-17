import { useSelector } from 'react-redux';

import './CalendarReminders.css';

import { compareDayToDate, formatTime } from '../core';

import CalendarWeather from './CalendarWeather';

const CalendarReminder = (props) => (
  <div
    className="user-select-none text-break border rounded p-1 mx-1 mb-1 mt-1"
    style={{ ...props.reminder.colors }}
    onClick={props.onClick}
  >
    <div>
      <small>
        <strong>{formatTime(props.reminder.dateTime)}</strong>
      </small>
      <CalendarWeather className="float-end" city={props.reminder.city} dateTime={props.reminder.dateTime} />
    </div>
    <div>
      <small>{props.reminder.text}</small>
    </div>
  </div>
);

const CalendarReminders = (props) => {
  const calendar = useSelector((state) => state.calendar);

  const getReminders = (day) =>
    calendar.reminders
      .filter(({ dateTime }) => compareDayToDate(day, dateTime))
      .sort(({ dateTime: a }, { dateTime: b }) => a - b);

  const handleClick = (event, reminder) => {
    event.stopPropagation();
    props.onClick(reminder);
  };

  return (
    <div className="reminders overflow-auto">
      {getReminders(props.day).map((reminder, reminderIndex) => (
        <CalendarReminder reminder={reminder} onClick={(event) => handleClick(event, reminder)} key={reminderIndex} />
      ))}
    </div>
  );
};

export default CalendarReminders;
