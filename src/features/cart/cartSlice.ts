import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../product/productType";

type InitialState = {
    products: Product[]
    vatRatio : number
    shippingFixedPrice : number
    vatTotalPrice : number
    subTotalPrice : number
    totalPrice : number
}

const initialState: InitialState = {
    products: [],
    vatRatio : 0.21,
    shippingFixedPrice : 5.99,
    vatTotalPrice : 0,
    subTotalPrice : 0,
    totalPrice : 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart : (state,action : PayloadAction<Product>) =>{

        },
    }
})

export default cartSlice.reducer