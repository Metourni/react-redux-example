import * as DataTypes from "./types"
import axios from "axios";

export const fetchDataRequest = () => {
    return {
        type: DataTypes.FETCH_DATA_REQUEST
    }
};

export const fetchDataSuccess = (data) => {
    return {
        type: DataTypes.FETCH_DATA_SUCCESS,
        payload: data
    }
};

export const fetchDataFailure = (error) => {
    return {
        type: DataTypes.FETCH_DATA_FAILURE,
        payload: error
    }
};

export const fetchDataFromServer = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                //response.data;
                let names = response.data.map(raw => raw.name);
                dispatch(fetchDataSuccess(names));
            })
            .catch((error) => {
                // error.message
                dispatch(fetchDataFailure(error.message));
            })
    }
};
