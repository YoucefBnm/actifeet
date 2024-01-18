import { SHOP_DATA } from "@/assets/shop_data"
import { ProductCard } from "@/components"

const ProductsCarousel = () => {
  return (
    <section className="px-default py-8">
      <ProductCard product={SHOP_DATA[2]}/>
    </section>
  )
}

export default ProductsCarousel