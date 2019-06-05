import {isLoading, hasErrored, getFilms, getLocations, getPeople} from './index';

describe('actions', () => {
    describe('isLoading', () => {
        it('should return an action object with a type of IS_LOADING', () => {
            const expected = {
                type: 'IS_LOADING',
                bool: false
            }
            const result = isLoading(false)
            expect(result).toEqual(expected)
        })
    })
    describe('hasErrored', () => {
        it('should return an action object with a type of HAS_ERRORED', () => {
            const expected = {
                type:'HAS_ERRORED',
                message: 'Error fetching information on presidents'
            }
            const result = hasErrored('Error fetching information on presidents')
            expect(result).toEqual(expected);

        })
    })
    describe('getFilms', () => {
        it('should return an action object with a type of GET_FILMS', () => {
            const expected = {
                type: 'GET_FILMS',
                films: [{film: "Howl's Moving Castle"}]
            }
            const result = getFilms([{film: "Howl's Moving Castle"}])
            expect(result).toEqual(expected);
        })
    });

    describe('getLocations', () => {
        it('should return an action object with a type of GET_LOCATIONS', () => {
            const expected = {
                type: 'GET_LOCATIONS',
                locations: [{location: "Irontown"}]
            }
            const result = getLocations([{location: "Irontown"}])
            expect(result).toEqual(expected);
        })
    });

    describe('getPeople', () => {
        it('should return an action object with a type of GET_PEOPLE', () => {
            const expected = {
                type: 'GET_PEOPLE',
                people: [{people: "Kiki"}]
            }
            const result = getPeople([{people: "Kiki"}])
            expect(result).toEqual(expected);
        })
    });
})