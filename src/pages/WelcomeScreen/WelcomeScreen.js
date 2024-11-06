/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform} from '../../constants/constants';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {SLIDER1, SLIDER2, SLIDER3, WELCOMEBG} from '../../constants/images';
import {color} from 'react-native-elements/dist/helpers';
import {colors} from '../../constants/colors';
import {deviceHeight} from '../../constants/fontConstants';

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

export default function WelcomeScreen({navigation}) {
  // const handleGetStartedPress = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 5,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={SLIDER1} style={styles.SliderImage} />
        </View>
        <View style={{flex: 2, backgroundColor: 'Yellow'}}>
          <View style={styles.FooterSection}>
            <Text style={styles.SliderTitle}>
              Nourish Your Body, Delight Your Senses
            </Text>
            <Text style={styles.SliderText}>
              Zest Up Your Life, One Bite at a Time
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.SliderButton}
            onPress={() => navigation.navigate('Login')}
            //</View> onPress={() => navigation.navigate('Login')}
          >
            <Text style={commonStyles.DefaultFont}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SliderButton}>
            <Text style={commonStyles.DefaultFont}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
