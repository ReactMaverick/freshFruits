import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FLAME, PRO1, PRO2, PRO3, PRO4, PRO5, PRODETAILSBG, WATCH } from '../../constants/images';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors';

import Feather from 'react-native-vector-icons/Feather';
import OtherFruitsSlider from '../../components/OtherFruitsSlider/OtherFruitsSlider';


export default function ProductDetails({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <View style={styles.MainBox}>
          <ScrollView style={styles.ScrollView}>
            <ImageBackground source={PRODETAILSBG} resizeMode='cover' style={styles.ProductDetailsBox}>
              <View style={styles.ProductDetailsTitleBox}>
                <Text style={styles.ProductDetailsTitle}>Apple Fruit</Text>
                <View style={styles.ProductDetailsRatingBox}>
                  <AntDesign name="star" style={styles.ratingIcon} />
                  <Text style={styles.ProductDetailsRatingText}> (235Reviews)</Text>
                </View>
              </View>
              {/* Product image slider  */}
              <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={0}
                showPagination
                paginationStyle={styles.paginationStyle}
                paginationStyleItem={styles.paginationStyleItem}
                paginationStyleItemActive={styles.paginationStyleItemActive}
                paginationActiveColor={colors.PrimaryColor}
                paginationDefaultColor={'#AAADA6'}
              >
                <View style={styles.SliderItem}>
                  <Image source={PRO1} style={styles.Productimage} />
                </View>
                <View style={styles.SliderItem}>
                  <Image source={PRO2} style={styles.Productimage} />
                </View>
                <View style={styles.SliderItem}>
                  <Image source={PRO3} style={styles.Productimage} />
                </View>
                <View style={styles.SliderItem}>
                  <Image source={PRO4} style={styles.Productimage} />
                </View>
                <View style={styles.SliderItem}>
                  <Image source={PRO5} style={styles.Productimage} />
                </View>

              </SwiperFlatList>
            </ImageBackground>
            {/* product Details */}
            <View style={styles.ProductMainBox}>
              <View style={styles.ProductTimeRow}>
                <View style={styles.ProductTimeLeft}>
                  <View style={styles.ProductTimeBox}>
                    <Image source={WATCH} style={styles.TimeIcon} />
                    <Text style={styles.TimeText}>10 Min</Text>
                  </View>
                  <View style={styles.ProductTimeBox}>
                    <Image source={FLAME} style={styles.TimeIcon} />
                    <Text style={styles.TimeText}>32 kcal</Text>
                  </View>
                </View>
                <View style={styles.quantityPlusMinus}>
                  <Pressable style={styles.MinusBtn}>
                    <Feather name="minus" style={styles.MinusIcon} />
                  </Pressable>
                  <Text style={styles.quantityText}>2Kg</Text>
                  <Pressable style={styles.plusBtn}>
                    <Feather name="plus" style={styles.plusIcon} />
                  </Pressable>
                </View>
              </View>
              <View style={styles.DetailsArea}>
                <Text style={styles.ProductDetailsTitle}>
                  Product Details </Text>
                <Text style={styles.ProductDetailsText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <Text style={styles.ProductReadMore}>Read more</Text> </Text>
              </View>
            </View>
            <View style={styles.ProductMainBox}>
              <Text style={styles.ProductDetailsTitle}>
                Other Fruits </Text>
            </View>
            <OtherFruitsSlider navigation={navigation} />
          </ScrollView>
          <View style={styles.AddToCartBox}>
            <View style={styles.AddToCartTextBox}>
              <Text style={styles.TotalText}>Total price</Text>
              <Text style={styles.PriceText}>$13</Text>
            </View>
            <Pressable style={styles.AddToCartBtn}
              onPress={() => navigation.navigate('MyCart')}
            >
              <Text style={styles.AddToCartBtnText}>Add to cart</Text>
            </Pressable>
          </View>
        </View>

      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
