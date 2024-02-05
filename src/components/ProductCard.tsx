import { useIsActive } from "@/hooks/useSetActiveImage";
import { Badge } from "@/libs/shadcn/ui/badge";
import { ProductCardProps, ProductColorsProps, ProductDetailsProps, ProductImagesProps, ProductPriceProps } from "@/types/product";
import { setPrice } from "@/utils/price/price.utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";



const ProductColors = (props:ProductColorsProps) => {

    const { productId, productColors, activeColor, setActiveColor} = props

    return (
        <div className="flex gap-1.5 px-4">
            {productColors.map((productColor, index) => (
                <button 
                    className="appearance-none rounded-full w-3.5 h-3.5 shadow-inner border border-stone-200 relative"
                    role="button"
                    aria-label="show relative color"
                    key={`${productColor}-${index}`}
                    style={{ backgroundColor: productColor}}
                    onMouseEnter={() => setActiveColor(index)}
                >
                    {
                        index===activeColor
                        && (
                            <motion.div
                                className=" border-2 border-zinc-400 w-5 h-5 rounded-full absolute top-[-4px] left-[-4px]"
                                layoutId={productId}
                                transition={{ type: 'spring', stiffness: 500, damping: 50}}
                            />
                        )
                    }
                </button>
            ))}
        </div>
    )
}

const ProductCardImages = (props:ProductImagesProps) => {
    
    const {productImages, activeColor, activeImage, handleMouse} = props
    
    return (
        <div className="h-full flex flex-1 justify-center items-center relative w-full overflow-hidden">
            {
                productImages.map((productImage,index) => (
                    <motion.div 
                        animate={index===activeColor ? { opacity: 1 } : { opacity: 0 }}
                        key={productImage.id}
                        className="absolute inset-0 text-center overflow-hidden"
                        onMouseEnter={() => handleMouse('enter')}
                        onMouseLeave={() => handleMouse('leave')}
                    >
                        <div className="p-4 pb-4  w-full h-full flex bg-cover bg-center">
                            <div 
                                className={
                                    index===activeColor
                                    ? 'relative w-full h-full flex items-center opacity-100'
                                    : 'relative w-full h-full flex items-center opacity-0'
                                }
                            >
                                <AnimatePresence>
                                    <motion.img 
                                        key={0}
                                        // variants={fadeVariants(null)}
                                        animate={activeImage===0 ? {opacity: 1 } : { opacity: 0}}
                                        loading="lazy"
                                        className=" object-contain absolute bottom-0 max-h-[90%] mt-auto max-w-[90%] bg-center left-1/2 -translate-x-1/2"
                                        alt={productImage.color}
                                        src={productImage.imagesUrls[0]}
                                        exit={{ opacity: 0}}
                                    />
                                    <motion.img 
                                        key={1}
                                        animate={activeImage===1 ? {opacity: 1 } : { opacity: 0}}
                                        loading="lazy"
                                        className=" object-contain absolute bottom-0 max-h-[90%] mt-auto max-w-[90%] bg-center left-1/2 -translate-x-1/2"
                                        alt={productImage.color}
                                        src={productImage.imagesUrls[1]}
                                        exit={{ opacity: 0}}
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                ))
            }

        </div>
    )
}

const ProductDetails = (props:ProductDetailsProps) => {
    
    const { productName, productBrand, productGender, productCategory } = props 
    
    return (
        <div className="flex flex-col px-4 max-w-full">
            <h4 className="text-base font-heading font-semibold text-ellipsis truncate" title={productName}>
                {productName}
            </h4>
            <h5 className="text-xs text-zinc-500 capitalize font-normal">
                {productBrand} {productGender} {productCategory}
            </h5>
        </div>
    )
}

const ProductPrice = (props:ProductPriceProps) => {

    const { price, discount } = props

    return (
        <div className="flex px-4 justify-between items-end">
            {
                discount 
                ?(
                    <>
                        <div className="flex flex-col items-end  justify-end ">
                            <p className="font-bold text-sm">${setPrice(discount, price)}</p>
                            <p className="line-through text-sm text-zinc-500">${setPrice(null, price)}</p>
                        </div>
                        <Badge variant={'destructive'} className="px-1 mb-1 rounded-none leading-none font-medium text-xs">-{discount}%</Badge>
                    </>
                )
                : <p className="font-bold text-sm">${setPrice(null, price)}</p>
            }

        </div>
    )
}

const ProductCard = ({product}:ProductCardProps) => {

    const { activeColor, activeImage, handleColorChange, handleMouse } = useIsActive()

  return (
    <Link to='/' title={product.name} className="relative bg-white flex flex-col gap-2 pb-2">
        {/* top */}
        <div className="overflow-hidden bg-white h-52 w-full relative flex flex-col items-start justify-between">
            {/* overlay */}
            <div className="w-full h-full bg-zinc-950 opacity-[0.05] rounded-sm absolute inset-0 z-10 pointer-events-none" />
            {/* badges */}
            <div className="flex items-start justify-start h-5">
                {
                    product.badges 
                    && product.badges.map((badge) => (
                        <Badge className=" bg-zinc-200 text-zinc-900 shadow-none"  key={`${product.id}-${badge}`}>{badge}</Badge>
                    ))
                }
            </div>
            <ProductCardImages 
                productImages={product['images']} 
                activeColor={activeColor}
                activeImage={activeImage}
                handleMouse={handleMouse}
            />
        </div>

        <ProductColors
            productId={product.id}
            productColors={product.colors}
            activeColor={activeColor}
            setActiveColor={handleColorChange}
        />

        <ProductDetails
            productName={product.name}
            productGender={product.gender}
            productCategory={product.category}
            productBrand={product.brand}
        />

        <ProductPrice
            price={product.price}
            discount={product.discount}
        />
    </Link>
  )
}

export default ProductCard