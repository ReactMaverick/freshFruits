import {createSlice} from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'storeWishlist',
  initialState: {
    wishlist_items: [],
   success:true
  
  },
  reducers: {
    storeWishlistItems: (state, action) => {
      // console.log("the action .payload is ", action.payload)
    if(action.payload.success){
      state.wishlist_items = action.payload.wishlist;
    }
      state.success = action.payload.success;
    },
  },
});

export const {storeWishlistItems} = wishListSlice.actions;
export default wishListSlice.reducer;
