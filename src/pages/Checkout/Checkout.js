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


export default function Checkout({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        < Header
          navigation={navigation}
          leftContent={'backBtn'}
          MiddleContent={'pageTitle'}
          rightContent={'blankBox'}
          BGCOLOR={'transparent'}
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
            <View style={styles.CheckOutButtonBox}>
              <Pressable style={styles.CheckOutButton}>
                <Text style={styles.CheckOutButtonText}>Checkout</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
