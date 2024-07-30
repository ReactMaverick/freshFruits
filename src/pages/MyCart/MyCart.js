import {
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
import MyCartItem from '../../components/MyCartItem/MyCartItem';
import { Divider } from 'react-native-elements';
import { FormInput } from 'react-native-formtastic';


export default function MyCart({ navigation }) {

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
            <View style={styles.OrderBox}>
              <MyCartItem navigation={navigation} />
              <MyCartItem navigation={navigation} />
              <MyCartItem navigation={navigation} />
              <MyCartItem navigation={navigation} />
            </View>
          </ScrollView>
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
                  textInputProps={{ style: styles.textInputStyle }}
                  hideLabel
                  placeholderText="Apply Coupon"
                />
              </View>
              {/* Checkout button  */}
              <Pressable style={styles.CheckoutBtn}
                onPress={() => navigation.navigate('Checkout')}
              >
                <Text style={styles.CheckoutBtnText}>Checkout</Text>
              </Pressable>
            </View>
          </View>
        </View>

      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
