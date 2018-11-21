const initialState = {
    user: {
        name: "",
        isAuthenticated: false,
    }
}

const CLEAR = (state, action) => {
    const newState = Object.assign({}, initialState);
    return newState;
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CLEAR':
            return CLEAR(state, action);
        default:
            return state;
    }
  }
export default reducer;