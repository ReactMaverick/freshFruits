import {
  Image,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import { SUCCESS } from '../../constants/images';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function PaymentSuccessful({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        <View style={styles.MainBox}>
          <Image source={SUCCESS} style={styles.PaymentMethodLiImage} />
          <View style={styles.SuccessBox}>
            <Ctext style={styles.SuccessText}>Payment Successful</Ctext>
            <Ctext style={styles.SuccessPara}>Your payment was successful</Ctext>
            <Ctext style={styles.Payment}>$55</Ctext>
          </View>
        </View>

      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
