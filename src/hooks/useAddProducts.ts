import { SHOP_DATA } from "@/assets/shop_data"
import { addProducts } from "@/firebase/addProducts"
import { useEffect } from "react"


export function useAddProudcts () {

    const controller = new AbortController()

    useEffect(() => {
        addProducts('products', SHOP_DATA)

        return () => controller.abort()
    }, [])
}