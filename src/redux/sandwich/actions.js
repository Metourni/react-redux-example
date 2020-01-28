import * as SandwichTypes from "./types"

export const buySandwich = (nb=0) => {
    return {
        type: SandwichTypes.BUY_SANDWICH,
        payload: nb
    }
};
