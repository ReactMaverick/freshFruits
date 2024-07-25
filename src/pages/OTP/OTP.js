import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { useState } from "react";
import { OneTapInput, ResendOTPButton } from "react-native-onetapinput";

export default function OTP({ navigation }) {
  const [otp, setOtp] = useState('');
  const [hash, setHash] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <View style={styles.MainBox}>

          <View style={styles.TitleBox}>
            <Text style={styles.LoginText}>Verify OTP</Text>
            <Text style={styles.LoginPara}>Please enter four digit code we send your mobile no.</Text>
          </View>

          <View style={styles.formBox}>
            <OneTapInput
              otpCount={4} // Default is 6
              hash={hash}
              setHash={setHash}
              otp={otp}
              setOtp={setOtp}
              otpBoxStyle={styles.otpBox}
              otpContainerStyle={styles.otpContainer}
              otpBoxTextStyle={styles.otpBoxText}
              otpBoxActiveStyle={styles.otpBoxActive}
              otpBoxActiveTextStyle={styles.otpBoxActiveText}
              otpBoxErrorStyle={styles.otpBoxError}
              otpBoxErrorTextStyle={styles.otpBoxErrorText}
              otpBoxSuccessStyle={styles.otpBoxSuccess}
              otpBoxSuccessTextStyle={styles.otpBoxSuccessText}
            />
            <Text style={styles.otpText}>Dont you receive any code</Text>
            <ResendOTPButton
              hash={hash}
              setHash={setHash}
              // resendText={'Resend OTP'}
              resendButtonStyle={styles.resendButton}
              resendButtonTextStyle={styles.resendButtonText}
              resendTimerStyle={styles.resendTimer}
            />
          </View>
        </View>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
