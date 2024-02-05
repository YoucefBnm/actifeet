import { getDocs, or, query } from "firebase/firestore"
import { collectionRef, mainCategoryQuery, sortOptions, subCategoryQuery } from "./controllers"
import { checkProductsExistanceOnCheck } from "@/utils/checkProductsExistance/checkProductsExistanceOnCheck"

export const filterProducts = async(options) => {

    const { collectionKey, checkedFilters, sortOption, filterValue, filterKey } = options

    const genderQuery = mainCategoryQuery('gender', filterValue)
    const categoryQuery = mainCategoryQuery('category', filterValue)
    const brandQuery = mainCategoryQuery('brand', filterValue)
    const sizeQuery = subCategoryQuery('sizes', filterValue)
    const colorQuery = subCategoryQuery('colors', filterValue)

    const q = query(
        collectionRef(collectionKey),
        sortOptions[sortOption]['query'],
        or(
            genderQuery,
            categoryQuery,
            brandQuery,
            sizeQuery,
            colorQuery
        )
    )
        
    console.log(sortOption, 'option')
    let filtredProducts = []

    const querySnapshot = await getDocs(q)

    querySnapshot.docs.forEach(async doc => {
        filtredProducts.push(doc.data())
    })

    filtredProducts = checkProductsExistanceOnCheck(filtredProducts, checkedFilters, filterKey, filterValue)

    return {
        filtredProducts,
        filterKey,
        filterValue
    }
}