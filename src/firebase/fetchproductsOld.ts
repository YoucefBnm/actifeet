import { QueryConstraint, and, collection, getDocs, limit, or, query, startAfter, where } from "firebase/firestore"
import { db, filterQueries, sortOptions } from "./controllers"


export const fetchProducts = async (
    params,
    sortOption,
    lastVisible,
    limitNumber,
    filters,
) => {
    
    const collectionRef = collection(db, 'products')
    const lastVisibleQuery = lastVisible ? startAfter(lastVisible) : undefined
    const sortQuery = sortOption ? sortOptions[sortOption].query : sortOptions['suggested']?.query
    const limitQuery = limit(limitNumber)

    const getParamsQuery = filterQueries(params)
    const paramsQuery = query(...Object.values(getParamsQuery).filter(Boolean))
    let filterQuery = []

    Object.keys(filters).forEach(filterKey => {
        const filterValues = filters[filterKey]

        if(filterValues) {
            // filterValues.forEach(filterValue => filterQuery.push(where(filterKey, '==', filterValue)))
            const orFilters:QueryConstraint[] = filterValues.map(filterValue => 
                where(filterKey, '==', filterValue)
            )
            filterQuery.push(...orFilters)
        }
    })
    console.log(paramsQuery, 'params')
    console.log(filterQuery, 'filters')
    
    const q = query(
        collectionRef,
        sortQuery,
        and(paramsQuery,
        or(...filterQuery)),
        // lastVisibleQuery,
        // limitQuery,
    )

    const documentSnapshot = await getDocs(q)

    let products = []

    documentSnapshot.docs.forEach(doc => {
        products.push(doc.data())
    })

    return {
        products
    }
}