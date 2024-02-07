import { QueryDocumentSnapshot, QueryFieldFilterConstraint, QueryFilterConstraint, and, collection, doc, getCountFromServer, getDoc, getDocs, limit, or, query, startAfter } from "firebase/firestore"
import { db, filterQueries, sortOptions } from "./controllers"
import { SortOptionsTypes } from "@/types/sortOptions"
import { ProductProps } from "@/types/product"
import { Params } from "react-router-dom"
import { filtersType } from "./types"

type fetchOptionsProps = {
    params: Params,
    sortOption: keyof SortOptionsTypes,
    lastVisible: QueryDocumentSnapshot | undefined,
    limitNumber: number,
    filters: filtersType
}

export const fetchProducts = async (options:fetchOptionsProps) => {
    const { params, sortOption, lastVisible, limitNumber, filters } = options

    const collectionRef = collection(db, 'products')
    const sortQuery = sortOption ? sortOptions[sortOption] : sortOptions['suggested']
    const limitQuery = limit(limitNumber)

    let getFiltersParams: Array<QueryFilterConstraint> = []

    filters && Object.keys(filters).forEach(filterKey => {
        const filterValues = filters[filterKey as keyof filtersType]

        if(filterValues) {
            filterValues.map((filterValue) => {
                const filterItem = {[filterKey]: filterValue}
                const checkedFilters = Object.values(filterQueries(filterItem))?.filter(Boolean) as QueryFieldFilterConstraint[]
                getFiltersParams.push(...checkedFilters)
            })
        }
    })

    const getParamsQuery = filterQueries(params)
    const paramsQuery = Object.values(getParamsQuery).filter(Boolean) as QueryFieldFilterConstraint[]
    const allParams = (and(...paramsQuery, or(...getFiltersParams)))
    
    let q = lastVisible 
    ? query(
        collectionRef,
        allParams,
        sortQuery,
        startAfter(lastVisible),
        limitQuery
    ) 
    : query(
        collectionRef,
        allParams,
        sortQuery,
        limitQuery
    )

    const documentSnapshot = await getDocs(q)

    let products:ProductProps[] = []
    
    documentSnapshot.docs.forEach(doc => {
        products.push(doc.data() as ProductProps)
    })

    const count = (await getCountFromServer(query(collectionRef, allParams, sortQuery))).data().count
    
    const lastVisibleIndex = documentSnapshot.docs.length - 1
    let lastVisibleItem = documentSnapshot.docs[lastVisibleIndex]

    return {
        products,
        count,
        lastVisibleItem
    }
}

export const fetchProductItem = async (productId:string) => {

    const collectionRef = collection(db, 'products')

    const productDoc = doc(collectionRef, productId)

    const productSnapshot = await getDoc(productDoc)
    
    if(productSnapshot.exists()) {
        return productSnapshot.data() as ProductProps
    } 
}