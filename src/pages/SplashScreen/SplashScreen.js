import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Animated,
} from 'react-native';
import {styles} from './Style';
import React, {useEffect, useRef} from 'react';
import {commonStyles} from '../../constants/styles';
import {platform} from '../../constants/constants';
import {LOGO} from '../../constants/images';
import {useSelector} from 'react-redux';
import {selectUser_isLoggedIn} from '../../redux/reducers/authReducer';

export default function SplashScreen({navigation}) {
  const translateY = useRef(new Animated.Value(500)).current; // Start position (bottom)
  const isUserLoggedIn = useSelector(selectUser_isLoggedIn);
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0, // End position (center)
      duration: 2000, // Duration of the animation
      useNativeDriver: true,
    }).start(() => {
      // Animation complete, navigate to login screen

      navigation.navigate(isUserLoggedIn ? 'Home' : 'WelcomeScreen');
    });
  }, [translateY, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        {/* splash screen logo animation */}
        <View style={styles.MainBox}>
          <Animated.View style={{transform: [{translateY}]}}>
            <Image style={styles.Logo} source={LOGO} />
          </Animated.View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
