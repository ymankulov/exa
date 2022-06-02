import {GET_ADVERTISING, GET_SINGLE_ITEM, GET_ITEMS} from "../actionTypes/actionTypes";
import axios from "axios";
import api from "../../api/Api";

export const getAbout = () => {
    return async (dispatch) => {
        const url = await axios(`${api.baseURL}/books/`)
        const response = await url
        dispatch({type: GET_ITEMS, payload: response.data})
    }
}

// export const getSingleItems = (id) => {
//     return {type: GET_SINGLE_ITEM, payload: id}
// }
//

// export const getCategory = () => {
//     return async (dispatch) => {
//         const url = await axios(`${api.baseURL}/`)
//         const response = await url
//         dispatch({type: GET_ADVERTISING, payload: response.data})
//     }
// }