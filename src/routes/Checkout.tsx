import { CartItem, Spinner } from "@/components"
import { Separator } from "@/libs/shadcn/ui/separator"
import { selectCartCount, selectCartItems, selectCartTotal, selectLoading } from "@/store/cart/cart.selector"
import { CartItemProps } from "@/types/cart"
import { setPrice } from "@/utils/price/price.utils"
import { useSelector } from "react-redux"

const Checkout = () => {

    const cartItems = useSelector(selectCartItems)
    const cartCount = useSelector(selectCartCount)
    const cartTotal = useSelector(selectCartTotal)
    const isLoading = useSelector(selectLoading)

  return (
    <main>
        <div className="px-default py-8 gap-4">

            <h2 className="heading mb-8 heading-md">shopping cart</h2>

            <div className="flex relative flex-wrap justify-between gap-4">
                {/* cart items */}
                <div className="flex flex-col gap-4">
                    {
                        cartItems.map((cartItem: CartItemProps) => 
                            <CartItem key={cartItem.id} cartItem={cartItem} />    
                        )
                    }
                    {isLoading && <div className="flex bg-zinc-950 opacity-25 flex-center items-center absolute inset-0"><Spinner /></div>}

                    <div className="flex items-center justify-between gap-4 heading heading-sm">
                        <h3 className="text-zinc-700">total</h3>
                        <span>${setPrice(null, cartTotal)}</span>

                    </div>
                </div>

                {/* payments */}
                <div className=" bg-slate-500">
                    payment
                </div>
            </div>


           

        </div>
    </main>
  )
}

export default Checkout