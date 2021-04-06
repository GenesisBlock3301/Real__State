import {combineReducers} from "redux";
import alert from './alert'
import auth from './auth'
import listings from './listings'

export default combineReducers({
    alert,
    auth,
    listings
})