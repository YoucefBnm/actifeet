import { useGetParams } from "@/hooks/useGetParams"
import { ShopNav, ShopProducts } from "@/layouts"
import { motion } from "framer-motion"

const Shop = () => {
  
  return (
    <main className="flex flex-col gap-4 px-default py-8 shop">
        
        <motion.div 
          className='grid grid-cols-[256px_1fr] gap-x-2'
        >
          <ShopNav />
          <ShopProducts />
        </motion.div>
    </main>
  )
}

export default Shop