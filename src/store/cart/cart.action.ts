import { CartItemProps } from "@/types/cart";
import { createAction } from "@/utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { ProductProps } from "@/types/product";

export const setCartItemsStart = (cartItems:CartItemProps[], itemToAdd:ProductProps, selectedColor:number, selectedSize:number|undefined) => 
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_START, {cartItems, itemToAdd, selectedColor, selectedSize})
export const addCartItemStart = (cartItems:CartItemProps, itemTarget:CartItemProps) => 
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM_START, {cartItems, itemTarget})
export const removeCartItemStart = (cartItems:CartItemProps[], itemTarget:CartItemProps) => 
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM_START, {cartItems, itemTarget})
export const clearCartItemStart = (cartItems:CartItemProps[], itemTarget:CartItemProps) => 
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM_START, {cartItems, itemTarget})

export const setCartItemsSuccess = (cartItems:CartItemProps[]) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS, cartItems)
export const addCartItemSuccess = (cartItems:CartItemProps[]) => 
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM_SUCCESS, cartItems)
export const removeCartItemSuccess = (cartItems:CartItemProps[]) =>
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM_SUCCESS, cartItems)
export const clearCartItemSuccess = (cartItems:CartItemProps[]) =>
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM_SUCCESS, cartItems)

export const setCartItemsFailed = (error:string|unknown) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_FAILED, error)