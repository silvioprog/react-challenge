import { useDispatch, useSelector } from 'react-redux';

import './CalendarTable.css';

import { formatMonthYear } from '../core';
import { clearReminders } from '../store/Calendar/Calendar.actions';

import CalendarReminders from './CalendarReminders';

const CalendarButton = (props) => {
  const dispatch = useDispatch();

  if (!props.visible) return null;

  const handleClear = (event, day) => {
    event.stopPropagation();
    dispatch(clearReminders(day));
  };

  return (
    <button
      className="btn-close-all btn-close btn-sm border shadow-none float-end mt-1"
      onClick={(event) => handleClear(event, props.col)}
    />
  );
};

const CalendarRow = (props) => <div className="row">{props.children}</div>;

const CalendarCol = (props) => (
  <div
    className="day col-sm col-xs-1 border border-secondary p-0"
    data-weekend={props.col.weekend}
    data-current={props.col.current}
    key={props.colIndex}
    onClick={() => props.onClick(props.col)}
  >
    <div className="title user-select-none sticky-top px-1">
      <strong className={props.col.today ? 'badge rounded bg-primary' : null}>{props.col.day}</strong>
      <CalendarButton visible={props.col.reminderIds.length > 0} col={props.col} />
    </div>
    <CalendarReminders day={props.col} onClick={(reminder) => props.onClick(props.col, reminder)} />
  </div>
);

const CalendarTable = (props) => {
  const calendar = useSelector((state) => state.calendar);
  const currentCalendar = calendar.calendars.get(formatMonthYear(calendar.currentDate)) || [];

  return (
    <div>
      {currentCalendar.map((row, rowIndex) => (
        <CalendarRow key={rowIndex}>
          {row.map((col, colIndex) => (
            <CalendarCol col={col} colIndex={colIndex} row={row} key={colIndex} onClick={props.onClick} />
          ))}
          <div className="d-block d-sm-none mt-2" />
        </CalendarRow>
      ))}
    </div>
  );
};

export default CalendarTable;
