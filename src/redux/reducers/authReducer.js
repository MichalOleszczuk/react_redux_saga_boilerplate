import {auth} from '../actions/actionTypes';

const DEFAULT_STATE = {
    token: false,
};

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case auth.LOG_IN_SUCCESS: {
            return {
                ...state,
                token: true,
            };
        }
        case auth.LOG_OUT_SUCCESS: {
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
