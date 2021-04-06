import {LISTINGS} from "./types";
import axios from "axios";
import {setAlert} from "./alert";

export const getListings = () => async dispatch => {

    try {
        const res = await axios.get('http://127.0.0.1:8000/api/listing/')
        console.log("listings action",res.data.results)
        dispatch({
            type: LISTINGS,
            payload: res.data.results
        })

    } catch (err) {
        dispatch(setAlert("Have some internal problem"))
    }
}