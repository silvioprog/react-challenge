import Modal from 'bootstrap/js/src/modal';
import { useEffect, useRef, useState } from 'react';

import './CalendarModal.css';

import { CITIES, DEFAULT_COLOR, invertColor, randomColor } from '../core';

import CalendarDatePicker from './CalendarDatePicker';

const CalendarModal = (props) => {
  const el = useRef();
  const modal = useRef();
  const [id, setId] = useState();
  const [text, setText] = useState('');
  const [dateTime, setDateTime] = useState();
  const [colors, setColors] = useState({ backgroundColor: DEFAULT_COLOR, color: invertColor(DEFAULT_COLOR) });
  const [city, setCity] = useState();

  const changeColors = (color) => {
    setColors({ backgroundColor: color, color: invertColor(color) });
  };

  const isValid = () => !!text && text.trim().length > 0;

  const handleSave = () => {
    props.onSave({ day: props.day, reminder: { id, text, dateTime, colors, city } });
    modal.current.hide();
  };

  useEffect(() => {
    const handleShow = ({ type }) => props.onShow(type === 'shown.bs.modal');
    modal.current = new Modal(el.current);
    el.current.addEventListener('shown.bs.modal', handleShow);
    el.current.addEventListener('hidden.bs.modal', handleShow);
  }, [props]);

  useEffect(() => {
    const clear = () => {
      setId(null);
      setText('');
      setDateTime(props.day ? props.day.toDate() : new Date());
      changeColors(randomColor());
      setCity(CITIES[0]);
    };

    const load = () => {
      setId(props.reminder.id);
      setText(props.reminder.text);
      setDateTime(props.reminder.dateTime);
      setColors(props.reminder.colors);
      setCity(props.reminder.city);
    };

    if (props.visible) {
      if (props.reminder) {
        load();
      } else {
        clear();
      }
      modal.current.show();
    } else {
      modal.current.hide();
    }
  }, [props.day, props.visible, props.reminder]);

  return (
    <div ref={el} className="modal" tabIndex="-1">
      {props.visible && (
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reminder</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-2">
                <input
                  type="color"
                  className="form-control form-control-color"
                  value={colors.backgroundColor}
                  onChange={(event) => changeColors(event.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add title"
                  maxLength="30"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <CalendarDatePicker type="date" date={dateTime} onChange={(date) => setDateTime(date)} />
                <span className="mx-1" />
                <CalendarDatePicker type="time" date={dateTime} onChange={(time) => setDateTime(time)} />
              </div>
              <select
                v-model="city"
                className="form-select"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              >
                {CITIES.map((city) => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" disabled={!isValid()} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarModal;
