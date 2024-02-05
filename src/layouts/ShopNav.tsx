import { SortSelect, Spinner } from "@/components"
import ShopFiltersWrap from "@/components/ShopFiltersWrap"
import { ScrollArea } from "@/libs/shadcn/ui/scroll-area"
import { selectCount, selectIsFetching } from "@/store/shopCollection/shopCollection.selector"
import { useSelector } from "react-redux"


const ShopNav = () => {
  const count = useSelector(selectCount)
  const isFetching = useSelector(selectIsFetching)

  return (
    <aside className="sticky max-h-[450px] left-0 top-16  w-full">
      {isFetching && <div className="max-h-[450px] absolute inset-0 z-10 bg-zinc-950 opacity-5 flex items-center justify-center"><Spinner /></div>}
      <ScrollArea className="flex flex-col h-full items-start justify-start w-full pl-2 pr-4">
          <SortSelect />
          
          <div className="group w-full my-4">
            <h3 className="heading heading-sm mb-2  inline-flex items-center gap-1">
              filter 
              <span className="text-xs font-heading font-semibold text-zinc-500">
                {count} Products
              </span>
            </h3>
          </div>

          <ShopFiltersWrap />
      </ScrollArea>
    </aside>
    
  )
}

export default ShopNav