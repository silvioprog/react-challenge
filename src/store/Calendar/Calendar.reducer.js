import { calendar, formatMonthYear, nextMonth, previousMonth, today } from '../../core';

import { actions } from './Calendar.actions';

const INITIAL_STATE = {
  currentDate: today(),
  calendars: new Map(),
  reminders: [],
};

const updateCalendars = (state) => {
  const currentDate = formatMonthYear(state.currentDate);
  if (!state.calendars.has(currentDate)) {
    state.calendars.set(currentDate, calendar(state.currentDate));
  }
  return state;
};

const saveReminder = (state, action) => {
  const { reminders } = state;
  const { day, reminder } = action.payload;
  if (reminder.text.trim().length > 30) {
    throw Error('Title text may contain up to 30 characters');
  }
  let index = reminders.findIndex((currentReminder) => currentReminder.id === reminder.id);
  if (index > -1) {
    reminders.splice(index, 1, reminder);
  } else {
    const id = new Date().getTime();
    day.reminderIds.push(id);
    reminders.push({ ...reminder, id });
  }
};

const clearReminders = (state, action) => {
  const { reminders } = state;
  const { reminderIds } = action.payload;
  reminderIds.forEach((id) => {
    const index = reminders.findIndex((item) => item.id === id);
    if (index > -1) {
      reminders.splice(index, 1);
    }
  });
  reminderIds.splice(0, reminderIds.length);
};

const calendarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.TODAY:
      state.currentDate = today();
      break;
    case actions.PREVIOUS_MONTH:
      state.currentDate = previousMonth(state.currentDate);
      break;
    case actions.NEXT_MONTH:
      state.currentDate = nextMonth(state.currentDate);
      break;
    case actions.SAVE_REMINDER: {
      saveReminder(state, action);
      break;
    }
    case actions.CLEAR_REMINDERS: {
      clearReminders(state, action);
      break;
    }
    default:
      return state;
  }
  return { ...updateCalendars(state) };
};

export default calendarReducer;
