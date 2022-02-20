import {
    combineReducers
} from "redux";
import {
    cartReducer
} from "./cartReducer";
import {
    orderReducer
} from "./orderReducer";
import {
    productReducer
} from "./productReducer";

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
})