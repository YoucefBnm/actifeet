import { ShopNav, ShopProducts } from "@/layouts"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/libs/shadcn/ui/sheet"
import { FilterIcon } from "@/assets"
import { isMobile } from "@/utils/mediaQuery/mediaQuery"

const Shop = () => {
  const mediaQuerySize = isMobile()

  return (
    <main className="flex flex-col gap-4 px-default py-8 shop">

        <motion.div 
          className={mediaQuerySize ? 'grid items-start' : 'grid grid-cols-[256px_1fr] gap-x-2 items-start'}
        >
          {
            mediaQuerySize
            ? (
              <div className="sticky top-20 -ml-8 left-1 mb-4 w-fit inline-flex items-center justify-center p-1.5 border border-zinc-300 rounded-full bg-zinc-200 shadow-sm z-10 transition-colors hover:bg-zinc-500">
                <Sheet>
                  <SheetTrigger asChild>
                    <button title="filters" role="button" aria-label="nav filters trigger">
                      <img width={16} height={16} src={FilterIcon} />
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <ShopNav />
                  </SheetContent>
                </Sheet>
              </div>
            )
            : (
              <ShopNav />
            )
          }
          <ShopProducts />
        </motion.div>
    </main>
  )
}

export default Shop