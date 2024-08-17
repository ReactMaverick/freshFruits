import {createSlice} from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'storeWishlist',
  initialState: {
    wishlistItems: [],
  
  },
  reducers: {
    storeWishlistItems: (state, action) => {
      console.log("the action .payload is ", action.payload)
      state.wishlistItems = action.payload;
   
    },
  },
});

export const {storeWishlistItems} = wishListSlice.actions;
export default wishListSlice.reducer;
