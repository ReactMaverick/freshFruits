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
import { VISA } from '../../constants/images';
import { FormInput } from 'react-native-formtastic';
import { colors } from '../../constants/colors';


export default function PaymentDetails({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
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
                <Text style={styles.OrderTitle}>+Add new card</Text>
              </Pressable>
              <View style={styles.PaymentMethodUl}>
                <View style={styles.PaymentMethodLi}>
                  <View style={styles.PaymentMethodLiInner}>
                    <Image source={VISA} style={styles.PaymentMethodLiImage} />
                    <Text style={styles.PaymentMethodText}>Visa Card</Text>
                  </View>
                  <Text style={styles.PaymentMethodText}>$55</Text>
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
                <Text style={styles.OrderTitle}>+Add new card</Text>
              </Pressable>
              <View style={styles.PaymentMethodUl}>
                <View style={styles.PaymentMethodLi}>
                  <View style={styles.PaymentMethodLiInner}>
                    <Image source={VISA} style={styles.PaymentMethodLiImage} />
                    <Text style={styles.PaymentMethodText}>Visa Card</Text>
                  </View>
                  <Text style={styles.PaymentMethodText}>$55</Text>
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
                <Text style={styles.OrderTitle}>+Add new card</Text>
              </Pressable>
              <View style={styles.PaymentMethodUl}>
                <View style={styles.PaymentMethodLi}>
                  <View style={styles.PaymentMethodLiInner}>
                    <Image source={VISA} style={styles.PaymentMethodLiImage} />
                    <Text style={styles.PaymentMethodText}>Visa Card</Text>
                  </View>
                  <Text style={styles.PaymentMethodText}>$55</Text>
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

            {/* Pay Now button  */}
            <View style={styles.PayNowBox}>
              <Pressable style={styles.CheckOutButton}
                onPress={() => navigation.navigate('Checkout')}
              >
                <Text style={styles.CheckOutButtonText}>Pay Now $55</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
