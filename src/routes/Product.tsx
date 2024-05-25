import Spinner from "@/components/Spinner";
import { useFetchProductItem } from "@/hooks/useFetchProductItem";
import { useSetActiveProduct } from "@/hooks/useSetActiveProduct";
import ProductItemDetails from "@/sections/ProductItemDetails";
import ProductItemGallery from "@/sections/ProductItemGallery";

const Product = () => {
  const { product } = useFetchProductItem();
  const { activeColor, handleColorChange } = useSetActiveProduct();

  return (
    <main>
      {product ? (
        <div className="section-container px-default py-12">
          <div className=" col-span-12 md:col-span-6 row-start-1 col-start-1 ">
            <ProductItemGallery
              productImages={product.images[activeColor].imagesUrls}
            />
          </div>
          <div className="col-span-12 row-start-2 md:col-span-5 md:col-start-8 md:row-start-1">
            <ProductItemDetails
              product={product}
              activeColor={activeColor}
              handleColorChange={handleColorChange}
            />
          </div>
        </div>
      ) : (
        <div className="w-screen h-svh flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </main>
  );
};

export default Product;
