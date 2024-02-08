import { Spinner } from "@/components";
import { useFetchProductItem } from "@/hooks/useFetchProductItem";
import { useIsActive } from "@/hooks/useSetActiveImage";
import { ProductPageDetails, ProductPageGallery } from "@/layouts";
import { Link } from "react-router-dom";

const ProductPage = () => {

    const { product } = useFetchProductItem()
    const {activeColor, handleColorChange } = useIsActive()

  return (
    <main>
        {
            product
            ?(<div className="grid gap-8 grid-rows-[repeat(2,min-content)] md:grid-rows-1 md:grid-cols-[.6fr_.4fr] px-default py-8">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-end gap-0.5 text-sm capitalize">
                        <Link to={`/shop/${product.gender}`}>{product.gender}</Link>
                        <span>/</span>
                        <Link to={`/shop/category/${product.category}`}>{product.category}</Link>
                        <span>/</span>
                        <Link to={`/shop/brand/${product.brand}`}>{product.brand}</Link>
                    </div>
                    
                    <ProductPageGallery productImages={product.images[activeColor].imagesUrls} />
                </div>
                
                <ProductPageDetails 
                    product={product} 
                    activeColor={activeColor}
                    handleColorChange={handleColorChange}
                />
            </div>)
            : <div className=" w-screen h-dvh flex justify-center items-center"><Spinner /></div>
        }
    </main>
  )
}

export default ProductPage