import { configureStore} from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import filterReducer from '../features/cart/cartSlice';
import orderReducer from '../features/order/orderSlice';
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";

const store = configureStore({
    reducer : {
        product : productReducer,
        order : orderReducer,
        user : userReducer,
        cart : cartReducer,
        filter : filterReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch