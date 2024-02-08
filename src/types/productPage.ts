import { ProductProps } from "./product";

export interface ProductGalleryProps {
    productImages: string[];
}

export interface ProductPageDetailsProps {
    product: ProductProps,
    activeColor: number,
    handleColorChange: (index:number) => void
}

export interface ProductDetailPageHeaderProps {
    badges?: ProductProps['badges'];
    discount?: ProductProps['discount'];
    name: ProductProps['name'];
    price: ProductProps['price'];
}
export interface ProductDetailPageColorsProps {
    colors: ProductProps['images'];
    activeColor: number;
    handleMouseEnter: (index:number) => void 
}

export interface ProductPageSizesProps {
    sizes: ProductProps['sizes'],
    selectedSize: number | undefined,
    setSelectedSize: (size:number) => void
}

export type ProductPageDescription = { details: ProductProps['details']}