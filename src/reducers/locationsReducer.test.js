import {getLocationsReducer} from '../reducers/locationsReducer';
import {getLocations} from '../actions/index';

describe('getLocationsReducer', () => {
    it('should return a default state', () => {
        const expected = []
        const result = getLocationsReducer(undefined ,{})
        expect(result).toEqual(expected)
    });

    it('should return an action message' , () => {
        const expected = 'Error fetching information'
        const result = getLocationsReducer(undefined, getLocations('Error fetching information'))
        expect(result).toEqual(expected);
    })
})