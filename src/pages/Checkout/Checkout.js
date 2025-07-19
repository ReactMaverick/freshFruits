import {
  Image,
  Pressable,
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
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Checkout({ navigation }) {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
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
              <Ctext style={styles.OrderTitle}>Shipping Address</Ctext>
            </View>
            <View style={styles.OrderAddressBox}>
              <AddressBox />
            </View>
            <View style={styles.OrderTitleBox}>
              <Image source={ORDERBOOK} style={styles.OrderTitleImage} />
              <Ctext style={styles.OrderTitle}>Order Summary</Ctext>
            </View>
            {/* <OrderSummary /> */}
            <OrderSummary />
            <View style={styles.OrderTitleBox}>
              <Image source={WALLET1} style={styles.OrderTitleImage} />
              <Ctext style={styles.OrderTitle}>Payment Method</Ctext>
            </View>
            <PaymentMethod />
          </ScrollView>
          <View style={styles.CheckOutButtonBox}>
            <Pressable style={styles.CheckOutButton}
              onPress={() => navigation.navigate('PaymentDetails')}>
              <Ctext style={styles.CheckOutButtonText}>Pay Now</Ctext>
            </Pressable>
          </View>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
