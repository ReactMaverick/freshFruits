/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SLIDER1, SLIDER2, SLIDER3, WELCOMEBG } from '../../constants/images';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../../constants/colors';
import { deviceHeight } from '../../constants/fontConstants';


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
  }
];


export default function WelcomeScreen({ navigation }) {

  const handleGetStartedPress = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <ImageBackground source={WELCOMEBG} style={styles.MainBox}>
          <SwiperFlatList
            index={0}
            showPagination
            paginationStyle={styles.paginationStyle}
            paginationActiveColor={colors.PrimaryColor}
            paginationDefaultColor={'#BFB6B6'}
            paginationStyleItem={styles.paginationStyleItem}
            paginationStyleItemActive={styles.paginationStyleItemActive}
            data={slides}
            renderItem={({ item, index }) => (
              <View style={styles.SliderItem}>
                <Image source={item.image} style={styles.SliderImage} />
                <View style={styles.SliderContent}>
                  <Text style={styles.SliderTitle}>{item.title}</Text>
                  <Text style={styles.SliderText}>{item.text}</Text>
                  {index === slides.length - 1 ? (
                    <Pressable style={styles.SliderButton} onPress={handleGetStartedPress}>
                      <Text style={styles.SliderButtonText}>Get Started</Text>
                    </Pressable>
                  ) : (
                    <Pressable style={styles.SliderButton}>
                      <Text style={styles.SliderButtonText}>Get Started</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            )}
          />
        </ImageBackground>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
