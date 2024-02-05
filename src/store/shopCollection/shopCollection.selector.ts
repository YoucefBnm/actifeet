import { RootState } from "../root.reducer";
import { createSelector } from "reselect"

const selectShopCollectionReducer = (state:RootState) => state.shopCollection

export const selectShopCollectionProducts =createSelector(
    [selectShopCollectionReducer],
    shopCollectionSlice => shopCollectionSlice.products
)

export const selectLastVisible = createSelector(
    [selectShopCollectionReducer],
    shopCollectionSlice => shopCollectionSlice.lastVisible
)

export const selectIsFetching = createSelector(
    [selectShopCollectionReducer],
    shopCollectionSlice => shopCollectionSlice.isFetching
)

export const selectSortOption = createSelector(
    [selectShopCollectionReducer],
    shopCollectionSlice => shopCollectionSlice.selectedSortOption
)

export const selectCount = createSelector(
    [selectShopCollectionReducer],
    shopCollectionSlice => shopCollectionSlice.count
)