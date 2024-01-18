export interface ProductProps {
    id: string;
    gender: string;
    category: string;
    brand: string;
    name: string;
    amazonLink: string;
    badges?: string[];
    price: number;
    discount?: number | undefined;
    sizes: number[];
    colors: string[];
    images: {
        id: string;
        color: string;
        imagesUrls: string[]
    }[];
    details?: string[]
}
export interface ProductCardProps { product: ProductProps}
export interface ProductImagesProps { 
    productImages: ProductProps['images'];
    activeColor: number;
    activeImage: number;
    handleMouse: (event: 'enter' | 'leave') => void
}
export interface ProductColorsProps { 
    productId: ProductProps['id'];
    productColors: ProductProps['colors'];
    activeColor: number;
    setActiveColor: (index:number) => void
}

export interface ProductDetailsProps {
    productName: ProductProps['name'];
    productGender: ProductProps['gender'];
    productCategory: ProductProps['category'];
    productBrand: ProductProps['brand']
}

export interface ProductPriceProps {
    price: ProductProps['price'];
    discount: ProductProps['discount']
}