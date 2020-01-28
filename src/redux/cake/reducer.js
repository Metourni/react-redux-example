import * as ActionsTypes from "./types";

const initialState = {
    nbCake: 13
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.BUY_CAKE:
            //console.log("state", state);
            //console.log("action.payload", action.payload);
            return {
                // create a copy of state
                ...state,
                // update only the number of cake
                nbCake: state.nbCake - action.payload
            };
        default:
            return state
    }
};

export default cakeReducer;
