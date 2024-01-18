
const formatPrice = (price:number) => 
    Number(price).toFixed(2)

export const setPrice = (discount:number|null, price:number) => {
    if(discount) {
        const calcDiscount = Number(price - (price * (discount / 100)))
        return formatPrice(calcDiscount)
    }

    return formatPrice(price)
}