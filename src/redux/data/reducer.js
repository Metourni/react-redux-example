import * as DataTypes from "./types"

const initialState = {
    loading: false,
    data: [],
    error: ''
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DataTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DataTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            };
        case DataTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};


export default dataReducer;
