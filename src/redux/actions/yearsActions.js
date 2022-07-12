import axios from "axios";
import { baseUrl } from "../..";
import { getAccessToken } from "../../config/getAccessToken";
import { ActionTypes } from "../constants/action-types";

export const fecthYears = () => {
    return async function (dispatch, getState) {
        getAccessToken();
        const response = await axios.get(`${baseUrl}year`);
        console.log(response);
        response.data.data.map((data, index) => {
            data.index = index + 1;
        });
        dispatch({ type: ActionTypes.FETCH_YEARS, payload: response.data });
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
