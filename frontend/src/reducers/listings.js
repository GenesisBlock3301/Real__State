import {LISTINGS} from "../actions/types";

const initialState = {
    listings: []
}

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case LISTINGS:
            console.log("listing reducer ",payload)
            return {
                ...state,
                listings: payload
            }
        default:
            return state
    }
}