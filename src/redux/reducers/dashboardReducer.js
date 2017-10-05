const DEFAULT_STATE = {};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE': {
            return DEFAULT_STATE;
        }
        default: {
            return state;
        }
    }
};

export default reducer;
