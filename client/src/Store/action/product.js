import axios from "axios";
import {
    FETCH_PRODUCTS
} from "./types";
export const fetchProducts = () => {

    return (dispatch) => {
        fetch("/product/display").then(res => res.json()).then(data => {

            dispatch({
                type: FETCH_PRODUCTS,
                data: data.product
            })

        })
    }
}