import store from '../store';
import { saveReminder } from '../store/Calendar/Calendar.actions';

const getPayload = (text) => ({
  day: { reminderIds: [] },
  reminder: { text, dateTime: new Date(), city: 'New York, US' },
});

describe('React calendar challenge tests', () => {
  test('Add a new reminder', () => {
    const reminders = store.getState().calendar.reminders;
    expect(reminders.length).toEqual(0);
    const payload_save = getPayload('Test reminder');
    store.dispatch(saveReminder(payload_save));
    const reminderTest = store.getState().calendar.reminders[0];
    const { reminder } = payload_save;
    expect(reminderTest.text).toEqual(reminder.text);
    expect(reminderTest.dateTime).toEqual(reminder.dateTime);
    expect(reminderTest.city).toEqual(reminder.city);
  });

  test('Add a new reminder max 30 chars', () => {
    expect(() => store.dispatch(saveReminder(getPayload('A very large text to the reminder')))).toThrow(
      'Title text may contain up to 30 characters',
    );
  });
});
