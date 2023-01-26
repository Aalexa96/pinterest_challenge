function myReducer(state, action) {
    if (action.type === 'SET_CATS') {
        const newState = {
            ...state,
            cats: action.cats,
            loading: false
        };
        return newState;
    }

    if (action.type === 'SET_SEARCH_BREED') {
        const newState = {
            ...state,
            searchBreedId: action.searchBreedId
        };
        return newState;
    }

    if (action.type === 'SET_LOADING') {
        const newState = {
            ...state,
            loading: true
        };
        return newState;
    }

    throw Error('Unknown action.');
}
export default myReducer;