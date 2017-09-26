const DEFAULT_STATE = {
    token: true,
};

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default authReducer;
