import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import './gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { persistor, store } from './src/redux/store';
import Toast from 'react-native-toast-message';
import { KeyboardProvider } from 'react-native-keyboard-controller';
export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <KeyboardProvider>
            <Router />
          </KeyboardProvider>
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  );
}
