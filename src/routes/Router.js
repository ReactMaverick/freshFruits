/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '@/redux/reducers/authReducer';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { deviceWidth } from "../constants/constants";
import { colors } from "../constants/colors";
// import { PROFILE_AVATAR } from "../constants/images";
import { logout, selectUser } from '../redux/reducers/authReducer';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { useState } from 'react';
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import { styles } from './Style';
import WelcomeScreen from '../pages/WelcomeScreen/WelcomeScreen';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import OTP from '../pages/OTP/OTP';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Notification from '../pages/Notification/Notification';
import Wishlist from '../pages/Wishlist/Wishlist';
import MyOrder from '../pages/MyOrder/MyOrder';
import MyCart from '../pages/MyCart/MyCart';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';
import PaymentDetails from '../pages/PaymentDetails/PaymentDetails';
import PaymentSuccessful from '../pages/PaymentSuccessful/PaymentSuccessful';
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
// // import { IMAGE_BASE_URL } from "../values/api/url";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Settings from "../pages/Settings/Settings";
// import Question from "../pages/Question/Question";
// import Report from "../pages/Report/Report";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.BottomBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={styles.BottomBarBtn}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            {label === 'Home' && <Ionicons name={
              isFocused ? 'home' : 'home-outline'
            } size={20} color={isFocused ? '#0F89F4' : '#fff'} />}
            {label === 'Report' && <Ionicons name={
              isFocused ? 'arrow-trend-up' : 'arrow-trend-up'
            } size={20} color={isFocused ? '#0F89F4' : '#fff'} />}
            {label === 'Settings' && <Ionicons name={
              isFocused ? 'settings' : 'settings-outline'
            } size={20} color={isFocused ? '#0F89F4' : '#fff'} />}
            <Text style={{ color: isFocused ? '#0F89F4' : '#fff' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function HomeTabs() {

  const customScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'HomeTab') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
  })


  return (


    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>

  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Article" component={Home} />
    </Drawer.Navigator>
  );
}

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentSuccessful"
        component={PaymentSuccessful}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Report"
//         component={Report}
//         options={{
//           headerShown: false,
//         }}
//       />

//       <Stack.Screen
//         name="Question"
//         component={Question}
//         options={{
//           headerShown: false,
//         }}
//       />

//     </Stack.Navigator>
//   );
// };

export default function Router() {
  // const isUserLoggedIn = useSelector(isLoggedIn);
  // Change this to true to see the Home screen (@Suraj)
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);

  // console.log('isLoggedIn ==> ', isUserLoggedIn);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* {isUserLoggedIn ? <HomeStack /> : <LoginStack />} */}
      <LoginStack />
    </>
  );
}
