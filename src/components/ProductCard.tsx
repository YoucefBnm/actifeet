import { useSetActiveProduct } from "@/hooks/useSetActiveProduct";
import { easeTransition } from "@/libs/motion/motion.transitions";
import { clipPathVariants } from "@/libs/motion/motion.variants";
import {
  ProductCardProps,
  ProductColorsProps,
  ProductDetailsProps,
  ProductImagesProps,
  ProductPriceProps,
} from "@/types";
import { formatPrice, setPrice } from "@/utils/price.utils";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Badge } from "./ui/badge";

const ProductCardImages = memo(function (props: ProductImagesProps) {
  const { productImages, activeColor, activeImage, handleMouse } = props;

  const handleMouseEnter = () => handleMouse("enter");
  const handleMouseLeave = () => handleMouse("leave");

  return (
    <div className="size-full flex flex-1 justify-center items-start relative overflow-hidden">
      {productImages.map((productImage, index) => (
        <motion.div
          key={uuidv4()}
          variants={clipPathVariants}
          animate={index === activeColor ? "visible" : "hidden"}
          transition={{ ease: easeTransition, duration: 0.5 }}
          className="absolute inset-0 overflow-hidden"
          exit={"hidden"}
        >
          <div
            className="relative size-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              <motion.div
                key={0}
                variants={clipPathVariants}
                animate={activeImage === 0 ? "visible" : "hidden"}
                transition={{ ease: easeTransition, duration: 0.5 }}
                className="absolute inset-0 size-full bg-white pointer-events-none"
                exit="hidden"
              >
                <img
                  width={500}
                  height={320}
                  loading="lazy"
                  alt="sport shoes"
                  className="object-contain absolute bottom-4 max-h-[65%] mt-auto max-w-[70%] left-1/2 -translate-x-1/2 pointer-events-none"
                  src={productImage.imagesUrls[0]}
                />
              </motion.div>
              <motion.div
                key={1}
                variants={clipPathVariants}
                animate={activeImage === 1 ? "visible" : "hidden"}
                transition={{ ease: easeTransition, duration: 0.5 }}
                className="absolute inset-0 size-full bg-white pointer-events-none"
                exit="hidden"
              >
                <img
                  width={500}
                  height={320}
                  key={1}
                  loading="lazy"
                  alt="sport shoes"
                  className="object-contain absolute bottom-4 max-h-[70%] mt-auto max-w-[75%] left-1/2 -translate-x-1/2 pointer-events-none"
                  src={productImage.imagesUrls[1]}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

const ProductCardColors = memo(function ProductCardColors(
  props: ProductColorsProps
) {
  const { productId, productColors, activeColor, setActiveColor } = props;

  return (
    <div className="flex gap-2 px-4 my-4">
      {productColors.map((productColor, index) => (
        <button
          key={uuidv4()}
          role="button"
          aria-label="show product color"
          className=" appearance-none rounded-full w-3.5 h-3.5 border border-neutral-200 relative"
          style={{ backgroundColor: productColor }}
          onMouseEnter={() => setActiveColor(index)}
        >
          {index === activeColor && (
            <motion.div
              layoutId={productId}
              className="border-[1.5px] border-black rounded-full w-5 h-5 absolute -top-1 -left-1"
              transition={{ type: "spring", stiffness: 500, damping: 50 }}
            />
          )}
        </button>
      ))}
    </div>
  );
});

const ProductCardDetails = memo(function ProductCardDetails({
  productName,
  productGender,
  productCategory,
  productBrand,
}: ProductDetailsProps) {
  return (
    <div className="flex flex-col px-4 gap-2 max-w-full">
      <h4
        className="font-heading text-sm uppercase text-ellipsis truncate"
        title={productName}
      >
        {productName}
      </h4>
      <h5
        className="text-xs text-neutral-500 capitalize text-ellipsis truncate"
        title={`${productGender} ${productCategory} ${productBrand}`}
      >
        {productGender} {productCategory} {productBrand}
      </h5>
    </div>
  );
});

const ProductCardPrice = memo(function ProductCardPrice(
  props: ProductPriceProps
) {
  const { price, discount } = props;
  return (
    <div className="flex my-4 px-4 text-base justify-between items-end">
      {discount ? (
        <>
          <div className="flex text-xs md:text-base items-center gap-2 w-full">
            <p>${setPrice(price, discount)}</p>
            <p className="text-neutral-500 line-through">
              ${setPrice(price, null)}
            </p>
            <Badge
              className="rounded-none px-1 py-px text-xs font-heading border-none"
              variant={"destructive"}
            >
              -{discount}%
            </Badge>
          </div>
        </>
      ) : (
        <p>${formatPrice(price)}</p>
      )}
    </div>
  );
});

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const { activeColor, activeImage, handleColorChange, handleMouse } =
    useSetActiveProduct();

  return (
    <Link
      aria-label={`navigate to ${product.name} page`}
      title={product.name}
      to={`/product/${product.id}`}
      className="flex  flex-col relative "
      id={product.id}
    >
      <div className="overflow-hidden bg-white h-56 w-full relative flex flex-col items-start justify-between gap-8">
        <div className=" size-full bg-neutral-500 z-10 bg-opacity-5 absolute inset-0 pointer-events-none" />
        <div className="flex items-start h-5">
          {product.badge && (
            <Badge
              className="rounded-none py-px text-xs font-heading font-normal border-none"
              variant={"default"}
            >
              {product.badge}
            </Badge>
          )}
        </div>

        <ProductCardImages
          productImages={product.images}
          activeColor={activeColor}
          activeImage={activeImage}
          handleMouse={handleMouse}
        />
      </div>

      <ProductCardColors
        productId={product.id}
        productColors={product.colors}
        activeColor={activeColor}
        setActiveColor={handleColorChange}
      />

      <ProductCardDetails
        productName={product.name}
        productGender={product.gender}
        productCategory={product.category}
        productBrand={product.brand}
      />

      <ProductCardPrice price={product.price} discount={product.discount} />
    </Link>
  );
});

export default ProductCard;
