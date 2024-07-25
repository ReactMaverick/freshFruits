import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
export default function App() {

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
