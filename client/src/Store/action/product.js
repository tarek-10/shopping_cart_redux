import {
    FETCH_PRODUCTS,
    FILTER_SIZE,
    FILTER_SORT
} from "./types";
//FETCH PRODUCTS
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
//END

//Filter By Size
export const filteredSizes = (products, value) => {

    return (dispatch) => {
        let productsClone = [...products];
        console.log("filter=>", productsClone);
        productsClone.map(pro => console.log("dddddd =>", pro.sizes[0].indexOf("M")))
        let newProducts = productsClone.filter((P) => P.sizes[0].indexOf(value) !== -1);

        console.log("after filter =>", newProducts);
        dispatch({
            type: FILTER_SIZE,
            data: {
                size: value,
                products: value == "ALL" ? products : newProducts
            }
        })

    }
}

//Filter By Sort
export const filteredSort = (products, value) => {

    return (dispatch) => {
        let productClone = [...products];
        let newProducts = productClone.sort(function (a, b) {
            if (value === "Lowest") {
                return a.price - b.price;
            } else if (value === "Hightest") {
                return b.price - a.price;
            } else {
                return a.id < b.id ? 1 : -1;
            }
        });

        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                products: newProducts
            }
        })

    }
}