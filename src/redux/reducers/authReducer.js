import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  next: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.next = null;
    },
  },

});

export const selectUser = state => state.authReducer.user;
export const selectToken = state => state.authReducer.token;
export const selectNext = state => state.authReducer.next;
export const { logout } = authSlice.actions;
export const isLoggedIn = state => state.authReducer.isLoggedIn;
export default authSlice.reducer;
