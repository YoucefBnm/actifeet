import { useDispatch, useSelector } from "react-redux";
import { useSetFilterParams } from "./useSetFilterParams";
import { selectSortOption } from "@/store/shopCollection/shopCollection.selector";
import { useEffect } from "react";
import { fetchProductsStart } from "@/store/shopCollection/shopCollection.action";
import { SortOption } from "@/types/sortOptions";
import { useParams } from "react-router-dom";

export function useFetchProducts () {

    const { getCheckedFilters } = useSetFilterParams()

    const params = useParams()
    const checkedFilters = getCheckedFilters()
    const selectedSortOption = useSelector(selectSortOption) as SortOption

    const dispatch = useDispatch()
    const loadProducts = () => dispatch(fetchProductsStart(params, selectedSortOption, undefined, 12, checkedFilters))

    useEffect(() => {
        loadProducts()
    }, [params])

    return {
        params,
        checkedFilters
    }
}