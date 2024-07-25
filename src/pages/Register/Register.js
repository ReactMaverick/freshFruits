import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { FACEBOOK, FRESHFOODLOGO, GOOGLE, SWITCHOFF, SWITCHON, } from '../../constants/images';
import { FormInput } from 'react-native-formtastic';
import AntDesign from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';


export default function Register({ navigation }) {
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
            <Image
              style={styles.FreshFoodLogo}
              source={FRESHFOODLOGO}
            />
            <View style={styles.TitleBox}>
              <Text style={styles.LoginText}>Created Account</Text>
              <Text style={styles.LoginPara}>Sign up to get started!</Text>
            </View>

            <View style={styles.formBox}>
              <FormInput
                inputContainerStyle={styles.inputContainerStyle}
                textInputProps={{ style: styles.textInputStyle }}
                labelTextStyle={styles.labelTextStyle}
                placeholderText="Name"
                hideLabel
                leftIcon
                renderLeftIcon={() => <Feather name="user" style={styles.textInputIcon} />}
              />
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
              </View>

              <Pressable style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Sign Up</Text>
              </Pressable>

              <View style={styles.dontHaveAccount}>
                <Text style={styles.dontHaveAccountText}>You have an account</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
                    <Image
                      style={styles.socialIcon}
                      source={FACEBOOK}
                    />
                  </Pressable>
                  <Pressable style={styles.socialLoginBtn}>
                    <Image
                      style={styles.socialIcon}
                      source={GOOGLE}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView >
      </ScrollView>
    </KeyboardAvoidingView >
  );
}

