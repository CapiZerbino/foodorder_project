import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState: {cart: [], total: 0, discount: 0},
    reducers: {
        add: (state, action) => {
            const exist = state.cart.find((x) => x.product.id === action.payload.id);
            if (exist) {
                const newItem = state.cart.map((x) =>
                x.product.id === action.payload.id ? { 
                  ...exist, 
                  qty: exist.qty >= action.payload.quantity ? action.payload.quantity : exist.qty + 1} : x
              )
                    const newPrice = newItem.reduce((a, c) => a + c.qty * c.product.price,0);
                    state.cart = newItem;
                    state.total = newPrice;
                    state.discount = newPrice;
              } else {
                  const newItem = state.cart;
                  newItem.push({product: action.payload, qty: 1 });
                  const newPrice = newItem.reduce((a, c) => a + c.qty * c.product.price,0);
                  state.cart = newItem;
                  state.total = newPrice;
                  state.discount = newPrice;
            }
        },
        remove: (state, action) => {
            const exist = state.cart.find((x) => x.product.id === action.payload.id);
            if(exist === undefined){
            return;
            } else if (exist.qty === 1) {
                const newItem = state.cart.filter((x) => x.product.id !== action.payload.id);
                const newPrice = newItem.reduce((a, c) => a + c.qty * c.product.price,0)
                state.cart = newItem;
                state.total = newPrice;
                state.discount = newPrice;
            } else { 
                const newItem = state.cart.map((x) =>
                x.product.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x);
                const newPrice = newItem.reduce((a, c) => a + c.qty * c.product.price,0)
                state.cart = newItem;
                state.total = newPrice;
                state.discount = newPrice;
            }
        },
        calDiscount: (state, action) => {
            const itemsPrice = state.cart.reduce((a, c) => a + c.qty * c.product.price,0);
            var dis = 0;

            if(action.payload.type === "percentage"){
                dis =  (itemsPrice*action.payload.amount)/100;
            } else if(action.payload.type === "amount" && action.payload.amount <= itemsPrice){
                dis = action.payload.amount;
            } else if(action.payload.type === "amount" && action.payload.amount > itemsPrice){
                dis = itemsPrice - 1;
            }
            const totalPrice = itemsPrice - dis;
            state.discount = totalPrice;
            console.log(action.payload);
        } 
    }
})

export const {add, remove, calDiscount} = cartItemsSlice.actions;
export default configureStore({reducer: cartItemsSlice.reducer})