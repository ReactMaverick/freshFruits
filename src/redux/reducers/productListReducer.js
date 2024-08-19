import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productList',
  initialState: {
    newArrivedProductsList: [],
    topSellerProductsList:[]
  },
  reducers: {
    storeNewArrivedList: (state, action) => {
      state.newArrivedProductsList = action.payload;
    },
    storeTopSellerList:(state, action) => {
      state.topSellerProductsList = action.payload;
    },
  },
});

export const {storeNewArrivedList,storeTopSellerList} = productSlice.actions;
export default productSlice.reducer;
