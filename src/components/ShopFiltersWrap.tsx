import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/libs/shadcn/ui/accordion'
import { FilterItem } from '.'
import { SHOP_FILTERS } from '@/constants/shopFiltersTags'
import { filterItemType } from '@/types/filterItems'
import { Badge } from '@/libs/shadcn/ui/badge'
import { useGetParams } from '@/hooks/useGetParams'
import { useSetFilterParams } from '@/hooks/useSetFilterParams'

const ShopFiltersWrap = () => {
  
    const params = Object.values(useGetParams()).join('')

    const { filterParams, addValue, removeValue, getCheckedFilters } = useSetFilterParams()

    const checkedFilters = getCheckedFilters()
    
    return (
      <>
        {filterParams.size > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {
              Object.keys(checkedFilters).map((key) => (
                checkedFilters[key]?.map(filter => 
                  <Badge   className="rounded-full px-2 py-0.5" key={filter}>
                    <span>{filter}</span>
                    <button title={`remove ${key}`} aria-label='remove tag' type="button" onClick={() => removeValue(key, filter)}>
                      <span className='align-middle ml-1'>&times;</span>
                    </button>
                  </Badge>)
              ))
            }
          </div>
        )}
        {params && 
        (Object.keys(SHOP_FILTERS[params]).map((key,index) => (
          <Accordion key={`${key}-${index}`} type="single" collapsible className="flex flex-1 w-full flex-col gap-2">
            {SHOP_FILTERS[params][key].length > 1 
              &&(<AccordionItem value={key}>
                <AccordionTrigger>
                  <h4 className="uppercase font-semibold font-heading text-base">{key}</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-1">
                    {
                      SHOP_FILTERS[params][key].map((filterItem:filterItemType) => (
                        <FilterItem
                          key={filterItem.name}
                          category={key}
                          label={filterItem.name}
                          isChecked={checkedFilters[key] ? (checkedFilters[key]?.includes(filterItem.name) ?? false) : false}
                          handleChange={(checked) => {
                            if(checked) {
                              addValue(key, filterItem.name)
                            }
                            if(!checked) removeValue(key, filterItem.name)

                          }}
                        />
                      ))
                    }
                  </div>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        )))}
      </>
  
    )
}

export default ShopFiltersWrap