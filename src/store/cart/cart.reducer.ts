import { ReducerAction } from "@/types/action"
import { CartItemProps } from "@/types/cart"
import { CART_ACTION_TYPES } from "./cart.types"

type CartInitialStateType = {
    cartItems: CartItemProps[]
}

const CART_INITITAL_STATE:CartInitialStateType = {
    cartItems: []
}

export const cartReducer = (state=CART_INITITAL_STATE, { type, payload }:ReducerAction) => {

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state
    }
}