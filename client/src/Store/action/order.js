import {
    CLEAR_CART,
    CLEAR_ORDER,
    CREATE_ORDER
} from "./types"

//CREATE ORDER
export const createOrder = (order) => {

    return (dispatch) => {
        fetch("/order/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(res => res.json()).then(data => {
            dispatch({
                type: CREATE_ORDER,
                data: {
                    order: data
                }
            })
        })
        localStorage.clear('cartItems')
        dispatch({
            type: CLEAR_CART
        })
    }
}


//CLEAR ORDER
export const clearOrder = () => {

    return (dispatch) => {
        dispatch({
            type: CLEAR_ORDER
        })
    }
}