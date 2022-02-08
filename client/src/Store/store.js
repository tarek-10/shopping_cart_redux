import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import reducer from "./Reducer/reducer";
import reduxThunk from "redux-thunk"
const enhancer = window.__REDUX_EXTENSION_COMPOSE__ || compose;
const initState = {};

const store = createStore(reducer, initState, enhancer(applyMiddleware(reduxThunk)));

export default store;