import { CartItemProps } from "@/types/cart"
import { ProductProps } from "@/types/product"
import { setPrice } from "../price/price.utils"

type SetCartItemsProps = {
    cartItems:CartItemProps[], 
    itemToAdd:ProductProps, 
    selectedColor:number, 
    selectedSize:number | undefined
}
type CartItemTarget = {
    cartItems: CartItemProps[],
    itemTarget: CartItemProps,
}
export const addItemToCart = (payload:SetCartItemsProps) => {
    
    const {cartItems, itemToAdd, selectedColor, selectedSize } = payload
    
    return new Promise((resolve, reject) => {
        const cartItemUId = `${itemToAdd.id}-${itemToAdd.images[selectedColor].id}-${selectedSize}`
        const finalPrice = itemToAdd.discount ? setPrice(itemToAdd.discount, itemToAdd.price) : setPrice(null, itemToAdd.price)

        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemUId
        ) 
        
        if(!selectedSize) {
            reject(new Error('Select size to add item to cart.'))
            return
        }
        if(existingCartItem) {
            resolve(cartItems.map(cartItem => 
                cartItem.id === cartItemUId
                ? { ...cartItem, quantity: cartItem.quantity + 1 }    
                : cartItem
                )
            )
        } else {
            resolve([
                ...cartItems,
                {
                    id: cartItemUId,
                    gender: itemToAdd.gender,
                    category: itemToAdd.category,
                    brand: itemToAdd.brand,
                    name: itemToAdd.name,
                    price: finalPrice,
                    size: selectedSize,
                    color: itemToAdd['colors'][selectedColor],
                    mainImage: itemToAdd.images[selectedColor].imagesUrls[0],
                    quantity: 1
                }
            ])
        }
    })
    
}

export const addCartItem = (payload:CartItemTarget) => {

    const {cartItems, itemTarget} = payload

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemTarget.id
    )
    
    if(existingCartItem) {
        return new Promise((resolve) => 
            resolve(cartItems.map(cartItem => 
                cartItem.id === itemTarget.id
                && {...cartItem, quantity: cartItem.quantity + 1 }
            ))
        )
    }
}
export const removeItemFromCart = (payload:CartItemTarget) => {
    
    const {cartItems, itemTarget} = payload

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemTarget.id
    )

    return new Promise((resolve) => {
        if(existingCartItem?.quantity === 1) {
            resolve(cartItems.filter(cartItem => cartItem.id !== itemTarget.id))
        }

        resolve(cartItems.map(cartItem => 
            cartItem.id === itemTarget.id
            ? {...cartItem, quantity: cartItem.quantity - 1}    
            : cartItem
        ))
    })
}

export const clearItemFromCart = (payload:CartItemTarget) => {
    const { cartItems, itemTarget } = payload
    return new Promise((resolve) => 
        resolve(cartItems.filter(cartItem => cartItem.id !== itemTarget.id)))
}
    