import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    disabled: true,
};

const navigationReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.auth.LOG_IN_SUCCESS: {
            return {
                ...state,
                disabled: false,
            };
        }
        case actionTypes.auth.LOG_OUT_SUCCESS: {
            return {
                ...state,
                disabled: true,
            };
        }
        case actionTypes.navigation.DISABLE_WRAPPER: {
            return {
                ...state,
                disabled: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default navigationReducer;
