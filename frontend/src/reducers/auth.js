import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false
}

export default function (state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
    }
}