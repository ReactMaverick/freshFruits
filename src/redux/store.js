import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import authReducer from './reducers/authReducer';
import loaderReducer from './reducers/loaderReducer';
import cartItemsReducer from './reducers/cartItemsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  authReducer: persistReducer(persistConfig, authReducer),
  loader:loaderReducer,
  cart:cartItemsReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);