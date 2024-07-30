import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import { SUCCESS } from '../../constants/images';


export default function PaymentSuccessful({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <View style={styles.MainBox}>
          <Image source={SUCCESS} style={styles.PaymentMethodLiImage} />
          <View style={styles.SuccessBox}>
            <Text style={styles.SuccessText}>Payment Successful</Text>
            <Text style={styles.SuccessPara}>Your payment was successful</Text>
            <Text style={styles.Payment}>$55</Text>
          </View>
        </View>

      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
