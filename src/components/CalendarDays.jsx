import { WEEKDAYS } from '../core';

const CalendarDay = (props) => (
  <div className="col user-select-none p-1">
    <strong>{props.day}</strong>
  </div>
);

const CalendarDays = () => (
  <div className="d-none d-lg-flex row text-white text-center bg-primary">
    {WEEKDAYS.map((day) => (
      <CalendarDay day={day} key={day} />
    ))}
  </div>
);

export default CalendarDays;
