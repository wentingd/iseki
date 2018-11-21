const initialState = {
    user: {
        username: "",
        email: "",
        isAuthenticated: false
    }
}

const CLEAR = (state, action) => {
    const newState = Object.assign({}, initialState);
    return newState;
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTH':
            return Object.assign({}, 
                state, 
                {
                    user: action.payload
                });
        default:
            return state;
    }
}

export default reducer;