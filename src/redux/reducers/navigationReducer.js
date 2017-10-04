import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    disabled: true,
};

const navigationReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_SUCCESS: {
            return {
                ...state,
                disabled: false,
            };
        }
        case actionTypes.LOG_OUT_SUCCESS: {
            return {
                ...state,
                disabled: true,
            };
        }
        case actionTypes.DISABLE_WRAPPER: {
            return {
                ...state,
                disabled: true,
            };
        }
        case '@@router/LOCATION_CHANGE': {
            return DEFAULT_STATE;
        }
        default: {
            return state;
        }
    }
};

export default navigationReducer;
