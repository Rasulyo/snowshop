import React, { useReducer } from 'react';
import axios from 'axios';
import {
    addProdcutToCartHelper,
    removeProductFromCartHelper,
    decreaseProductQuantityHelper,
    increaseProductQuantityHelper
} from '../helpers/CartHelpers';

export const cartContext = React.createContext(null);

const INIT_STATE = {
    // items: [],
    // productToDetails: null,
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "INCREASE_PRODUCT_QUANTITY":
            return {
                ...state,
                cart: action.payload
            }
        case "DECREASE_PRODUCT_QUANTITY":
            return {
                ...state,
                cart: action.payload
            }
        case "REMOVE_PRODUCT_FROM_CART":
            return {
                ...state,
                cart: action.payload
            }
        default: return state
    }
}

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const addProductToCart = (product) => {

        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: addProdcutToCartHelper(product)
        })
    }

    const removeProductFromCart = (id) => {

        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            payload: removeProductFromCartHelper(id)
        })
    }

    const increaseProductQuantity = (id) => {
        dispatch({
            type: 'INCREASE_PRODUCT_QUANTITY',
            payload: increaseProductQuantityHelper(id)
        })
    }

    const decreaseProductQuantity = (id) => {
        dispatch({
            type: 'DECREASE_PRODUCT_QUANTITY',
            payload: decreaseProductQuantityHelper(id)
        })
    }
   


    return (
        <cartContext.Provider value={{
            addProductToCart,
            removeProductFromCart,
            increaseProductQuantity,
            decreaseProductQuantity,
            cart: state.cart,
            cartQuantity: state.cart.length,
            cartTotal: state.cart.reduce((accum, curr) => accum + parseInt(curr.price) * curr.quantity, 0)
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;