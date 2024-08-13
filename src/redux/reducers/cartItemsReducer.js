import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'storeCart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    storeCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const {storeCartItems} = cartSlice.actions;
export default cartSlice.reducer;
