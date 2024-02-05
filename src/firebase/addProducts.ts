import { ProductProps } from "@/types/product";
import { doc, writeBatch } from "firebase/firestore";
import { collectionRef, db } from "./controllers";


export const addProducts = async(collectionKey:string, productsToAdd:ProductProps[]) => {
    const batch = writeBatch(db)
    
    productsToAdd.forEach(async(product: ProductProps) => {
        const docRef = doc(collectionRef(collectionKey), product.id.toString())
        batch.set(docRef, product)
    })

    await batch.commit()
    console.log('done')
}