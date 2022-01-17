import { combineReducers, createStore } from 'redux';

import calendarReducer from './Calendar/Calendar.reducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

const store = createStore(rootReducer);

export default store;
