/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { useEffect, useCallback } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SLIDER1, SLIDER2, SLIDER3, STARTINGPAGE_BACK_TEXTURE, WELCOMEBG } from '../../constants/images';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../../constants/colors';
import { deviceHeight } from '../../constants/fontConstants';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ctext from '../../components/Ctext';


export default function WelcomeScreen({ navigation }) {
  const slides = [
    {
      key: 1,
      title: 'Nourish Your Body, Delight Your Senses',
      text: 'Zest Up Your Life, One Bite at a Time',
      image: SLIDER1,
    },
    {
      key: 2,
      title: 'Fresh fruit Delivery Every time',
      text: 'Pluck Perfection, Every Time',
      image: SLIDER2,
    },
    {
      key: 3,
      title: 'Fresh fruit Delivery Every time',
      text: 'Pluck Perfection, Every Time',
      image: SLIDER3,
    },
  ];
  const [index, setIndex] = React.useState(0);

  const [content, setContent] = React.useState(slides[index]);

  /******  Image animation  ********/
  const translateY = useSharedValue(-100);
  const scale = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  // Animated style for zoom-in text
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const startAnimations = useCallback(() => {
    translateY.value = -100; // Reset position
    scale.value = 0; // Reset scale

    // Start slide-down animation with bounce
    translateY.value = withSpring(0, { damping: 10, stiffness: 100 });
    // Start zoom-in animation for text
    scale.value = withTiming(1, { duration: 900 });
  }, [scale, translateY]);
  useEffect(() => {
    startAnimations();
  }, []);
  const handleNextBotton = () => {
    setIndex(index + 1);
    setContent(slides[index + 1]);
    startAnimations();
  };

  const handlePreviousBotton = () => {
    setIndex(index - 1);
    setContent(slides[index - 1]);
    startAnimations();
  };
  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={{ flex: 1, padding: 10, position: 'relative' }}>
        <View style={styles.background}>
          <Image resizeMode="cover" source={STARTINGPAGE_BACK_TEXTURE} style={styles.backgroundImage} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.skipBTN}
          >
            <Ctext>Skip</Ctext>
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            {
              flex: 5,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedStyle,
          ]}>
          <Image source={content.image} style={styles.SliderImage} />
        </Animated.View>
        <View style={{ flex: 1.5 }}>
          <View style={styles.FooterSection}>
            <Animated.Text style={[animatedTextStyle, styles.SliderTitle]}>
              {content.title}
            </Animated.Text>
            <Animated.Text style={[animatedTextStyle, styles.SliderText]}>
              {content.text}
            </Animated.Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {index === 0 ? (
            <></>
          ) : (
            <TouchableOpacity
              style={styles.SliderButton}
              onPress={handlePreviousBotton}>
              <Ctext style={commonStyles.DefaultFont}>Previous</Ctext>
            </TouchableOpacity>
          )}
          {index === 2 ? (
            <TouchableOpacity
              style={styles.SliderButton}
              onPress={() => navigation.navigate('Login')}>
              <Ctext style={commonStyles.DefaultFont}>Get Start</Ctext>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.SliderButton}
              onPress={handleNextBotton}>
              <Ctext style={commonStyles.DefaultFont}>Next</Ctext>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
