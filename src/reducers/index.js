import { combineReducers } from 'redux';
import { filmsReducer } from './notesReducer';

const rootReducer = combineReducers({
  films: notesReducer
})

export default rootReducer;