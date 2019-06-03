export const changeCategoryReducer = (state= '', action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return action.category;
        default:
            return state
    }
}