import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import {reducer} from "../reducer/reducer"
import thunk from "redux-thunk"

export  const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))