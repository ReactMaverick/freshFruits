import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import Header from '../../components/Header/Header';
import { ORDERBOOK, TRUCK, WALLET1 } from '../../constants/images';
import AddressBox from '../../components/AddressBox/AddressBox';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import { useSelector } from 'react-redux';


export default function Checkout({ navigation }) {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        < Header
          pageName={"Checkout"}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={"TitleBox"}
        />
        <View style={styles.MainBox}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.OrderTitleBox}>
              <Image source={TRUCK} style={styles.OrderTitleImage} />
              <Text style={styles.OrderTitle}>Shipping Address</Text>
            </View>
            <View style={styles.OrderAddressBox}>
              <AddressBox />
            </View>
            <View style={styles.OrderTitleBox}>
              <Image source={ORDERBOOK} style={styles.OrderTitleImage} />
              <Text style={styles.OrderTitle}>Order Summary</Text>
            </View>
            {/* <OrderSummary /> */}
            <OrderSummary />
            <View style={styles.OrderTitleBox}>
              <Image source={WALLET1} style={styles.OrderTitleImage} />
              <Text style={styles.OrderTitle}>Payment Method</Text>
            </View>
            <PaymentMethod />
          </ScrollView>
          <View style={styles.CheckOutButtonBox}>
            <Pressable style={styles.CheckOutButton}
              onPress={() => navigation.navigate('PaymentDetails')}>
              <Text style={styles.CheckOutButtonText}>Pay Now</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
