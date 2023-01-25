function myReducer(state, action) {

    if (action.type === 'SET_CATS') {
        return {
            ...state,
            cats: action.cats
        }
    }

    if (action.type === 'SET_SEARCH_BREED') {
        return {
            ...state,
            searchBreedId: action.searchBreedId
        }
    }

    throw Error('Unknown action.');
}
export default myReducer;