import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const exist = state.find((x) => x.product.id === action.payload.id);
            if (exist) {
                return (
                    state.map((x) =>
                    x.product.id === action.payload.id ? { 
                      ...exist, 
                      qty: exist.qty >= action.payload.quantity ? action.payload.quantity : exist.qty + 1} : x
                  )
                )
              } else {
                state.push({product: action.payload, qty: 1 });  
            }
        },
        remove: (state, action) => {
            const exist = state.find((x) => x.product.id === action.payload.id);
            if(exist === undefined){
            return;
            } else if (exist.qty === 1) {
                return state.filter((x) => x.product.id !== action.payload.id);
            } else { 
                return state.map((x) =>
                    x.product.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
                    )
            }
        } 
    }
})

export const {add, remove} = cartItemsSlice.actions;
export default configureStore({reducer: cartItemsSlice.reducer})