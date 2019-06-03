import {isLoading, hasErrored, getPeople} from '../actions/index';

export const fetchPeople = () => {
    const url = 'https://ghibliapi.herokuapp.com/people'
    return async (dispatch) => {
        try{
            dispatch(isLoading(true));
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            dispatch(isLoading(false))
            const data = await response.json()
            dispatch(getPeople(data))
        } catch (error) {
            dispatch(isLoading(false))
            dispatch(hasErrored(error.message))
        }
    }
}