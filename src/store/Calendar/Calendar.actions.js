const actions = {
  TODAY: 'TODAY',
  PREVIOUS_MONTH: 'PREVIOUS_MONTH',
  NEXT_MONTH: 'NEXT_MONTH',
  SAVE_REMINDER: 'SAVE_REMINDER',
  CLEAR_REMINDERS: 'CLEAR_REMINDERS',
};

const today = () => ({ type: actions.TODAY });

const previousMonth = () => ({ type: actions.PREVIOUS_MONTH });

const nextMonth = () => ({ type: actions.NEXT_MONTH });

const saveReminder = (payload) => ({ type: actions.SAVE_REMINDER, payload });

const clearReminders = (payload) => ({ type: actions.CLEAR_REMINDERS, payload });

export { actions, today, previousMonth, nextMonth, saveReminder, clearReminders };
