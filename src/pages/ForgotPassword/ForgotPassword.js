import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { FRESHFOODLOGO, SWITCHOFF, SWITCHON, } from '../../constants/images';
import { FormInput } from 'react-native-formtastic';
import AntDesign from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect, useRef } from 'react';

export default function ForgotPassword({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <View style={styles.MainBox}>

          <View style={styles.TitleBox}>
            <Text style={styles.LoginText}>Forgot Password</Text>
            <Text style={styles.LoginPara}>Please enter your email or mobile no.
              to reset your password</Text>
          </View>

          <View style={styles.formBox}>
            <FormInput
              inputContainerStyle={styles.inputContainerStyle}
              textInputProps={{ style: styles.textInputStyle }}
              labelTextStyle={styles.labelTextStyle}
              placeholderText="Email/ Mobile no."
              hideLabel
            />
            <Pressable style={styles.loginBtn}
              onPress={() => navigation.navigate('OTP')} >
              <Text style={styles.loginBtnText}>Send OTP</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
