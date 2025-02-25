export interface Product {
    name: string,
    price: number,
    imgSrc: string
}

export interface CartItem {
    name: string,
    quantity: number,
    totalPrice: number
}