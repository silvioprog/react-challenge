import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatMonthYear } from '../core';

import { today, previousMonth, nextMonth } from '../store/Calendar/Calendar.actions';

const CalendarBar = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => dispatch(today()), [dispatch]);

  return (
    <nav className="navbar navbar-dark row bg-primary rounded-top">
      <div className="container-fluid">
        <div className="navbar-brand user-select-none">
          <strong>
            {formatMonthYear(calendar.currentDate)}
            <div className="d-none d-sm-block border-bottom" />
          </strong>
        </div>
        <div className="d-block d-sm-none w-100" />
        <div className="d-flex">
          <div className="btn-group" role="group" aria-label="Month navigation">
            <button
              type="button"
              className="btn btn-outline-light bi bi-caret-left-fill shadow-none"
              title="Previous month"
              onClick={() => dispatch(previousMonth())}
            />
            <button
              type="button"
              className="btn btn-outline-light bi bi-circle-fill shadow-none"
              title="Today"
              onClick={() => dispatch(today())}
            />
            <button
              type="button"
              className="btn btn-outline-light bi bi-caret-right-fill shadow-none"
              title="Next month"
              onClick={() => dispatch(nextMonth())}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CalendarBar;
