import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform, showToast } from '../../constants/constants';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import MyCartItem from '../../components/MyCartItem/MyCartItem';
import { Divider } from 'react-native-elements';
import { FormInput } from 'react-native-formtastic';
import { useIsFocused } from '@react-navigation/native';
import { viewCartProducts } from '../../values/CartUrls';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser_Id,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import { storeCartItems } from '../../redux/reducers/cartItemsReducer';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyCart({ navigation }) {
  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  const isFocused = useIsFocused();
  const [cartProducts, setCartProducts] = useState([]);
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalCartPrice = useSelector(state => state.cart.priceOfItems);


  console.log("the itemn in redux is ---", cartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      console.log("fetching cart poducrts")
      console.log('the cart total is ', totalCartPrice)
      const fetchCartProducts = async () => {
        try {
          const products = await viewCartProducts(user_Id, userSession_Id);
          dispatch(storeCartItems(products))
          setCartProducts([...products])
          // console.log("the cart product is ",products[0].customers_basket_quantity)
          // console.log("the response is --",products)
        } catch (error) {
          console.log("error occureed in view cart --", error)
        }
      };
      // fetchCartProducts();
    }
  }, [isFocused]);



  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        <Header
          pageName={'My Cart'}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={'TitleBox'}
        />
        {/* <Pressable  onPress={() => {
        console.log("the clicked occur") ;
        console.log("the value in redux is ",cartItems) 
        }}>
          <Ctext>he.lo</Ctext>
        </Pressable> */}
        <View style={styles.MainBox}>
          <ScrollView contentContainerStyle={styles.ScrollView}>
            {cartItems.length > 0 ? <View style={styles.OrderBox}>
              {cartItems.map(cartElements => (
                <MyCartItem key={cartElements.products_id} item={cartElements} navigation={navigation} />
              ))}
              {/* <MyCartItem navigation={navigation} /> */}
            </View> : <Ctext style={styles.EmptyText}>It is Currently Empty</Ctext>}




            {cartItems.length > 0 && <View style={styles.OrderSummaryBox}>
              <View style={styles.OrderSummary}>
                <Divider style={styles.divider} />
                <View style={styles.OrderSummaryRow}>
                  <Ctext style={styles.OrderSummaryLeftText}>Total items</Ctext>
                  <Ctext style={styles.OrderSummaryRightText}>{cartItems.length}</Ctext>
                </View>
                <View style={styles.OrderSummaryRow}>
                  <Ctext style={styles.OrderSummaryLeftText}>Price</Ctext>
                  <Ctext style={styles.OrderSummaryRightText}>${totalCartPrice}</Ctext>
                </View>
                <View style={styles.OrderSummaryRow}>
                  <Ctext style={styles.OrderSummaryLeftText}>Delivery</Ctext>
                  <Ctext style={styles.OrderSummaryRightText}>$3</Ctext>
                </View>
                <View style={styles.OrderSummaryRow}>
                  <Ctext style={styles.OrderSummaryLeftText}>Discount</Ctext>
                  <Ctext style={styles.OrderSummaryRightText}>$18</Ctext>
                </View>
                <View style={styles.TotalPriceRow}>
                  <Ctext style={styles.TotalPriceLeftText}>Total Price</Ctext>
                  <Ctext style={styles.TotalPriceRightText}>${ }</Ctext>
                </View>
                <View style={styles.ApplyCouponBox}>
                  <FormInput
                    mainContainerStyle={styles.mainContainerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    hideLabel
                    placeholderText="Apply Coupon"
                  />
                </View>
                {/* Checkout button  */}
                <Pressable
                  style={styles.CheckoutBtn}
                  onPress={() => navigation.navigate('Checkout')}>
                  <Ctext style={styles.CheckoutBtnText}>Checkout</Ctext>
                </Pressable>
              </View>
            </View>}
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
