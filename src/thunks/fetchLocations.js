import { isLoading, hasErrored, getLocations } from '../actions'

export const fetchLocations = () => {
  const url = 'https://ghibliapi.herokuapp.com/films'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json();
      dispatch(getLocations(data))
    } catch (error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error.message))
    }
  }
}
