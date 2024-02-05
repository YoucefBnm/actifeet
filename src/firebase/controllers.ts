import { DocumentData, Query, QueryFieldFilterConstraint, collection, getCountFromServer, getDocs, getFirestore, orderBy, where } from "firebase/firestore";
import app from "./config";
import { SortOptionsTypes } from "@/types/sortOptions";
import { Params } from "react-router-dom";

export const db = getFirestore(app)

export const collectionRef = (collectionKey:string) => collection(db, collectionKey)

export const mainCategoryQuery = (field:string,value:string):QueryFieldFilterConstraint => where(field, '==', value)
export const subCategoryQuery = (field:string,value:string):QueryFieldFilterConstraint => where(field, 'array-contains-any', [value])

export const getItemsCount = async(collectionKey:string) => {

    const count = (await getCountFromServer(collectionRef(collectionKey))).data().count

    return count
}

export const sortOptions:SortOptionsTypes = {
    'suggested': orderBy('id', 'desc'),
    'best seller': orderBy('badges', 'asc'),
    'sale': orderBy('badges', 'desc'),
    'low to high': orderBy('price', 'asc'),
    'high to low': orderBy('price', 'desc')
}

export const filterQueries = (params:Params) => {
    const { gender, category, brand, badges, sizes, colors } = params

    return {
        gender: gender ? where('gender', '==', gender) : undefined,
        category: category ? where('category', '==', category) : undefined,
        brand: brand ? where('brand', '==', brand) : undefined,
        badges: badges ? where('badges', 'array-contains-any', [badges]) : undefined,
        sizes: sizes ? where('sizes', 'array-contains-any', [parseInt(sizes)]): undefined,
        colors: colors ? where('colors', 'array-contains-any', [colors]) : undefined,
    }
}