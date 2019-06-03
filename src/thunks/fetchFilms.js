import {isLoading, hasErrored, getFilms} from '../actions/index';

export const fetchFilms = () => {
    const url = 'https://ghibliapi.herokuapp.com/films'
    return async (dispatch) => {
        try{
            dispatch(isLoading(true));
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            dispatch(isLoading(false))
            const data = await response.json()
            dispatch(getFilms(data))
        } catch (error) {
            dispatch(isLoading(false))
            dispatch(hasErrored(error.message))
        }
    }
}