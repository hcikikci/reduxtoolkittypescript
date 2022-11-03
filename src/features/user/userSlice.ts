import { createSlice } from "@reduxjs/toolkit";


type User =  {
    id : number
    email : string
    name : string
}

type InitialState = {
    user : User | null
    message : string | null
    token : string | null
    loggedIn : boolean
    error : string | null
    loading : boolean
}


const initialState: InitialState = {
    user : null,
    message : null,
    token : null,
    loggedIn : false,
    error : null,
    loading : false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        updateFilter : (state,action) =>{

        },
    }
})

export default userSlice.reducer