import { ReducerAction } from "@/types/action"
import { CartItemProps } from "@/types/cart"
import { CART_ACTION_TYPES } from "./cart.types"

type CartInitialStateType = {
    cartItems: CartItemProps[],
    loading: boolean,
    error: null | unknown | string
}

const CART_INITITAL_STATE:CartInitialStateType = {
    cartItems: [],
    loading: false,
    error: null,
}

export const cartReducer = (state=CART_INITITAL_STATE, { type, payload }:ReducerAction) => {

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS_START:
        case CART_ACTION_TYPES.ADD_CART_ITEM_START:
        case CART_ACTION_TYPES.REMOVE_CART_ITEM_START:
        case CART_ACTION_TYPES.CLEAR_CART_ITEM_START:
            return {
                ...state,
                loading: true,
                error: null 
            }

        case CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS:
        case CART_ACTION_TYPES.ADD_CART_ITEM_SUCCESS:
        case CART_ACTION_TYPES.REMOVE_CART_ITEM_SUCCESS:
        case CART_ACTION_TYPES.CLEAR_CART_ITEM_SUCCESS:
            return {
                cartItems: payload,
                loading: false,
                error: null 
            }
        
        case CART_ACTION_TYPES.SET_CART_ITEMS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.error.message
            }
        
        default:
            return state
    }
}