import { combineReducers } from 'redux';
import teachers from './teachers';
import students from './students';
import subjects from './subjects';
import classrooms from './classrooms';
import careers from './careers';

const rootReducer = combineReducers({
  teachers,
  students,
  subjects,
  classrooms,
  careers
});

export default rootReducer;
