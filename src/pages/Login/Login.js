import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Keyboard,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform} from '../../constants/constants';
import {FRESHFOODLOGO, SWITCHOFF, SWITCHON} from '../../constants/images';
import {FormInput} from 'react-native-formtastic';
import AntDesign from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState, useEffect, useRef} from 'react';
import {login} from '../../redux/reducers/authReducer';
import {useDispatch} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({
    user_name: '',
    password: '',
  });

  const resetErrors = () => {
    let updatedErrors = {
      user_name: '',
      password: '',
    };
    setErrors(updatedErrors);
  };

  const handleSubmit = () => {
    let updatedErrors = {};
    Keyboard.dismiss(); // Dissmisses the keyboard

    if (!formData.user_name) {
      updatedErrors.user_name = 'User Name is required';
      setErrors(updatedErrors);
      return;
    }
    if (!formData.password) {
      updatedErrors.password = 'password is required';
      setErrors(updatedErrors);
      return;
    } else if (formData.password.length < 6) {
      updatedErrors.password = 'Password should be at least 6 characters';
      setErrors(updatedErrors);
      return;
    } else {
      // setIsLoading(true);
    }
setLoader(true)
    dispatch(login(formData)) 
      .then(res => {
     
        if (res.type === 'auth/login/fulfilled') {
          navigation.navigate('Home');
        } else {
          // showToast('error', res.payload);
        }
      })
      .catch(err => {
        console.log('Error ==> ', err);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  const [isChecked, setIsChecked] = useState(false);
  const handlePress = () => {
    setIsChecked(!isChecked);
  };



  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
          <ScrollView>
      <SafeAreaView>
        <View style={styles.MainBox}>
          <Image style={styles.FreshFoodLogo} source={FRESHFOODLOGO} />
          <View style={styles.TitleBox}>
            <Text style={styles.LoginText}>Welcome Back</Text>
            <Text style={styles.LoginPara}>Login your account</Text>
          </View>

          <View style={styles.formBox}>
            <FormInput
              inputContainerStyle={styles.inputContainerStyle}
              textInputProps={{style: styles.textInputStyle}}
              labelTextStyle={styles.labelTextStyle}
              placeholderText="Email Or Mobile Number"
              value={formData.user_name}
              onTextChange={userName => {
                setFormData({
                  ...formData,
                  user_name: userName,
                });
                resetErrors();
              }}
              error={errors.user_name !== ''}
              errorText={errors.user_name}
              hideLabel
              leftIcon
              renderLeftIcon={() => (
                <Feather name="mail" style={styles.textInputIcon} />
              )}
            />
            <FormInput
              inputContainerStyle={styles.inputContainerStyle}
              textInputProps={{style: styles.textInputStyle}}
              labelTextStyle={styles.labelTextStyle}
              inputType="password"
              placeholderText="Password"
              value={formData.password}
              onTextChange={password => {
                setFormData({
                  ...formData,
                  password,
                });
                resetErrors();
              }}
              error={errors.password !== ''}
              errorText={errors.password}
              hideLabel
              hiddenText={!isPasswordVisible}
              leftIcon={isPasswordVisible ? 'unlock' : 'lock'}
              rightIcon={isPasswordVisible ? 'eye' : 'eye-off'}
              rightIconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
              renderLeftIcon={() => (
                <AntDesign
                  name={isPasswordVisible ? 'unlock' : 'lock'}
                  style={styles.textInputIcon}
                />
              )}
              renderRightIcon={() => (
                <Feather
                  name={isPasswordVisible ? 'eye' : 'eye-off'}
                  style={styles.textInputEyeIcon}
                />
              )}
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
              <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
              </Pressable>
            </View>

            {!loader ? (
              <>
                <Pressable
                  style={styles.loginBtn}
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <Text style={styles.loginBtnText}>Login</Text>
                </Pressable>

                <View style={styles.dontHaveAccount}>
                  <Text style={styles.dontHaveAccountText}>
                    Don't have an account
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Register');
                      setFormData({
                        user_name: '',
                        password: '',
                      });
                    }}>
                    <Text style={styles.registerText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
     <Text  style={{ margin: 70 }}>  <Loader/></Text>

            )}
          </View>
        </View>
      </SafeAreaView></ScrollView>
    </KeyboardAvoidingView>
  );
}
