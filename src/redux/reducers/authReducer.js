import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    token: false,
};

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_SUCCESS: {
            return {
                ...state,
                token: true,
            };
        }
        case actionTypes.LOG_OUT_SUCCESS: {
            return {
                ...state,
                token: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
