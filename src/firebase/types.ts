
export type value = string
export type mainCategoryField = "gender" | "category" | "brand" | "name"
export type subCategoryField = "sizes" | "colors"

export type filtersType = {
    gender?: string[],
    category?: string[],
    brand?: string[],
    badges?: string[],
    sizes?: string[],
    colors?: string[],
}