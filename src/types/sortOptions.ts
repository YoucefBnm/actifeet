import { QueryConstraint, QueryOrderByConstraint } from "firebase/firestore";

export type sortOptionItem = {
    title: string;
    query: QueryConstraint
}

export type SortOption = 'suggested' | 'best seller' | 'sale' | 'low to high' | 'high to low';

// export type SortOptionsTypes = {
//     [Key in SortOption]: {
//         title: string;
//         query: QueryOrderByConstraint
//     }
// }


export type SortOptionsTypes = {
    [Key in SortOption]: QueryOrderByConstraint
}

