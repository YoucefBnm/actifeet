import { CartItemProps } from "@/types/cart"
import { ProductProps } from "@/types/product"
import { setPrice } from "../price/price.utils"

export const addItemToCart = (cartItems:CartItemProps[], itemToAdd:ProductProps, selectedColor:number, selectedSize:number) => {

    const cartItemUId = `${itemToAdd.id}-${itemToAdd.images[selectedColor].id}-${selectedSize}`
    const finalPrice = itemToAdd.discount ? setPrice(itemToAdd.discount, itemToAdd.price) : setPrice(null, itemToAdd.price)

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemUId
    ) 

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemUId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }    
            : cartItem
        )
    }

    return [
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
    ]
}

export const removeItemFromCart = (cartItems:CartItemProps[],itemToRemove:CartItemProps) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    )

    if(existingCartItem?.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}    
        : cartItem
    )
}

export const clearItemFromCart = (cartItems:CartItemProps[], itemToClear:CartItemProps) => 
    cartItems.filter(cartItem => cartItem.id !== itemToClear.id)