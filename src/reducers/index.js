import { combineReducers } from 'redux';
import { getFilmsReducer } from './filmsReducer';
import { getLocationsReducer } from './locationsReducer';
import { getPeopleReducer } from './peopleReducer';
import { changeCategoryReducer } from './changeCategoryReducer';

export const rootReducer = combineReducers({
  films: getFilmsReducer,
  locations: getLocationsReducer,
  people: getPeopleReducer,
  category: changeCategoryReducer
})

