export const isLoading = (bool) => ({
    type:'IS_LOADING',
    bool
});

export const hasErrored = (message) => ({
    type: 'HAS_ERRORED',
    message
});

export const getFilms = (films) => ({
    type:'GET_FILMS',
    films
});

export const getLocations = (locations) => ({
    type: 'GET_LOCATIONS',
    locations
});

export const getPeople = (people) => ({
    type: 'GET_PEOPLE',
    people
})

export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    category
})
