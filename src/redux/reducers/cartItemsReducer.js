import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'storeCart',
  initialState: {
    cartItems: [],
    priceOfItems:0
  },
  reducers: {
    storeCartItems: (state, action) => {
    
      state.cartItems = action.payload;
    //   state.priceOfItems=action.payload.reduce((sum, item) => {
    //     return sum + Number(item.final_price); 
    // }, 0);
    },
    
  },
});

export const {storeCartItems} = cartSlice.actions;
export default cartSlice.reducer;
