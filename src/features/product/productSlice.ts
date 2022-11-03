import { createSlice } from "@reduxjs/toolkit";
import {Product} from "../product/productType";


type InitialState = {
    products: Product[]
    page : number
    loading : boolean
}


const initialState: InitialState = {
    products : [],
    page : 1,
    loading : false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        updateFilter : (state,action) =>{

        },
    }
})

export default productSlice.reducer