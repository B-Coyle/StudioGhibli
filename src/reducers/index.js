import { combineReducers } from 'redux';
import { getFilmsReducer } from './filmsReducer';
import { getLocationsReducer } from './locationsReducer';
import { getPeopleReducer } from './peopleReducer';


export const rootReducer = combineReducers({
  films: getFilmsReducer,
  locations: getLocationsReducer,
  people: getPeopleReducer,
})

