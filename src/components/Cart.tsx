import { IconAdd, IconCart, IconDeduct, IconUser } from "@/assets"
import { Button } from "@/libs/shadcn/ui/button"
import { ScrollArea } from "@/libs/shadcn/ui/scroll-area"
import { Separator } from "@/libs/shadcn/ui/separator"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/libs/shadcn/ui/sheet"
import { addCartItemStart, clearCartItemStart, removeCartItemStart } from "@/store/cart/cart.action"
import { selectCartCount, selectCartItems, selectCartTotal, selectLoading } from "@/store/cart/cart.selector"
import { CartItemProps } from "@/types/cart"
import { setPrice } from "@/utils/price/price.utils"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Spinner } from "."

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

    return (
        <div className="flex flex-1 gap-4">
            <div className="flex w-32  items-center justify-center gap-2">
                <button 
                    role="button" 
                    aria-label="deduct item quantity" 
                    className=" appearance-none p-1 transition-colors hover:bg-zinc-300 rounded-full"
                    onClick={() => dispatch(removeCartItemStart(cartItems, cartItem))}
                >
                    <img width={16} height={16} className=" align-middle" src={IconDeduct} aria-label="hidden" />
                </button>
                <div className="">{cartItem.quantity}</div>
                <button 
                    role="button" 
                    aria-label="increment item quantity" 
                    className=" appearance-none p-1 transition-colors hover:bg-zinc-300 rounded-full"
                    onClick={() => dispatch(addCartItemStart(cartItems, cartItem))}
                >
                    <img width={16} height={16} className=" align-middle" src={IconAdd} aria-label="hidden" />
                </button>
            </div>

            <CartItemGroup segment='total' value={`$${setPrice(null, (cartItem.price * cartItem.quantity))}`} />
        </div>
    )
}

const CartItem = ({cartItem}:CartItemType) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    return (
        <>
            <div className="flex flex-col gap-4 relative">
                <div className="flex justify-between gap-x-4  w-full ">
                    <div className="relative py-4 px-2 flex items-center overflow-hidden justify-center w-32 aspect-square rounded-md">
                        <img className="object-contain max-w-full max-h-full" src={cartItem.mainImage} alt={cartItem.name} />
                        <div className="absolute inset-0 bg-zinc-950 opacity-5 pointer-events-none" />
                    </div>
                    
                    <div className="flex-1 flex items-start flex-col gap-2">
                        <div className="flex  self-stretch justify-bteween gap-x-4 items-center">
                            <h4 className="heading heding-xs">{cartItem.name}</h4>
                            <button 
                                role="button" 
                                aria-label="clear cart item"
                                title='remove item'
                                className=" w-4 h-4 flex bg-zinc-200 items-center justify-center text-xs  appearance-none p-1 transition-colors hover:bg-zinc-300 rounded-full"
                                onClick={() => dispatch(clearCartItemStart(cartItems, cartItem))}
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

const CartItemsContainer = () => {
    
    const cartItems = useSelector(selectCartItems)
    const cartCount = useSelector(selectCartCount)
    const cartTotal = useSelector(selectCartTotal)
    const isLoading = useSelector(selectLoading)

    return (
        <SheetContent className="gap-8 flex flex-col">
            <SheetHeader className=" self-stretch">
                <SheetTitle className="heading heading-xs flex items-center gap-1">
                    <span>Your Cart</span>
                    <span className='font-semibold'>({cartCount})</span>
                </SheetTitle>
            </SheetHeader>

            <ScrollArea className="relative w-96">
                <div className="flex flex-col gap-8 items-start">
                    {
                        cartItems.map((cartItem: CartItemProps) => 
                            <CartItem key={cartItem.id} cartItem={cartItem} />    
                        )
                    }
                </div>
                {isLoading && <div className="absolute inset-0 z-10 bg-zinc-950 opacity-25"><Spinner /></div>}
            </ScrollArea>

            <SheetFooter className="items-center flex  gap-4 ">
                <div className="flex w-32 gap-2 items-center">
                    <h4 className="heading heading-xs text-zinc-500">total</h4>
                    <h3 className="heading heading-xs">${cartTotal}</h3>
                </div>
                <Button>
                    <Link to='/checkout'>Go To Checkout</Link>
                </Button>
            </SheetFooter>
        </SheetContent>
    )
}

const CartEmpty = () => {

    return (
        <SheetContent className="gap-4 flex flex-col items-start">
            <SheetHeader className="self-stretch">
                <SheetTitle className="heading heading-xs">
                    your cart is empty
                </SheetTitle>
                
            </SheetHeader>
            <Separator />

            <div className="flex justify-between gap-2">
                <Button variant='link'>
                    <Link to='/shop/men'>Shop Men</Link>
                </Button>

                <Button variant='link'>
                    <Link to='/shop/women'>Shop Women</Link>
                </Button>

                <Button variant='secondary'>
                    <Link className="flex items-baseline gap-1" to='/auth'>
                        <img width={14} height={14} src={IconUser} />
                        Login
                    </Link>
                </Button>
            </div>
        </SheetContent>
    )
}

const Cart = () => {
    const cartItemsCount = useSelector(selectCartCount)

  return (
    <Sheet>
        <div className="cursor-pointer relative">
            <SheetTrigger asChild>
                <img className="align-middle" width={24} height={24} src={IconCart} />
            </SheetTrigger>
            {
            cartItemsCount > 0 
            && <div className="absolute pointer-events-none -top-1 left-5 bg-red-500 font-body tracking-tighter flex justify-center items-center w-4 h-4 rounded-full text-[8px] text-white text-center">
                <span className="align-middle">
                    {cartItemsCount > 10 ? '+10' : cartItemsCount}
                </span>
            </div>
            }
        </div>
        {/* not logged in */}
        {
            cartItemsCount
            ? <CartItemsContainer />
            : <CartEmpty />
        }
    </Sheet>
  )
}

export default Cart