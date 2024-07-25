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

export default function Login({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <View style={styles.MainBox}>
          <Image
            style={styles.FreshFoodLogo}
            source={FRESHFOODLOGO}
          />
          <View style={styles.TitleBox}>
            <Text style={styles.LoginText}>Welcome Back</Text>
            <Text style={styles.LoginPara}>Login your account</Text>
          </View>

          <View style={styles.formBox}>
            <FormInput
              inputContainerStyle={styles.inputContainerStyle}
              textInputProps={{ style: styles.textInputStyle }}
              labelTextStyle={styles.labelTextStyle}
              placeholderText="Email/ Mobile no."
              hideLabel
              leftIcon
              renderLeftIcon={() => <Feather name="mail" style={styles.textInputIcon} />}
            />
            <FormInput
              inputContainerStyle={styles.inputContainerStyle}
              textInputProps={{ style: styles.textInputStyle }}
              labelTextStyle={styles.labelTextStyle}
              inputType="password"
              hideLabel
              hiddenText
              placeholderText="Password"
              leftIcon
              renderLeftIcon={() => <AntDesign name="lock" style={styles.textInputIcon} />}
              rightIcon
              renderRightIcon={() => <Feather name="eye-off" style={styles.textInputEyeIcon} />}
            />
            <View style={styles.RowBox}>
              {/* customCheckBox with images */}
              <Pressable style={styles.customCheckBox} onPress={handlePress}>
                <Image
                  style={styles.checkboxImage}
                  source={isChecked ? SWITCHON : SWITCHOFF}
                />
                <Text style={styles.customCheckBoxText}>Remember me</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
              </Pressable>
            </View>

            <Pressable style={styles.loginBtn}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.loginBtnText}>Login</Text>
            </Pressable>

            <View style={styles.dontHaveAccount}>
              <Text style={styles.dontHaveAccountText}>Don't have an account</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
