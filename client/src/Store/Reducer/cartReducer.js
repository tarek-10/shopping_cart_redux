import {
    ADD_CART,
    REMOVE_CART
} from "../action/types";

export const cartReducer = (state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
}, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                cartItems: action.data.cartItems
            }
            case REMOVE_CART:
                return {
                    cartItems: action.data.cartItems
                }
                default:
                    return state
    }
}