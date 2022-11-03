import { createSlice } from "@reduxjs/toolkit";
import {Product} from "../product/productType";

type OrderProduct = Product & {
    quantity: number
    totalPrice : number
};

type Order =  {
    id : number
    total : number
    tax : number
    subtotal : number
    status : string
    products : OrderProduct[]
    shippingPrice : number
}

type InitialState = {
    orders: Order[]
    total : number
    paid : number
    unpaid : number
    new_order : Order | null
    loading : boolean
}


const initialState: InitialState = {
    orders : [],
    total : 0,
    paid : 0,
    unpaid : 0,
    new_order : null,
    loading : false
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        updateFilter : (state,action) =>{

        },
    }
})

export default orderSlice.reducer