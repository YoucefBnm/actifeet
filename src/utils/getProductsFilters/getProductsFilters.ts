import { fetchParams } from "@/types/fetchShopCollection"

export const getProductsFilters = (params:fetchParams) => {
    return Object.values(params).join('')
}