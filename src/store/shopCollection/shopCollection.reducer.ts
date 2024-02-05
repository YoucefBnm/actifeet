import { ProductProps } from "@/types/product"
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types"
import { DocumentSnapshot } from "firebase/firestore"
import { SortOption } from "@/types/sortOptions"

type ShopCollectionStateType = {
    products: ProductProps[],
    lastVisible: undefined | DocumentSnapshot,
    count: null | number,
    selectedSortOption: SortOption,
    isFetching: boolean,
    error: null | string
}
const SHOP_COLLECTION_INITIAL_STATE:ShopCollectionStateType = {
    products: [],
    lastVisible: undefined,
    count: null,
    selectedSortOption: 'suggested',
    isFetching: false,
    error: null,
}
type ReducerAction = {
    type: string,
    payload: any
}
export const shopCollectionReducer = (state=SHOP_COLLECTION_INITIAL_STATE, { type, payload}:ReducerAction) => {
    
    switch(type) {
        case SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START:
        case SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        
        case SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                products: payload.products,
                lastVisible: payload.lastVisibleItem,
                count: payload.count
            }
        case SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                products: [...state.products, ...payload.products],
                lastVisible: payload.lastVisibleItem,
                count: payload.count
            }

        case SHOP_COLLECTION_TYPES.SET_SORT_OPTION:
            return {
                ...state,
                selectedSortOption: payload
            }


        case SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload.error
            }
        
        default:
            return state
    }
}