import { checkedFilterItemType } from "@/types/fetchShopCollection"
import { ProductProps } from "@/types/product"

type filterdProductsType = ProductProps[]
type checkedFiltersType = {gender: checkedFilterItemType,category:checkedFilterItemType,brand:checkedFilterItemType,size:checkedFilterItemType,color:checkedFilterItemType}
type filterKeyType = 'gender'|'category'|'brand'
type filterValueType = string 


export const checkProductsExistanceOnCheck = 
    (filtredProducts:filterdProductsType, 
    checkedFilters:checkedFiltersType, 
    filterkey:filterKeyType, 
    filterValue:filterValueType
    ) => {
        
        let key1:filterKeyType,key2:filterKeyType

        if(filterkey==='gender') {
            key1 = 'category'
            key2 = 'brand'
        }
        if(filterkey==='category') {
            key1 = 'gender'
            key2 = 'brand'
        }
        if(filterkey==='brand') {
            key1 = 'gender'
            key2 = 'category'
        }

        const { gender, category, brand, size, color } = checkedFilters

        const checkExistanceByMainCategory = filtredProducts.filter(product => 
            !checkedFilters[key1]?.includes(product[key1])    
            && !checkedFilters[key2]?.includes(product[key2])
            && product.sizes.every(productSize => !size.includes(productSize.toString()))
            && product.colors.every(productColor => !color.includes(productColor))
        )

        const checkExistanceBySubCategory = filtredProducts.filter(product => 
            !gender.includes(product['gender'])    
            && !category.includes(product['category'])
            && !brand.includes(product['brand'])
            && product.sizes.every(productSize => !size.includes(productSize.toString()) || productSize.toString() === filterValue)
            && product.colors.every(productColor => !color.includes(productColor) || productColor === filterValue)
        )
        
        let checkExistance = 
            filterkey==='size'||filterkey==='color'
            ? checkExistanceBySubCategory
            : checkExistanceByMainCategory
        
        return checkExistance
    }