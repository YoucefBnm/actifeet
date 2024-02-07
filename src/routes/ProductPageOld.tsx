import { ProductPrice, Spinner } from "@/components"
import { useFetchProductItem } from "@/hooks/useFetchProductItem"
import { useIsActive } from "@/hooks/useSetActiveImage"
import { Badge } from "@/libs/shadcn/ui/badge"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import InnerImageZoom from "react-inner-image-zoom"
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/libs/shadcn/ui/radio-group"
import { Label } from "@/libs/shadcn/ui/label"
import { setPrice } from "@/utils/price/price.utils"
import { Button } from "@/libs/shadcn/ui/button"
import { ProductProps } from "@/types/product"



const ProductGallery = () => {

    return (
        <div className="md:basis-full">
            <div className="flex flex-1 gap-4 items-start">
                .flex.gap-2.flex-col
            </div>
            
        </div>
    )
}

const ProductSizes = () => {
    return (
        <div className="">
            sizes
        </div>
    )
}

const ProductColors = () => {
    return (
        <div className="">
            colors
        </div>
    )
}

const ProductDetails = () => {

    return (
        <div className="">
            <h3 className="heading heading-md">{}</h3>
        </div>
    )
}



const Product = () => {

    const { product, productColorId } = useFetchProductItem()

    const {activeColor, activeImage, handleColorChange, handleMouse } = useIsActive()
    const [activeGalleryImage, setActiveGalleryImage] = useState(0)

    const [selectedSize,setSelectedSize] = useState<number>()

    return (
        <div 
            className="productPage px-default gap-8 justify-between flex flex-wrap md:flex-nowrap items-start"
        >
            {
                product 
                ? (
                    <>
                        {/* gallery */}
                        <div className=" basis-full">
                            <div className="flex gap-1 text-sm capitalize mb-4">
                                <Link to={`/shop/${product.gender}`}>{product.gender}</Link>
                                <span>/</span>
                                <Link to={`/shop/category/${product.category}`}>{product.category}</Link>
                                <span>/</span>
                                <Link to={`/shop/brand/${product.brand}`}>{product.brand}</Link>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex gap-2 flex-col items-start" id="gallery-indics">
                                    {
                                        product.images[activeColor].imagesUrls.map((image,index) => (
                                            <button
                                                className="flex items-center justify-center appearance-none w-12 h-8 p-2 shadow-sm relative"
                                                role="button"
                                                key={index}
                                                onMouseEnter={() => setActiveGalleryImage(index)}
                                                aria-label="show relative image"
                                            >
                                                <img className=" align-middle contain max-w-full max-h-full" src={image} alt={product.name} />

                                                {index===activeGalleryImage
                                                    && <motion.div
                                                        className="border-2 border-zinc-500 rounded-sm absolute inset-0"
                                                        layoutId='gallery-indics'
                                                        transition={{ type: 'spring', stiffness: 500, damping: 50}}
                                                    />
                                        }
                                            </button>
                                        ))
                                    }
                                </div>
                                
                                <div className=" p-4 relative rounded-md h-[420px] flex justify-center w-full">
                                    <InnerImageZoom
                                        zoomSrc={product.images[activeColor].imagesUrls[activeGalleryImage]} 
                                        zoomType="hover" 
                                        src={product.images[activeColor].imagesUrls[activeGalleryImage]} 
                                        className="max-h-full align-middle max-w-full object-contain "
                                    />
                                    <div className="absolute inset-0 w-full h-full bg-zinc-950 opacity-[0.03] pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* details */}
                        <div className="flex flex-col ">
                            {
                                product.badges 
                                && <div className="flex gap-1 mb-1">
                                    {product.badges.map(badge => <Badge className="self-start bg-zinc-400" key={`${product.id}-${badge}`}>{badge}</Badge>)}
                                </div>
                            }
                            <div className="flex justify-between items-baseline gap-3 mb-9">
                                <div className="flex flex-col gap-1">
                                    {product.discount && <Badge className=" bg-red-500 self-start text-xs">{product.discount}% off</Badge>}
                                    <h3 className="heading heading-sm text-zinc-700">{product.name}</h3>
                                </div>
                                <div className="heading gap-1 flex flex-col">
                                    {
                                        product.discount
                                        ? <>
                                            <span>${setPrice(product.discount, product.price)}</span>
                                            <span className="line-through font-normal text-zinc-500">${setPrice(null, product.price)}</span>
                                        </>
                                        : <span>${setPrice(null, product.price)}</span>
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-3 mb-5">
                                <h3 className="heading heading-xs text-zinc-500">select size</h3>
                                <div id='product-sizes' className="  flex gap-1 flex-wrap">
                                    {product.sizes.map(size => 
                                        <button 
                                            key={`${product.id}-${size}`}    
                                            role="button"
                                            aria-label="select size"
                                            className={`${size===selectedSize ? 'text-zinc-950 font-semibold' : 'text-zinc-500 relative font-normal'} relative appearance-none border  w-10 aspect-square  border-slate-600`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size===selectedSize && <motion.span
                                                className="absolute inset-0 border border-zinc-700"
                                                layoutId='product-sizes'
                                            />}
                                            <span>{size}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-3 mb-5">
                                <h3 className="heading heading-xs text-zinc-500">select color</h3>
                                <div id='product-colors-details' className="flex gap-y-2 gap-x-1 flex-wrap">
                                    {
                                        product.images.map((image, index) => (
                                            <button
                                                role="button"
                                                aria-label="show relative image color"
                                                key={`${product.id}-${image.color}`}
                                                onMouseEnter={() => handleColorChange(index)}
                                                className="relative flex items-center justify-center w-14 h-10 border border-zinc-200 rounded-sm p-1"
                                            >
                                                <img className=" align-middle object-contain max-h-full" src={image.imagesUrls[0]} />

                                                {index===activeColor
                                                    && <motion.span
                                                            className="absolute inset-0 border border-zinc-400 shadow-sm"
                                                            layoutId="product-colors-details"
                                                        />
                                                }
                                            </button>
                                        ))
                                    }
                                </div>
                               
                                    
                            </div>

                            <div className="flex flex-col items-start gap-3 mb-5">
                                <h3 className="heading heading-xs text-zinc-500">item details</h3>
                                {product.details 
                                    &&<ul className="flex flex-col gap-1 text-sm">
                                        {
                                            product.details.map((detail, index) => 
                                                <li className="relative pl-3" key={index}>
                                                    <span className="absolute left-0 text-xs top-px text-slate-500 font-bold">&raquo;</span>
                                                    {detail}
                                                </li>
                                                
                                            )
                                        }
                                    </ul>}
                            </div>

                            <Button onClick={() => console.log('add to cart')}>add to cart</Button>
                        </div>
                        
                    </>
                ) 
                : (<div className="w-screen h-dvh flex justify-center items-center"><Spinner /></div>)
            }
        </div>
    )
}
const ProductPage = () => {
    

  return (
    <main className="py-8">
        <Product />
    </main>
  )
}

export default ProductPage