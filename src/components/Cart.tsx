import { IconCart, IconUser } from "@/assets"
import { Button } from "@/libs/shadcn/ui/button"
import { ScrollArea } from "@/libs/shadcn/ui/scroll-area"
import { Separator } from "@/libs/shadcn/ui/separator"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/libs/shadcn/ui/sheet"
import { selectCartCount, selectCartItems, selectCartTotal, selectLoading } from "@/store/cart/cart.selector"
import { CartItemProps } from "@/types/cart"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartItem, Spinner } from "."

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