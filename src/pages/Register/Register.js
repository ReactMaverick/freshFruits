import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform} from '../../constants/constants';
import {
  FACEBOOK,
  FRESHFOODLOGO,
  GOOGLE,
  SWITCHOFF,
  SWITCHON,
} from '../../constants/images';
import {FormInput} from 'react-native-formtastic';
import AntDesign from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {register} from '../../redux/reducers/authReducer';
import {useDispatch} from 'react-redux';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });

  const resetErrors = () => {
    let updatedErrors = {
      fullname: '',
      email: '',
      phone: '',
      password: '',
    };
    setErrors(updatedErrors);
  };

  const handleSubmit = () => {
    let updatedErrors = {};
    Keyboard.dismiss(); // Dissmisses the keyboard

    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      formData.email,
    );
    const isMobile = /^[0-9]{10}$/.test(formData.phone);

    if (!formData.fullname) {
      updatedErrors.fullname = 'Name is required';
      setErrors(updatedErrors);
      return;
    } else if (!formData.phone) {
      console.log('phone', errors);
      updatedErrors.phone = 'Mobile No. is required';
      setErrors(updatedErrors);
      return;
    } else if (!isMobile) {
      updatedErrors.phone = 'Please enter a valid 10-digit mobile number';
      setErrors(updatedErrors);
      return;
    } else if (!formData.email) {
      console.log('email', errors);
      updatedErrors.email = 'Email is required';
      setErrors(updatedErrors);
      return;
    } else if (!isEmail) {
      updatedErrors.email = 'Please enter a valid Email';
      setErrors(updatedErrors);
      return;
    } else if (!formData.password) {
      updatedErrors.password = 'Password is required';
      setErrors(updatedErrors);
      return;
    } else if (formData.password.length < 6) {
      updatedErrors.password = 'Password should be at least 6 characters';
      setErrors(updatedErrors);
      return;
    } else {
      // setIsLoading(true);
    }
    dispatch(register(formData))
      .then(res => {
        if (res.type === 'auth/register/fulfilled') {
          navigation.navigate('Login');
        } else {
          // showToast('error', res.payload);
        }
      })
      .catch(err => {
        console.log('\n');
        console.log('\n');
        console.log('Error ==> ', err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  //check or uncheck
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
              <Text style={styles.LoginText}>Created Account</Text>
              <Text style={styles.LoginPara}>Sign up to get started!</Text>
            </View>

            <View style={styles.formBox}>
              <FormInput
                inputContainerStyle={styles.inputContainerStyle}
                textInputProps={{style: styles.textInputStyle}}
                labelTextStyle={styles.labelTextStyle}
                placeholderText="Name"
                value={formData.fullname}
                onTextChange={fullname => {
                  setFormData({
                    ...formData,
                    fullname,
                  });
                  resetErrors();
                }}
                error={errors.fullname !== ''}
                errorText={errors.fullname}
                hideLabel
                leftIcon
                renderLeftIcon={() => (
                  <Feather name="user" style={styles.textInputIcon} />
                )}
              />
              <FormInput
                inputContainerStyle={styles.inputContainerStyle}
                textInputProps={{style: styles.textInputStyle}}
                labelTextStyle={styles.labelTextStyle}
                placeholderText="Email"
                value={formData.email}
                onTextChange={email => {
                  setFormData({
                    ...formData,
                    email,
                  });
                  resetErrors();
                }}
                error={errors.email !== ''}
                errorText={errors.email}
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
                placeholderText="Mobile No."
                value={formData.phone}
                onTextChange={phone => {
                  setFormData({
                    ...formData,
                    phone,
                  });
                  resetErrors();
                }}
                error={errors.phone !== ''}
                errorText={errors.phone}
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
                inputType="text"
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
                rightIconOnPress={() =>
                  setIsPasswordVisible(!isPasswordVisible)
                }
                placeholderText="Password"
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
              </View>

              <Pressable
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Sign Up</Text>
              </Pressable>

              <View style={styles.dontHaveAccount}>
                <Text style={styles.dontHaveAccountText}>
                  You have an account
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                    setFormData({
                      fullname: '',
                      email: '',
                      phone: '',
                      password: '',
                    });
                  }}>
                  <Text style={styles.registerText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              {/* Or login with  */}
              <View style={styles.socialBox}>
                <View style={styles.socialLineBox}>
                  <View style={styles.socialLine} />
                  <Text style={styles.socialText}>Or login with</Text>
                  <View style={styles.socialLine} />
                </View>
                <View style={styles.socialLoginBox}>
                  <Pressable style={styles.socialLoginBtn}>
                    <Image style={styles.socialIcon} source={FACEBOOK} />
                  </Pressable>
                  <Pressable style={styles.socialLoginBtn}>
                    <Image style={styles.socialIcon} source={GOOGLE} />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
