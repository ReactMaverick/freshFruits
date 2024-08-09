import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN_URL, REGISTER_URL} from '../../values/api/url';
import {postData} from '../../values/api/apiprovider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import {fcmToken} from '../../constants/constants';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, {rejectWithValue}) => {
    try {
      const response = await postData(REGISTER_URL, formData);
    
      if (!response.status) {
        console.log('response.message is', response.message);
        // showToast('error', response.message);
        return rejectWithValue(response.message);
      } else {
        // showToast('success ', response.message);

        console.log('response have the vaklue-', response);

        return response.data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (formDataLogin, {rejectWithValue}) => {
    try {
   
      const session_id = DeviceInfo.getDeviceId();
      // console.log(session_id)
      const {user_name, password} = formDataLogin;
      console.log('the dta to be endis ', {
        user_name,
        password,
        session_id,
        fcmToken,
      });
      const response = await postData(LOGIN_URL, {
        user_name,
        password,
        session_id,
        fcmToken,
      });
      if (!response.status) {
        // console.log('if response.message', response);
        // showToast('error', response.message);
        return rejectWithValue(response.message);
      } else {
        // showToast('success', response.message);
        // console.log(' else response.message', response);


        //0 as register user is registered many times so it gives an array
        console.log(response.userDetails[0])
        return response.userDetails[0];
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  user_id: null,
  user_name:null,
  user_email:null,
  user_phone:null,
  user_session_id:null,
  isLoggedIn: false,
  // next: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user_id=null,
      state.user_name=null,
      state.user_email=null,
      state.user_phone=null,
      state.user_session_id=null,
      state.isLoggedIn = false;
      state.next = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => {
      state.next = null;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      console.log('action.payload', action.payload);
      // state.user = action.payload;
      state.next = null;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.user_id = null;
    });
    builder.addCase(login.pending, (state, action) => {
      state.user_id = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      // console.log('action.payload fulfilled data is  ==> ', action.payload);
      state.user_id=action.payload.id,
      state.user_name=action.payload.first_name,
      state.user_email=action.payload.email,
      state.user_phone=action.payload.phone,
      state.user_session_id= DeviceInfo.getDeviceId();
      state.isLoggedIn=true
    });
    builder.addCase(login.rejected, (state, action) => {
      state.next = null;
    });
  },
});

export const selectUser_Id = state => state.authReducer.user_id;
export const selectUser_session_Id = state => state.authReducer.user_session_id;
export const selectUser_name = state => state.authReducer.user_name;
export const selectUser_email = state => state.authReducer.user_email;
export const selectUser_phone = state => state.authReducer.user_phone;
export const selectUser_isLoggedIn = state => state.authReducer.isLoggedIn;
// export const selectToken = state => state.authReducer.token;
export const selectNext = state => state.authReducer.next;
export const {logout} = authSlice.actions;
export default authSlice.reducer;
