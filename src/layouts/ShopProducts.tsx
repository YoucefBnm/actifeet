import { ProductCard, Spinner } from "@/components"
import { useAddProudcts } from "@/hooks/useAddProducts"
import { useFetchProducts } from "@/hooks/useFetchProducts"
import { fadeVariants } from "@/libs/motion/motion.variants"
import { Skeleton } from "@/libs/shadcn/ui/skeleton"
import { loadMorProductsStart } from "@/store/shopCollection/shopCollection.action"
import { selectCount, selectIsFetching, selectLastVisible, selectShopCollectionProducts, selectSortOption } from "@/store/shopCollection/shopCollection.selector"
import { ProductProps } from "@/types/product"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from "react-redux"

type GridCellProps = {
  product: ProductProps;
}

const CellSkelton = () => (
  <div className="flex justify-start items-start w-full h-full inset-0 flex-col gap-4 pb-2">
    {/* top */}
    <Skeleton className="w-full h-52 rounded-sm" />
    {/* colors */}
    <Skeleton className="w-11 h-[14px] rounded-sm" />
    {/* <Skeleton className=" h-5 w-1/2 rounded-sm" /> */}
    {/* price */}
    <Skeleton className=" h-[26px] w-1/2 rounded-sm" />
  </div>
)

const GridCell = ({product}:GridCellProps) => {
  const isFetching = useSelector(selectIsFetching)
  
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <motion.div 
      // className="w-[270px] md:w-64 w- sm:w-[300px]"
      variants={fadeVariants(null)}
    >
      {
        isFetching || !inView
        ? (
          <motion.div
            variants={fadeVariants(null)}
            initial={{opacity: 1 }}
            animate={!inView || isFetching  ? { opacity: 1} : {opacity: 0}}

          >
            <div ref={ref} className="mt-auto" />
            <CellSkelton />
          </motion.div>
        )
        : (
          <motion.div 
            variants={fadeVariants(null)}
            initial={{ opacity: 1}}
            animate={ inView ? { opacity: 1}:{opacity: 0}}

          >
            <ProductCard product={product} />
          </motion.div>
        )
      }

    </motion.div>
  )
}

const ShopProducts = () => {

  // useAddProudcts()

  const products = useSelector(selectShopCollectionProducts)
  const isFetching = useSelector(selectIsFetching)
  const productsCount = useSelector(selectCount)
  const lastVisible = useSelector(selectLastVisible)
  const sortOption = useSelector(selectSortOption)

  const allLoaded = products.length === productsCount
  const observerRef = useRef(null)
  const containerRef = useRef(null)
  
  const dispatch = useDispatch()

  const { params, checkedFilters } = useFetchProducts()
  const loadProducts = () => dispatch(loadMorProductsStart(params, sortOption, lastVisible, 12, checkedFilters))

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if(entries[0].isIntersecting && !allLoaded && products.length > 0) {
          loadProducts()
        }
      }, { threshold: 0}
    )

    if(observerRef.current) {
      observer.observe(observerRef.current)
    }
    return () => {
      if(observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  })

  return (
    <article ref={containerRef} className="sticky top-0 min-h-dvh overflow-scroll grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,2fr))]  ">
      {
        products && products.map((product:ProductProps) => (
          <GridCell product={product} key={product.id} />
        ))
      }
      {isFetching  && <div className=" self-center"><Spinner /></div>}
      <div className=" self-center" ref={observerRef} />
      
    </article>
  )
}

export default ShopProducts