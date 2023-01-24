function myReducer(state, action) {

    if (action.type === 'SET_CATS') {
        return {
            ...state,
            cats: action.cats
        }
    }

    if (action.type === 'SEARCH_CATS') {
        return {

        }
    }

    throw Error('Unknown action.');
}
export default myReducer;