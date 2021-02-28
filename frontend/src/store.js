import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from './reducers'

const inittialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducers,
    inittialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store