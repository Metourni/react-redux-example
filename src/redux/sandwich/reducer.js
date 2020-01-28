import * as SandwichTypes from "./types"

const initialState = {
    nbSandwich: 10
};

const sandwichReducer = (state = initialState, action) => {
    switch (action.type) {
        case SandwichTypes.BUY_SANDWICH:
            //console.log("state", state);
            //console.log("action.payload", action.payload);
            return {
                // create a copy of state
                ...state,
                // update only the number of cake
                nbSandwich: state.nbSandwich - action.payload
            };
        default:
            return state
    }
};

export default sandwichReducer;
