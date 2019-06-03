import {getFilmsReducer} from '../reducers/filmsReducer';
import {getFilms} from '../actions/index';

describe('getFilmsReducer', () => {

    const mockFilms = [{film: "Howl's Moving Castle"}]
    it('should return a default state', () => {
        const expected = []
        const result = getFilmsReducer(undefined ,{})
        expect(result).toEqual(expected)
    });

    it('should return an action message' , () => {
        const expected = 'Error fetching information'
        const result = getFilmsReducer(undefined, getFilms('Error fetching information'))
        expect(result).toEqual(expected);
    })

})