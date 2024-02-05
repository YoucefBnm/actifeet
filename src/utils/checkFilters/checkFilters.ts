export const setFiltersOnCheck = (allFilters, checkedFilters, filterKey, filterValue, collectionKey, sortOption) => {

    allFilters[filterKey].find(filter => filter.name === filterValue).isChecked = true

    return {
        checkedFilters: {
            ...checkedFilters,
            [filterKey]: [filterValue, ...checkedFilters[filterKey]]
        },
        collectionKey,
        sortOption,
        filterKey,
        filterValue
    }
}