import { QueryDocumentSnapshot } from "firebase/firestore";
import { SortOptionsTypes } from "./sortOptions";

export type paramsType = {
    gender?: string;
    category?: string;
    brand?: string;
    badges?: string[];
    sizes?: string[];
    colors?: string[]
}

export interface fetchCollectionParams {
    filters: paramsType;
    sortOption: keyof SortOptionsTypes;
    lastVisible: QueryDocumentSnapshot, 
    limitQuery: number
}