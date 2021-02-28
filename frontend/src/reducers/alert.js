import {SET_ALERT, REMOVE_ALERT} from "../actions/types";

const initialState = []

export default function (state = initialState, action) {
    const [type, payloads] = action
    switch (type) {
        case SET_ALERT:
            return [...state, payloads]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payloads)
        default:
            return state
    }
}