import { fetchProducts } from "@/firebase/fetchProducts"
import { all, call, put, takeLatest } from "redux-saga/effects"
import { fetchProductsFailed, fetchProductsSuccess, loadeMoreProductsSuccess } from "./shopCollection.action"
import { filtersType } from "@/firebase/types"
import { Params } from "react-router-dom"
import { SortOption } from "@/types/sortOptions"
import { QueryDocumentSnapshot } from "firebase/firestore"
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types"
import { TakeableChannel } from "redux-saga"

type PayloadType = {
    payload: {
        params: Readonly<Params<string>>,
        sortOption:SortOption,
        lastVisible:QueryDocumentSnapshot | undefined,
        limitNumber:number,
        filters: filtersType 
    }
}
function* fetchShopProductsAsync ({ payload }:PayloadType): Generator<any, void, any> {

    try {
        const { 
            params,
            sortOption,
            lastVisible,
            limitNumber,
            filters
        } = payload

        const fetchShopProducts = yield call(fetchProducts, {params,sortOption,lastVisible,limitNumber,filters})
        yield put(fetchProductsSuccess(fetchShopProducts))
    } catch(error) {
        yield put(fetchProductsFailed(error))
    }
}
function* loadMoreProductsAsync ({ payload }:PayloadType): Generator<any, void, any> {

    try {
        const { 
            params,
            sortOption,
            lastVisible,
            limitNumber,
            filters
        } = payload
        const loadMoreProducts = yield call(fetchProducts, {params,sortOption,lastVisible,limitNumber,filters})
        yield put(loadeMoreProductsSuccess(loadMoreProducts))
    } catch(error) {
        yield put(fetchProductsFailed(error))
    }
}

function* onFetchShopCollection() {
    yield takeLatest(
        SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START as unknown as TakeableChannel<unknown>,
        fetchShopProductsAsync
    )
}

function* onLoadMoreProducts() {
    yield takeLatest(
        SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START as unknown as TakeableChannel<unknown>,
        loadMoreProductsAsync
    )
}
export function* shopCollectionSaga () {
    yield all([
        call(onFetchShopCollection),
        call(onLoadMoreProducts)
    ])
}