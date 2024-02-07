import { Spinner } from "@/components";
import { useFetchProductItem } from "@/hooks/useFetchProductItem";
import { useIsActive } from "@/hooks/useSetActiveImage";
import { Badge } from "@/libs/shadcn/ui/badge";
import { Button } from "@/libs/shadcn/ui/button";
import { ProductProps } from "@/types/product";
import { setPrice } from "@/utils/price/price.utils";
import { motion } from "framer-motion";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { Link } from "react-router-dom";

interface ProductGalleryProps {
    id: string;
    productImages: string[];
}
interface ProductDetailsProps {
    details: ProductProps['details']
}
interface ProductDetailHeaderProps {
    badges?: ProductProps['badges'];
    discount?: ProductProps['discount'];
    name: ProductProps['name'];
    price: ProductProps['price'];
}

interface ProductDetailSizes {
    sizes: ProductProps['sizes'];
}

interface ProductColorsProps {
    colors: ProductProps['images'];
    activeColor: number;
    handleMouseEnter: (index:number) => void 
}

const ProductGallery = (props:ProductGalleryProps) => {

    const { id, productImages } = props
    const [previewImage, setPreviewImage] = useState<number>(0)

    return (
        <div className="flex gap-4 items-start">
            <div id={id} className="flex gap-2 flex-col items-start">
                {
                    productImages.map((image, index) => (
                        <button
                            className="bg-white relative flex items-center justify-center w-14 h-10 border border-zinc-200 rounded-sm p-1"
                            onMouseEnter={() => setPreviewImage(index)}
                            key={index}
                            aria-label="show relative image"
                            role='button'
                        >
                            <img 
                                className="align-middle object-contain max-h-full"
                                src={image}
                                alt='athletic shoes'
                            />
                            {
                                index===previewImage
                                && <motion.div 
                                        className="absolute inset-0 border border-zinc-400 shadow-sm"
                                        layoutId={id}
                                        transition={{ type: 'spring', stiffness: 500, damping: 50}}
                                    />
                            }
                        </button>
                    ))
                }
            </div>

            <div className="p-4 relative rounded-md h-[420px] flex justify-center w-full">
                <div className="absolute inset-0 bg-zinc-950 opacity-5 rounded-sm pointer-events-none z-10" />
                <InnerImageZoom
                    src={productImages[previewImage]}
                    className="w-[80%] max-h-full object-contain" 
                    zoomType='hover'
                    fullscreenOnMobile={true}
                />
            </div>
        </div>
    )
}

const ProductHeader = (props:ProductDetailHeaderProps) => {

    const { badges, discount, name, price } = props

    return (
        <div className="flex flex-col gap-1">
            {
                badges
                && <div className="flex gap-1">
                    {badges.map((badge,index) => 
                        <Badge 
                            className="self-start bg-zinc-400" 
                            key={`${badge}-${index}`}
                        >
                            {badge}
                        </Badge>
                    )}
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
                            <div className="line-through font-normal text-zinc-500">${setPrice(null, price)}</div>
                            <span>${setPrice(discount, price)}</span>
                        </>
                        : <span>${setPrice(null, price)}</span>
                    }
                </div>
            </div>
        </div>
    )
}

const ProductSizes = (props:ProductDetailSizes) => {

    const { sizes } = props

    const [selectedSize, setSelectedSize] = useState<number>()

    return (
        <div className="flex flex-col gap-2">
            <h3 className="heading heading-xs text-zinc-500">select size</h3>
            <div id="product-details-sizes" className="flex gap-1 flex-wrap">
                {
                    sizes.map((size,index) => (
                        <button
                            key={`${size}-${index}`}
                            role="button"
                            aria-label="select size"
                            className={`${size===selectedSize ? 'text-zinc-950 font-semibold' : 'text-zinc-500 font-normal'} relative appearance-none border w-10 aspect-square border-slate-600`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {
                                size===selectedSize
                                && <motion.div 
                                    className="absolute inset-0 border border-zinc-700 shadow-sm"
                                    layoutId="product-details-sizes"
                                    />
                            }
                            <span>{size}</span>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

const ProductColors = (props:ProductColorsProps) => {

    const { colors, activeColor, handleMouseEnter } = props

    return (
        <div className="flex flex-col gap-2">
            <h3 className="heading heading-xs text-zinc-500">select color</h3>
            <div className="flex gap-1 flex-wrap" id="product-details-colors">
                {
                    colors.map((color, index) => (
                        <button
                            role="button"
                            aria-label="show relative color"
                            key={color.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            className="relative flex items-center justify-center w-14 h-10 border border-zinc-200 rounded-sm p-1"
                        >
                            <img className="align-middle object-contain max-h-full" src={color.imagesUrls[0]} />

                            {
                                index===activeColor
                                    && <motion.span
                                        className="absolute inset-0 border border-zinc-400 shadow-sm"
                                        layoutId="product-details-colors"
                                        />
                            }
                        </button>
                    ))
                }
            </div>
        </div>

    )
}

const ProductDetails = (props:ProductDetailsProps) => {
    
    const { details } = props

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
                                {detail}
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    )
}
const ProductPage = () => {

    const { product } = useFetchProductItem()
    const {activeColor, handleColorChange } = useIsActive()

  return (
    <main>
        {
            product

            ?(<div className="grid gap-8 grid-rows-2 md:grid-rows-1 md:grid-cols-[.6fr_.4fr] px-default py-8">
                {/* gallery */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-end gap-0.5 text-sm capitalize">
                        <Link to={`/shop/${product.gender}`}>{product.gender}</Link>
                        <span>/</span>
                        <Link to={`/shop/category/${product.category}`}>{product.category}</Link>
                        <span>/</span>
                        <Link to={`/shop/brand/${product.brand}`}>{product.brand}</Link>
                    </div>
                    <ProductGallery 
                        id="gallery-indics"
                        productImages={product.images[activeColor].imagesUrls}
                    />
                </div>
                
                {/* details */}
                <div className="flex flex-col items-start gap-8">
                    <ProductHeader
                        name={product.name}
                        price={product.price}
                        discount={product.discount}
                        badges={product.badges}
                    />
                    <ProductSizes sizes={product.sizes} />
                    <ProductColors 
                        colors={product.images} 
                        activeColor={activeColor}
                        handleMouseEnter={handleColorChange}
                    />
                    <ProductDetails details={product.details} />

                    <Button className="w-full" onClick={() => console.log('add to cart')}>add to cart</Button>
                </div>
            </div>)
            : <div className=" w-screen h-dvh flex justify-center items-center"><Spinner /></div>
        }
    </main>
  )
}

export default ProductPage