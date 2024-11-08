import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { FRESHFOODLOGO, SWITCHOFF, SWITCHON } from '../../constants/images';
import { FormInput } from 'react-native-formtastic';
import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { FORGOT_PASSWORD_URL } from '../../values/api/url';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';



export default function ForgotPassword({ navigation }) {
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState({email: '' });
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const resetErrors = () => {
    let updatedErrors = {email: ''};
    setErrors(updatedErrors);
  }

  // const handleForgetPassword = async () => {
  //   Keyboard.dismiss();
  //   if (!emailPhone) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Validation Error',
  //       text2: 'Please enter your email or phone number.',
  //     });
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append("email_phone", emailPhone);

  //     const response = await fetch(FORGOT_PASSWORD_URL, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const result = await response.json();

  //     if (response.ok && result.status) {
  //       Toast.show({
  //         type: 'success',
  //         text1: 'Success',
  //         text2: result.message || 'OTP sent successfully!',
  //       });
  //       navigation.navigate('OTP', { otp: result.forget_password_otp });
  //     } else {
  //       Toast.show({
  //         type: 'error',
  //         text1: 'Error',
  //         text2: result.error || 'Failed to send OTP. Try again.',
  //       });
  //     }
  //   } catch (error) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Network Error',
  //       text2: 'Please check your internet connection.',
  //     });
  //   }
  // };
  const handleForgetPassword = async () => {
    setErrors("");
    setLoading(true);
    Keyboard.dismiss();
  
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!email) {
      setErrors("Email is required");
      Toast.show({
        type: "error",
        text1: "Validation Error",
        text2: "Email is required"
      });
      setLoading(false);
      return;
    } else if (!isEmail.test(email)) {
      setErrors("Please enter a valid Email");
      Toast.show({
        type: "error",
        text1: "Validation Error",
        text2: "Please enter a valid Email"
      });
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://194.163.131.163/greenway/public/api/forgetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log('response',response.ok);
      
  
      const result = await response.json();
       console.log('result',result);
      setLoading(false);
  
      if (response.ok ) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Please check your email",
        });
        navigation.navigate("OTP", { email });
      } 
      // else if (result.message) {
      //   setErrors(result.message);
      //   Toast.show({
      //     type: "error",
      //     text1: "Error",
      //     text2: result.message,
      //   });
      // }
       else {
        setErrors("Something went wrong. Please try again");
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong. Please try again",
        });
      }
    } catch (error) {
      setErrors("Network Error");
      Toast.show({
        type: "error",
        text1: "Network Error",
        text2: "Network Error",
      });
      setLoading(false);
    }
  };
  

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <View style={styles.MainBox}>
          <View style={styles.TitleBox}>
            <Text style={styles.LoginText}>Forgot Password</Text>
            <Text style={styles.LoginPara}>Please enter your email or phone to reset your password</Text>
          </View>

          <View style={styles.formBox}>
          <FormInput
                inputContainerStyle={styles.inputContainerStyle}
                textInputProps={{style: styles.textInputStyle}}
                labelTextStyle={styles.labelTextStyle}
                placeholderText="Email"
                value={email}
                // onTextChange={email => {
                //   setFormData({
                //     ...formData,
                //     email,
                //   });
                //   resetErrors();
                // }}
                onTextChange={setEmail}
                error={errors !== ''}
                errorText={errors}
                hideLabel
                // leftIcon
                // renderLeftIcon={() => (
                //   <Feather name="mail" style={styles.textInputIcon} />
                // )}
              />
            <Pressable style={styles.loginBtn} onPress={handleForgetPassword}>
              <Text style={styles.loginBtnText}>Send OTP</Text>
            </Pressable>
          </View>
        </View>
        <Toast />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
