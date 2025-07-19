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
import { VISA } from '../../constants/images';
import { FormInput } from 'react-native-formtastic';
import { colors } from '../../constants/colors';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function PaymentDetails({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        < Header
          pageName={"Payment Details"}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={"TitleBox"}
        />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.MainBox}>
            <View style={styles.AddressBox}>
              <Pressable style={styles.OrderTitleBox}>
                <Ctext style={styles.OrderTitle}>+Add new card</Ctext>
              </Pressable>
              <View style={styles.PaymentMethodUl}>
                <View style={styles.PaymentMethodLi}>
                  <View style={styles.PaymentMethodLiInner}>
                    <Image source={VISA} style={styles.PaymentMethodLiImage} />
                    <Ctext style={styles.PaymentMethodText}>Visa Card</Ctext>
                  </View>
                  <Ctext style={styles.PaymentMethodText}>$55</Ctext>
                </View>
              </View>
              <View style={styles.CardForm}>
                <FormInput
                  mainContainerStyle={styles.MainContainer}
                  inputContainerStyle={styles.inputContainerStyle}
                  textInputProps={{ style: styles.textInputStyle }}
                  labelTextStyle={styles.labelTextStyle}
                  labelTextColor={colors.HeadingColor}
                  placeholderText="XXXX XXXX XXxx 2794"
                  labelText='Card Number'
                />
                <View style={styles.CardFormRow}>
                  <FormInput
                    mainContainerStyle={styles.MainContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    labelTextStyle={styles.labelTextStyle}
                    labelTextColor={colors.HeadingColor}
                    placeholderText="DD/YY"
                    labelText='DD/YY'
                  />
                  <FormInput
                    hiddenText
                    mainContainerStyle={styles.MainContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    labelTextStyle={styles.labelTextStyle}
                    labelTextColor={colors.HeadingColor}
                    placeholderText="xxxxx"
                    labelText='CVV'
                  />
                </View>
                <FormInput
                  mainContainerStyle={styles.MainContainer}
                  inputContainerStyle={styles.inputContainerStyle}
                  textInputProps={{ style: styles.textInputStyle }}
                  labelTextStyle={styles.labelTextStyle}
                  labelTextColor={colors.HeadingColor}
                  placeholderText="Card Holder Name"
                  labelText='Card Holder Name'
                />
              </View>
            </View>

            <View style={styles.AddressBox}>
              <Pressable style={styles.OrderTitleBox}>
                <Ctext style={styles.OrderTitle}>+Add new card</Ctext>
              </Pressable>
              <View style={styles.PaymentMethodUl}>
                <View style={styles.PaymentMethodLi}>
                  <View style={styles.PaymentMethodLiInner}>
                    <Image source={VISA} style={styles.PaymentMethodLiImage} />
                    <Ctext style={styles.PaymentMethodText}>Visa Card</Ctext>
                  </View>
                  <Ctext style={styles.PaymentMethodText}>$55</Ctext>
                </View>
              </View>
              <View style={styles.CardForm}>
                <FormInput
                  mainContainerStyle={styles.MainContainer}
                  inputContainerStyle={styles.inputContainerStyle}
                  textInputProps={{ style: styles.textInputStyle }}
                  labelTextStyle={styles.labelTextStyle}
                  labelTextColor={colors.HeadingColor}
                  placeholderText="XXXX XXXX XXxx 2794"
                  labelText='Card Number'
                />
                <View style={styles.CardFormRow}>
                  <FormInput
                    mainContainerStyle={styles.MainContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    labelTextStyle={styles.labelTextStyle}
                    labelTextColor={colors.HeadingColor}
                    placeholderText="DD/YY"
                    labelText='DD/YY'
                  />
                  <FormInput
                    hiddenText
                    mainContainerStyle={styles.MainContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    labelTextStyle={styles.labelTextStyle}
                    labelTextColor={colors.HeadingColor}
                    placeholderText="xxxxx"
                    labelText='CVV'
                  />
                </View>
                <FormInput
                  mainContainerStyle={styles.MainContainer}
                  inputContainerStyle={styles.inputContainerStyle}
                  textInputProps={{ style: styles.textInputStyle }}
                  labelTextStyle={styles.labelTextStyle}
                  labelTextColor={colors.HeadingColor}
                  placeholderText="Card Holder Name"
                  labelText='Card Holder Name'
                />
              </View>
            </View>

            <View style={styles.AddressBox}>
              <Pressable style={styles.OrderTitleBox}>
                <Ctext style={styles.OrderTitle}>+Add new card</Ctext>
              </Pressable>
              <View style={styles.PaymentMethodUl}>
                <View style={styles.PaymentMethodLi}>
                  <View style={styles.PaymentMethodLiInner}>
                    <Image source={VISA} style={styles.PaymentMethodLiImage} />
                    <Ctext style={styles.PaymentMethodText}>Visa Card</Ctext>
                  </View>
                  <Ctext style={styles.PaymentMethodText}>$55</Ctext>
                </View>
              </View>
              <View style={styles.CardForm}>
                <FormInput
                  mainContainerStyle={styles.MainContainer}
                  inputContainerStyle={styles.inputContainerStyle}
                  textInputProps={{ style: styles.textInputStyle }}
                  labelTextStyle={styles.labelTextStyle}
                  labelTextColor={colors.HeadingColor}
                  placeholderText="XXXX XXXX XXxx 2794"
                  labelText='Card Number'
                />
                <View style={styles.CardFormRow}>
                  <FormInput
                    mainContainerStyle={styles.MainContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    labelTextStyle={styles.labelTextStyle}
                    labelTextColor={colors.HeadingColor}
                    placeholderText="DD/YY"
                    labelText='DD/YY'
                  />
                  <FormInput
                    hiddenText
                    mainContainerStyle={styles.MainContainer}
                    inputContainerStyle={styles.inputContainerStyle}
                    textInputProps={{ style: styles.textInputStyle }}
                    labelTextStyle={styles.labelTextStyle}
                    labelTextColor={colors.HeadingColor}
                    placeholderText="xxxxx"
                    labelText='CVV'
                  />
                </View>
                <FormInput
                  mainContainerStyle={styles.MainContainer}
                  inputContainerStyle={styles.inputContainerStyle}
                  textInputProps={{ style: styles.textInputStyle }}
                  labelTextStyle={styles.labelTextStyle}
                  labelTextColor={colors.HeadingColor}
                  placeholderText="Card Holder Name"
                  labelText='Card Holder Name'
                />
              </View>
            </View>
          </View>
        </ScrollView>
        {/* Pay Now button  */}
        <View style={styles.PayNowBox}>
          <Pressable style={styles.CheckOutButton}
            onPress={() => navigation.navigate('Checkout')}
          >
            <Ctext style={styles.CheckOutButtonText}>Pay Now $55</Ctext>
          </Pressable>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
