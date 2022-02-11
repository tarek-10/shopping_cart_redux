import {
    FETCH_PRODUCTS,
    FILTER_SIZE,
    FILTER_SORT
} from "../action/types";

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                products: action.data,
                    filterProducts: action.data
            }
            case FILTER_SIZE:
                return {
                    ...state,
                    size: action.data.size,
                        filterProducts: action.data.products
                }
                case FILTER_SORT:
                    return {
                        ...state,
                        sort: action.data.sort,
                            filterProducts: action.data.products
                    }
                    default:
                        return state
    }
}