import * as CakeTypes from "./types"

export const buyCake = (nb=1) => {
    return {
        type: CakeTypes.BUY_CAKE,
        payload: nb
    }
};
