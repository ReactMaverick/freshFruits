import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productList',
  initialState: {
    totalProductsList: [],
  },
  reducers: {
    storeProductsList: (state, action) => {
      state.totalProductsList = action.payload;
    },
  },
});

export const {storeProductsList} = productSlice.actions;
export default productSlice.reducer;
