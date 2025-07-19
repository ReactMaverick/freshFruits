import {
  Image,
  View,
  Animated,
} from 'react-native';
import { styles } from './Style';
import React, { useEffect, useRef } from 'react';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { LOGO } from '../../constants/images';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {useSelector} from 'react-redux';
// import {selectUser_isLoggedIn} from '../../redux/reducers/authReducer';

export default function SplashScreen() {
  const translateY = useRef(new Animated.Value(500)).current; // Start position (bottom)
  //const isUserLoggedIn = useSelector(selectUser_isLoggedIn);
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0, // End position (center)
      duration: 2000, // Duration of the animation
    }).start(() => {
      //navigation.navigate('WelcomeScreen');
      // Animation complete, navigate to login screen
      // navigation.navigate(isUserLoggedIn ? 'Home' : 'WelcomeScreen');
    });
  }, [translateY]);

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        {/* splash screen logo animation */}
        <View style={styles.MainBox}>
          <Animated.View style={{ transform: [{ translateY }] }}>
            <Image style={styles.Logo} source={LOGO} />
          </Animated.View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
