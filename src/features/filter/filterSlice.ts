import { createSlice } from "@reduxjs/toolkit";
import {Color, Brand, Size, Price, Sort, Category} from "./filterTypes"

type Nullable<T> = T | null;

type InitialState = {
    color_list: Color[]
    brand_list : Brand[]
    size_list : Size[]
    category_list : Category[]
    brand : Nullable<Brand>
    color : Nullable<Color>
    price : Nullable<Price>
    size : Nullable<Size>
    sort : Nullable<Sort>
}


const initialState: InitialState = {
    color_list : [],
    brand_list : [],
    size_list : [],
    category_list : [],
    brand : null,
    color : null,
    price : null,
    size : null,
    sort : null
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        updateFilter : (state,action) =>{

        },
    }
})

export default filterSlice.reducer