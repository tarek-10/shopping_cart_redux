import {
    ADD_CART,
    REMOVE_CART
} from "./types";


//add to cart
export const addToCart = (product) => {

    return (dispatch, getState) => {
        let cartItems = getState().cart.cartItems;
        const cartItemsClone = [...cartItems];
        let isProductExist = false;
        cartItemsClone.forEach((p) => {
            if (p._id === product._id) {
                p.qty++;
                isProductExist = true;
            }
        });
        if (!isProductExist) {
            cartItemsClone.push({
                ...product,
                qty: 1
            });
        }
        dispatch({
            type: ADD_CART,
            data: {
                cartItems: cartItemsClone
            }
        })

        localStorage.setItem('cartItems', JSON.stringify(cartItemsClone))
    }
}

//end

//remove from cart

export const RemoveFromCart = (product) => {

    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems;
        let cartItemClone = [...cartItems];
        let newItem = cartItemClone.filter((p) => p._id !== product._id);

        dispatch({
            type: REMOVE_CART,
            data: {
                cartItems: newItem
            }
        })
        localStorage.setItem("cartItems", JSON.stringify(newItem));
    }
}