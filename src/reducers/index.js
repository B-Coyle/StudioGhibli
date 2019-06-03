import { combineReducers } from 'redux';
import { getFilmsReducer } from './filmsReducer';
import { getLocationsReducer } from './locationsReducer';
import { getPeopleReducer } from './peopleReducer';

const rootReducer = combineReducers({
  films: getFilmsReducer,
  locations: getLocationsReducer,
  people: getPeopleReducer

})

export default rootReducer;