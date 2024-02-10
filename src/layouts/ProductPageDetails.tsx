import { Badge } from "@/libs/shadcn/ui/badge";
import { setPrice } from "@/utils/price/price.utils";
import { useState } from "react";
import { motion } from "framer-motion";
import {  ProductDetailPageColorsProps, ProductDetailPageHeaderProps, ProductPageDescription, ProductPageDetailsProps, ProductPageSizesProps } from "@/types/productPage";
import { Button } from "@/libs/shadcn/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setCartItemsStart } from "@/store/cart/cart.action";
import { selectCartError, selectCartItems, selectLoading } from "@/store/cart/cart.selector";
import { Spinner } from "@/components";

const ProductHeader = (props:ProductDetailPageHeaderProps) => {

    const { badges, discount, name, price } = props

    return (
        <div className="flex self-stretch flex-col gap-1">
            {
                badges
                && <div className="flex gap-1">
                    {
                        badges.map((badge, index) =>
                            <Badge key={`${badge}-${index}`} className="self-start bg-zinc-400">
                                {badge}
                            </Badge>
                        )
                    }
                </div>
            }

            <div className="flex justify-between items-center gap-4 mb-8">
                <div className="flex flex-col gap-1">
                    {discount && <Badge className="bg-red-400 self-start text-xs">{discount}% off</Badge>}
                    <h3 className="heading heading-sm text-zinc-700">{name}</h3>
                </div>

                <div className="heading gap-1 flex flex-col">
                    {
                        discount
                        ? <>
                            <span className="line-through font-normal text-zinc-500">${setPrice(null, price)}</span>
                            <span>${setPrice(discount, price)}</span>
                        </>
                        : <span>${setPrice(null, price)}</span>
                    }
                </div>
            </div>
        </div>
    )
}


const ProductColors = (props:ProductDetailPageColorsProps) => {
    
    const { colors, activeColor, handleMouseEnter } = props

    return (
        <div className="flex flex-col gap-2">
            <h3 className="heading heading-xs text-zinc-500">select color</h3>
            <div className="flex gap-1 flex-wrap" id="product-details-colors">
                {
                    colors.map((color, index) =>
                        <button
                            key={color.id}
                            aria-label="show relative color"
                            role="button"
                            onMouseEnter={() => handleMouseEnter(index)}
                            className="relative flex items-center justify-center w-14 h-10 border border-zinc-200 rounded-sm p-1"
                        >
                            <img className="align-middle object-contain max-h-full" src={color.imagesUrls[0]} />

                            {
                                index===activeColor
                                && <motion.span className="absolute inset-0 border border-zinc-400 shadow-sm" layoutId="product-details-colors" />
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}

const ProductSizes = (props:ProductPageSizesProps) => {

    const { sizes, selectedSize, setSelectedSize } = props
    const error = useSelector(selectCartError)

    return (
        <div className="flex flex-col gap-2">
            <h3 
                className={`heading heading-xs ${error && !selectedSize ? 'text-red-500' : 'text-zinc-500'}`}
            >
                select size
            </h3>
            <div id="product-details-sizes" className="flex gap-1 flex-wrap">
                {
                    sizes.map((size, index) =>
                        <button
                            key={`${size}-${index}`}
                            role="button"
                            aria-label="select size"
                            className={
                                `${size===selectedSize && !error ? 'text-zinc-900 font-semibold' : 'text-zinc-500 font-normal'} 
                                relative appearance-none border w-10 aspect-square border-slate-600`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {
                                size===selectedSize
                                && <motion.div className="absolute inset-0 border border-zinc-700 shadow-sm" layoutId="product-details-sizes" />
                            }
                            <span className="text-sm">{size}</span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

const ProductDescriptions = ({details}:ProductPageDescription) => {
    
    return (
        <div className="flex flex-col gap-2">
            <h3 className="heading heading-xs text-zinc-500">about this shoes</h3>
            {
                details 
                && <ul className="flex flex-col gap-1 items-start ">
                    {
                        details.map((detail, index) => 
                            <li key={index} className="relative pl-3">
                                <span className="absolute left-0 text-xs top-px text-slate-400 font-body">&raquo;</span>
                                <p>{detail}</p>
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

const ProductPageDetails = (props:ProductPageDetailsProps) => {
    
    const { product, activeColor, handleColorChange } = props
    const [selectedSize, setSelectedSize] = useState<number | undefined>()

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const isLoading = useSelector(selectLoading)
    const addItemToCart = () => dispatch(setCartItemsStart(cartItems, product, activeColor, selectedSize))

  return (
    <div className="flex flex-col relative items-start gap-8">
        <ProductHeader 
            name={product.name}
            price={product.price}
            discount={product.discount}
            badges={product.badges}
        />
        <ProductColors 
            colors={product.images} 
            activeColor={activeColor}
            handleMouseEnter={handleColorChange}
        />
        <ProductSizes 
            sizes={product.sizes} 
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
        />
        <ProductDescriptions details={product.details} />

        <Button 
            className="self-stretch"
            onClick={addItemToCart}
        >
            {isLoading ? <Spinner /> : 'Add to Cart'}
        </Button>

    </div>
  )
}

export default ProductPageDetails