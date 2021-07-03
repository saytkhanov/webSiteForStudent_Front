import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger/src';
import studentsReducer from './actions/students';
import notesReducer from './actions/notes';
import statusesReducer from  './actions/statuses'


const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(
  combineReducers({
    students: studentsReducer,
    notes: notesReducer,
    statuses: statusesReducer
  }),
  applyMiddleware(logger, thunk)
)