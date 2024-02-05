import { setSortOption } from "@/store/shopCollection/shopCollection.action";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

type filtersKeyType = 'gender' | 'category' | 'brand' | 'size' | 'color' | undefined | string

type CheckedFiltersType<T extends string> = {
    [Key in T]?: string[] | undefined
}


export function useSetFilterParams () {
    const dispatch = useDispatch()

    const [filterParams, setFilterParams] = useSearchParams()
    const [sortOption, ss] = useSearchParams()

    const addValue = (key:string, value:string) => {
        const currentKeyValue = filterParams.get(key)
        filterParams.append(key, value)

        const newKeyValue = currentKeyValue ? `${currentKeyValue}_${value}` : value

        filterParams.set(key, newKeyValue)
        setFilterParams(filterParams)
    }

    const removeValue = (key:filtersKeyType, value:string) => {

        const currentKeyValue = key && filterParams.get(key)

        if(currentKeyValue) {
            const values = currentKeyValue.split('_')
            const updateValue = values.filter(val => val !== value)

            if(updateValue.length > 0) {
                filterParams.set(key, updateValue.join('_'))
            } else {
                filterParams.delete(key)
            }
        }

        setFilterParams(filterParams)
    }
    
    const getCheckedFilters = () => {
        const entries = filterParams.entries()
        let checkedFilters:CheckedFiltersType<'gender' | 'category' | 'brand' | 'size' | 'color' | string> = {}

        for(const entry of entries) {
            const [key, value] = entry
            if(key!=='sort') {
                const values = value.split('_')
                checkedFilters[key] = values
            }
        }
        return checkedFilters
    }

    const setSortParam = (selectedOption:string) => {
        dispatch(setSortOption(selectedOption))
        sortOption.set('sort',selectedOption)
        console.log(sortOption.get('sort'))
        ss(sortOption)
    }
    return {
        filterParams,
        addValue,
        removeValue,
        getCheckedFilters,
        setSortParam
    }
}