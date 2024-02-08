import { filtersType } from "@/firebase/types";
import { ProductProps } from "@/types/product";
import { SortOption } from "@/types/sortOptions";
import { createAction } from "@/utils/reducer/reducer.utils";
import { DocumentSnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { Params } from "react-router-dom";
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types";

type fetchSuccess = {
    products: ProductProps[],
    count: number,
    lastVisibleItem: DocumentSnapshot
}
export const fetchProductsStart = (
    params: Readonly<Params<string>>,
    sortOption:SortOption,
    lastVisible:QueryDocumentSnapshot | undefined,
    limitNumber:number,
    filters: filtersType
) => createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START, {params,sortOption,lastVisible,limitNumber,filters})

export const loadMorProductsStart = (
    params: Readonly<Params<string>>,
    sortOption:SortOption,
    lastVisible:QueryDocumentSnapshot | undefined,
    limitNumber:number,
    filters: filtersType
) => createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START, {params,sortOption,lastVisible,limitNumber,filters})

export const setSortOption = (option:string) => createAction(SHOP_COLLECTION_TYPES.SET_SORT_OPTION, option)

export const fetchProductsSuccess = ({ products, count, lastVisibleItem}:fetchSuccess) => 
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS, { products, count, lastVisibleItem })

export const loadeMoreProductsSuccess = ({ products, count, lastVisibleItem}:fetchSuccess) =>
    createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS, { products, count, lastVisibleItem})

export const fetchProductsFailed = (error:string | unknown) => 
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED, error)