import { call, all, put, takeLatest } from "redux-saga/effects"
import { addCartItem, addItemToCart, clearItemFromCart, removeItemFromCart } from "@/utils/cart/cart.utils"
import { CartItemProps } from "@/types/cart"
import { addCartItemSuccess, clearCartItemSuccess, removeCartItemSuccess, setCartItemsFailed, setCartItemsSuccess } from "./cart.action"
import { CART_ACTION_TYPES } from "./cart.types"
import { TakeableChannel } from "redux-saga"
import { toast } from "sonner"
import { ProductProps } from "@/types/product"

type AddCartItemProps = {
    payload: {
        cartItems: CartItemProps[], 
        itemToAdd: CartItemProps, 
        selectedColor: number, 
        selectedSize: number 
    }
}

type SetCartItemsProps = {
    cartItems:CartItemProps[], 
    itemToAdd:ProductProps, 
    selectedColor:number, 
    selectedSize:number | undefined
}

type CartItemTargetProps = {
    payload: {
        cartItems: CartItemProps[], 
        itemTarget: CartItemProps
    }
}
function* addCartItemAsync ({ payload }:AddCartItemProps): Generator<any, void, any> {
    try {

        const {cartItems, itemToAdd, selectedColor, selectedSize } = payload
        
        yield new Promise((resolve) => setTimeout(resolve, 1000))
        
        const newCartItems: CartItemProps[] = yield call(addItemToCart, {
            cartItems,
            itemToAdd,
            selectedColor,
            selectedSize,
        } as unknown as SetCartItemsProps)

        toast('Item successfully added to cart.')
        yield put(setCartItemsSuccess(newCartItems))
    } catch(error: string | unknown) {
        yield put(setCartItemsFailed({error}))
        toast(error.message)
    }
}

function* addCartItemQuantityAsync ({ payload }:CartItemTargetProps): Generator<any, void, any> {
    try {
        const { cartItems, itemTarget } = payload

        yield new Promise((resolve) => setTimeout(resolve, 1000))
        const newCartItems = yield call(addCartItem, { cartItems, itemTarget})
        toast('Item Successfully added.')
        yield put(addCartItemSuccess(newCartItems))
    } catch(error: string | unknown) {
        yield put(setCartItemsFailed({error}))
        toast.error(error.message)
    }
}
function* removeCartItemAsync ({payload}:CartItemTargetProps): Generator<any, void, any> {

    try {
        const { cartItems, itemTarget } = payload
        yield new Promise((resolve) => setTimeout(resolve, 1000))
        const newCartItems = yield call(removeItemFromCart, { cartItems, itemTarget })
        toast('Item Successfully removed.')
        yield put(removeCartItemSuccess(newCartItems))
        
    } catch(error: string | unknown) {
        yield put(setCartItemsFailed({error}))
        toast(error.message)
    }
}   

function* clearCartItemAsync ({payload}:CartItemTargetProps): Generator<any, void, any> {
    try {
        const { cartItems, itemTarget } = payload
        yield new Promise((resolve) => setTimeout(resolve, 1000))
        const newCartItems = yield call(clearItemFromCart, {cartItems, itemTarget})
        toast('Item Successfully cleared.')
        yield put(clearCartItemSuccess(newCartItems))
    } catch(error: string | unknown) {
        yield put(setCartItemsFailed({error}))
        toast(error.message)
    }
}
function* onAddCartItem() {
    yield takeLatest(
        CART_ACTION_TYPES.SET_CART_ITEMS_START as unknown as TakeableChannel<unknown>,
        addCartItemAsync
    )
}

function* onAddCartItemQuantity() {
    yield takeLatest(
        CART_ACTION_TYPES.ADD_CART_ITEM_START as unknown as TakeableChannel<unknown>,
        addCartItemQuantityAsync
    )
}
function* onRemoveCartItem() {
    yield takeLatest(
        CART_ACTION_TYPES.REMOVE_CART_ITEM_START as unknown as TakeableChannel<unknown>,
        removeCartItemAsync
    )
}

function* onClearCartItem() {
    yield takeLatest(
        CART_ACTION_TYPES.CLEAR_CART_ITEM_START as unknown as TakeableChannel<unknown>,
        clearCartItemAsync
    )
}
export function* cartItemsSaga () {
    yield all([
        call(onAddCartItem),
        call(onRemoveCartItem),
        call(onClearCartItem),
        call(onAddCartItemQuantity)
    ])
}