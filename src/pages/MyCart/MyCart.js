import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform, showToast} from '../../constants/constants';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import MyCartItem from '../../components/MyCartItem/MyCartItem';
import {Divider} from 'react-native-elements';
import {FormInput} from 'react-native-formtastic';
import {useIsFocused} from '@react-navigation/native';
import {viewCartProducts} from '../../values/CartUrls';
import {useSelector} from 'react-redux';
import {
  selectUser_Id,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';

export default function MyCart({navigation}) {
  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  const isFocused = useIsFocused();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (isFocused) {
      // Screen is focused, perform actions here
      const fetchCartProducts = async () => {
        try {
          const products = await viewCartProducts(user_Id, userSession_Id);
          setCartProducts(products); // Set the cart products
        } catch (error) {
          // setError(error.message); // Set the error if any
        }
      };

      fetchCartProducts();
    }
  }, [isFocused]);
  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <Header
          pageName={'My Cart'}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={'TitleBox'}
        />
        {/* <Pressable  onPress={() => console.log('ok')  }>
          <Text>ghfg</Text>
        </Pressable> */}
        <View style={styles.MainBox}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.OrderBox}>
              {cartProducts.map(cartElements => (
                <MyCartItem item={cartElements} navigation={navigation} />
              ))}
              {/* <MyCartItem navigation={navigation} /> */}
            </View>
            <View style={styles.OrderSummaryBox}>
              <View style={styles.OrderSummary}>
                <Divider style={styles.divider} />
                <View style={styles.OrderSummaryRow}>
                  <Text style={styles.OrderSummaryLeftText}>Total items</Text>
                  <Text style={styles.OrderSummaryRightText}>03</Text>
                </View>
                <View style={styles.OrderSummaryRow}>
                  <Text style={styles.OrderSummaryLeftText}>Price</Text>
                  <Text style={styles.OrderSummaryRightText}>$55</Text>
                </View>
                <View style={styles.OrderSummaryRow}>
                  <Text style={styles.OrderSummaryLeftText}>Delivery</Text>
                  <Text style={styles.OrderSummaryRightText}>$3</Text>
                </View>
                <View style={styles.OrderSummaryRow}>
                  <Text style={styles.OrderSummaryLeftText}>Discount</Text>
                  <Text style={styles.OrderSummaryRightText}>$18</Text>
                </View>
                <View style={styles.TotalPriceRow}>
                  <Text style={styles.TotalPriceLeftText}>Total Price</Text>
                  <Text style={styles.TotalPriceRightText}>$55</Text>
                </View>
                <View style={styles.ApplyCouponBox}>
                  <FormInput
                    mainContainerStyle={styles.mainContainerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{style: styles.textInputStyle}}
                    hideLabel
                    placeholderText="Apply Coupon"
                  />
                </View>
                {/* Checkout button  */}
                <Pressable
                  style={styles.CheckoutBtn}
                  onPress={() => navigation.navigate('Checkout')}>
                  <Text style={styles.CheckoutBtnText}>Checkout</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
