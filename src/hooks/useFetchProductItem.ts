import { fetchProductItem } from "@/firebase/fetchProducts";
import { ProductProps } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useFetchProductItem () {

    const [product, setProduct] = useState<ProductProps | undefined>()
    const [error, setError] = useState<string>()

    const { productId, productColorId } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const productItem = productId && await fetchProductItem(productId)
            
            if(productItem) {
                setProduct(productItem)
            }

            if(!product) {
                setError('Product does not exist !!')
            }
        }

        fetchProduct()
    }, [productId])

    return {
        product,
        productColorId,
        error
    }
}