import { CartItemProps } from "@/types/cart";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "@/utils/cart/cart.utils";
import { createAction } from "@/utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { ProductProps } from "@/types/product";

export const addCartItem = (cartItems:CartItemProps[], itemToAdd:ProductProps, selectedColor:number, selectedSize:number) => {
    const newCartItems = addItemToCart(cartItems, itemToAdd, selectedColor, selectedSize)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeCartItem = (cartItems:CartItemProps[], itemToRemove:CartItemProps) => {
    const newCartItems = removeItemFromCart(cartItems, itemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearCartItem = (cartItems:CartItemProps[], itemToClear:CartItemProps) => {
    const newCartItems = clearItemFromCart(cartItems, itemToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}