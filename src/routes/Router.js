/* eslint-disable react/react-in-jsx-scope */
import {useState, useCallback, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
// import { PROFILE_AVATAR } from "../constants/images";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import {styles} from './Style';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent/CustomDrawerContent';
import {useSelector} from 'react-redux';
import {selectUser_isLoggedIn} from '../redux/reducers/authReducer';
import PopularFruitsSlider from '../components/PopularFruitsSlider/PopularFruitsSlider';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const scale = useSharedValue(1);
  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  const startAnimations = useCallback(() => {
    scale.value = 0; // Reset scale
    scale.value = withTiming(1, {duration: 900});
  }, [scale]);
  return (
    <View style={styles.BottomBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
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
          startAnimations();
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
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}>
            {label === 'Home' && (
              <Animated.View
                style={[
                  styles.Iconbox,
                  isFocused ? animatedIconStyle : {},
                  {
                    backgroundColor: isFocused
                      ? 'rgba(124, 186, 30, 0.2)'
                      : 'transparent',
                  },
                ]}>
                <Ionicons
                  name={isFocused ? 'home' : 'home-outline'}
                  size={20}
                  color={isFocused ? '#7CBA1E' : '#72776C'}
                />
              </Animated.View>
            )}
            {label === 'Wishlist' && (
              <Animated.View
                style={[
                  styles.Iconbox,
                  isFocused ? animatedIconStyle : {},
                  {
                    backgroundColor: isFocused
                      ? 'rgba(124, 186, 30, 0.2)'
                      : 'transparent',
                  },
                ]}>
                <FontAwesome
                  name={isFocused ? 'heart' : 'heart-o'}
                  size={20}
                  color={isFocused ? '#7CBA1E' : '#72776C'}
                />
              </Animated.View>
            )}
            {label === 'My Order' && (
              <Animated.View
                style={[
                  styles.Iconbox,
                  isFocused ? animatedIconStyle : {},
                  {
                    backgroundColor: isFocused
                      ? 'rgba(124, 186, 30, 0.2)'
                      : 'transparent',
                  },
                ]}>
                <Ionicons
                  name={isFocused ? 'settings' : 'settings-outline'}
                  size={20}
                  color={isFocused ? '#7CBA1E' : '#72776C'}
                />
              </Animated.View>
            )}
            {label === 'Cart' && (
              <Animated.View
                style={[
                  styles.Iconbox,
                  isFocused ? animatedIconStyle : {},
                  {
                    backgroundColor: isFocused
                      ? 'rgba(124, 186, 30, 0.2)'
                      : 'transparent',
                  },
                ]}>
                <Ionicons
                  name={isFocused ? 'bag' : 'bag-outline'}
                  size={20}
                  color={isFocused ? '#7CBA1E' : '#72776C'}
                />
              </Animated.View>
            )}
            <Animated.Text
              style={[
                styles.LabelText,
                isFocused ? animatedIconStyle : {},
                {color: isFocused ? '#7CBA1E' : '#72776C'},
              ]}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function HomeTabs() {
  const customScreenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'HomeTab') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Wishlist') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name === 'My Order') {
        iconName = focused ? 'settings' : 'settings-outline';
      } else if (route.name === 'Cart') {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
  });

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarLabel: 'Wishlist',
        }}
      />
      <Tab.Screen
        name="My Order"
        component={MyOrder}
        options={{
          headerShown: false,
          tabBarLabel: 'My Order',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={MyCart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
        }}
      />
    </Tab.Navigator>
  );
}

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      /> */}
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
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      /> */}
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
        name="popularFruits"
        component={PopularFruitsSlider}
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

      {/* <Stack.Screen
        name="Question"
        component={Question}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  const isUserLoggedIn = useSelector(selectUser_isLoggedIn);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />} // Use custom drawer content
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      {/* {isUserLoggedIn ? (
        <Drawer.Screen name="HomeStack" component={HomeStack} />
      ) : (
        <Drawer.Screen name="LoginStack" component={LoginStack} />
      )} */}
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="MyOrder" component={MyOrder} />
      <Drawer.Screen name="MyCart" component={MyCart} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="Checkout" component={Checkout} />
      <Drawer.Screen name="PaymentDetails" component={PaymentDetails} />
      <Drawer.Screen name="PaymentSuccessful" component={PaymentSuccessful} />
    </Drawer.Navigator>
  );
};

export default function Router() {
  const UserLoggedIn = useSelector(selectUser_isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {UserLoggedIn ? <MyDrawer /> : <LoginStack />}
    </>
  );
}
