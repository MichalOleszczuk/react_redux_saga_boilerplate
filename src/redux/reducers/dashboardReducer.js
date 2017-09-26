import * as actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    clicked: false,
    sagaClicked: false,
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.BUTTON_CLICKED: {
            console.log('ButtonClicked reducer');
            return {
                ...state,
                clicked: !state.clicked,
            };
        }
        case actionTypes.SAGA_IN_PROGRESS: {
            console.log('SagaInProgress reducer');
            return {
                ...state,
                sagaClicked: false,
            };
        }
        case actionTypes.SAGA_DONE: {
            console.log('SagaDone reducer');
            return {
                ...state,
                sagaClicked: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
