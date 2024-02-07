import { Badge } from "@/libs/shadcn/ui/badge"
import { ProductPriceProps } from "@/types/product"
import { setPrice } from "@/utils/price/price.utils"

const ProductPrice = (props:ProductPriceProps) => {

    const { price, discount } = props

    return (
        <div className="productPrice flex px-4 text-sm justify-between items-end">
            {
                discount 
                ?(
                    <>
                        <div className="flex flex-col  items-end justify-end">
                            <p className="font-bold">${setPrice(discount, price)}</p>
                            <p className="line-through text-zinc-500">${setPrice(null, price)}</p>
                        </div>
                        <Badge variant={'destructive'} className="px-1 mb-1 rounded-none leading-none font-medium text-xs">-{discount}%</Badge>
                    </>
                )
                : <p className="font-bold text-sm">${setPrice(null, price)}</p>
            }

        </div>
    )
}

export default ProductPrice