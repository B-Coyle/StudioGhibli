export const getFilmsReducer = (state= [], action) => {
    switch(action.type) {
        case 'GET_FILMS':
            return action.films;
        default:
            return state
    }
}