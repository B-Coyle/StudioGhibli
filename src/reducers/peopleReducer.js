export const getPeopleReducer = (state= [], action) => {
    switch(action.type) {
        case 'GET_PEOPLE':
            return action.people;
        default:
            return state
    }
}