import {getPeopleReducer} from '../reducers/peopleReducer';
import {getPeople} from '../actions/index';

describe('getPeopleReducer', () => {

    const mockLocation = [{name: "San"}]
    it('should return a default state', () => {
        const expected = []
        const result = getPeopleReducer(undefined ,{})
        expect(result).toEqual(expected)
    });

    it('should return an action message' , () => {
        const expected = 'Error fetching information'
        const result = getPeopleReducer(undefined, getPeople('Error fetching information'))
        expect(result).toEqual(expected);
    })
})