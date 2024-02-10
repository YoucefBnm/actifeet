import { IconAdd, IconDeduct } from "@/assets"
import { Separator } from "@/libs/shadcn/ui/separator"
import { addCartItemStart, clearCartItemStart, removeCartItemStart } from "@/store/cart/cart.action"
import { selectCartItems } from "@/store/cart/cart.selector"
import { CartItemProps } from "@/types/cart"
import { setPrice } from "@/utils/price/price.utils"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

type CartItemGroupProps = {
  segment: string,
  value: string | number
}
type CartItemType = {
  cartItem: CartItemProps
}
const CartItemGroup = ({segment, value}:CartItemGroupProps) => {
  return (
      <div className="flex gap-2 font-semibold text-sm capitalize">
          <p className=" text-zinc-500 w-16">{segment}:</p>
          <p>{value}</p>
      </div>
  )
}

const CartItemUtils = ({cartItem}:CartItemType) => {
    
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addItem = () => dispatch(addCartItemStart(cartItems, cartItem))
  const removeItem = () => dispatch(removeCartItemStart(cartItems, cartItem))
  
  return (
      <div className="flex flex-1 gap-4">
          <div className="flex w-32  items-center justify-center gap-2">
              <button 
                  role="button" 
                  aria-label="deduct item quantity" 
                  className=" appearance-none p-1 transition-colors hover:bg-zinc-300 rounded-full"
                  onClick={removeItem}
              >
                  <img width={16} height={16} className=" align-middle" src={IconDeduct} aria-label="hidden" />
              </button>
              <div className="">{cartItem.quantity}</div>
              <button 
                  role="button" 
                  aria-label="increment item quantity" 
                  className=" appearance-none p-1 transition-colors hover:bg-zinc-300 rounded-full"
                  onClick={addItem}
              >
                  <img width={16} height={16} className=" align-middle" src={IconAdd} aria-label="hidden" />
              </button>
          </div>

          <CartItemGroup segment='total' value={`$${setPrice(null, (Number(cartItem.price) * cartItem.quantity))}`} />
      </div>
  )
}

const CartItem = ({cartItem}:CartItemType) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const clearItem = () => dispatch(clearCartItemStart(cartItems, cartItem))

  return (
      <>
          <div className="flex flex-col gap-4 relative">
              <div className="flex justify-between gap-x-4  w-full ">
                  <Link title="visit product page" to={cartItem.link} className="relative py-4 px-2 flex items-center overflow-hidden justify-center w-32 aspect-square rounded-md">
                      <img className="object-contain max-w-full max-h-full" src={cartItem.mainImage} alt={cartItem.name} />
                      <div className="absolute inset-0 bg-zinc-950 opacity-5 pointer-events-none" />
                  </Link>
                  
                  <div className="flex-1 flex items-start flex-col gap-2">
                      <div className="flex  self-stretch justify-bteween gap-x-4 items-center">
                          <h4 className="heading heding-xs">{cartItem.name}</h4>
                          <button 
                              role="button" 
                              aria-label="clear cart item"
                              title='remove item'
                              className=" w-4 h-4 flex bg-zinc-200 items-center justify-center text-xs  appearance-none p-1 transition-colors hover:bg-zinc-300 rounded-full"
                              onClick={clearItem}
                          >           
                              <span>&times;</span>
                          </button>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                          <CartItemGroup segment='gender' value={cartItem.gender} />
                          <CartItemGroup segment='category' value={cartItem.category} />
                          <CartItemGroup segment='brand' value={cartItem.brand} />
                          <CartItemGroup segment='size' value={cartItem.size} />
                          <CartItemGroup segment='color' value={cartItem.color} />
                      </div>
                  </div>
              </div>

              <CartItemUtils 
                  cartItem={cartItem} 
              />
          </div>
          <Separator />
      </>
  )
}

export default CartItem