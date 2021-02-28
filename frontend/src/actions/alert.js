import {v4 as uuid} from "uuid";

import {SET_ALERT, REMOVE_ALERT} from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => distpatch => {
    const id = uuid();
    distpatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    })
    setTimeout(() => distpatch({
        type: REMOVE_ALERT,
        payload: id
    }), timeout)
}
