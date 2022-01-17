import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { saveReminder } from '../store/Calendar/Calendar.actions';

import CalendarBar from '../components/CalendarBar';
import CalendarDays from '../components/CalendarDays';
import CalendarModal from '../components/CalendarModal';
import CalendarTable from '../components/CalendarTable';

const Calendar = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDay, setModalDay] = useState();
  const [modalReminder, setModalReminder] = useState();

  const click = (day, reminder) => {
    setModalDay(day);
    setModalReminder(reminder);
    setModalVisible(true);
  };

  const modalShow = (shown) => setTimeout(() => setModalVisible(shown), 0);

  const modalSave = (payload) => dispatch(saveReminder(payload));

  return (
    <div className="my-xl-2">
      <div className="sticky-top">
        <CalendarBar />
        <CalendarDays />
      </div>
      <CalendarTable onClick={click} />
      <CalendarModal
        visible={modalVisible}
        day={modalDay}
        reminder={modalReminder}
        onShow={modalShow}
        onSave={modalSave}
      />
    </div>
  );
};

export default Calendar;
