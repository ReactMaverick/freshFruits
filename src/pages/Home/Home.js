import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import Header from '../../components/Header/Header';
import { colors } from '../../constants/colors';
import { Text } from 'react-native';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import CatagoriesSlider from '../../components/CategoriesSlider/CategoriesSlider';
import PopularFruitsSlider from '../../components/PopularFruitsSlider/PopularFruitsSlider';
import ProductItem from '../../components/ProductItem/ProductItem';

export default function Home({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      < Header
        navigation={navigation}
        leftContent={'HomeLeft'}
        rightContent={'HomeRight'}
        BGCOLOR={colors.White}
        BottomBar={'SearchBox'}
      />
      <ScrollView>
        <SafeAreaView>
          <View style={styles.MainBox}>
            {/* BannerSlider */}
            <BannerSlider />
            {/* BannerSlider */}
            {/* CatagoriesSlider */}
            <CatagoriesSlider />
            {/* CatagoriesSlider */}
            {/* HeadingBox */}
            <View style={styles.HeadingBox}>
              <Text style={styles.HeadingText}>Popular Fruits</Text>
              <Pressable style={styles.ViewAllBtn}
                // onPress={() => navigation.navigate('Wishlist')}
                // onPress={() => navigation.navigate('MyCart')}
                // onPress={() => navigation.navigate('ProductDetails')}
                // onPress={() => navigation.navigate('Checkout')}
                // onPress={() => navigation.navigate('PaymentDetails')}
                onPress={() => navigation.navigate('PaymentSuccessful')}


              >
                <Text style={styles.ViewAllBtnText}>See All</Text>
              </Pressable>
            </View>
            {/* HeadingBox */}
            {/* PopularFruitsSlider  */}
            <PopularFruitsSlider navigation={navigation} />
            {/* PopularFruitsSlider  */}
            {/* HeadingBox */}
            <View style={styles.HeadingBox}>
              <Text style={styles.HeadingText}>Today Offer</Text>
              <Pressable style={styles.ViewAllBtn}
                onPress={() => navigation.navigate('Profile')}
              >
                <Text style={styles.ViewAllBtnText}>See All</Text>
              </Pressable>
            </View>
            {/* HeadingBox */}
            {/* Today Offer */}
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />

            {/* Today Offer */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}
