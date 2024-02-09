
export interface CartItemProps {
    id: string;
    gender: string;
    category: string,
    brand: string;
    name: string;
    price: number | string;
    size: number;
    color: string;
    mainImage: string;
    quantity: number
}

export interface CartProps {
    cartItems: CartItemProps[];
    itemToAdd: CartItemProps;
    selectedColor: number;
    selectedSize: number
}