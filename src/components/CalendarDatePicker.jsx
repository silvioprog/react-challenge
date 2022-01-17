import { forwardRef, Fragment } from 'react';
import DatePicker from 'react-datepicker';

import './CalendarDatePicker.css';

const DateTimeInput = forwardRef(({ type, value, onClick, onChange }, ref) => (
  <Fragment>
    <input
      ref={ref}
      type="text"
      className="form-control"
      value={value}
      onClick={onClick}
      onChange={(event) => onChange(event.target.value)}
    ></input>
    <i className={`calendar-icon bi bi-${type === 'time' ? 'clock' : 'calendar'}`}></i>
  </Fragment>
));

const CalendarDatePicker = (props) => {
  if (props.type === 'time') {
    return (
      <DatePicker
        showTimeSelect
        showTimeSelectOnly
        timeCaption="Time"
        dateFormat="h:mm aa"
        selected={props.date}
        customInput={<DateTimeInput type="time" />}
        onChange={props.onChange}
      />
    );
  }
  return (
    <DatePicker
      dateFormat="MM/dd/yyyy"
      selected={props.date}
      customInput={<DateTimeInput />}
      onChange={(date) => props.onChange(date)}
    />
  );
};

export default CalendarDatePicker;
