import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { colors } from '../../constants/colors';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import CatagoriesSlider from '../../components/CategoriesSlider/CategoriesSlider';
import PopularFruitsSlider from '../../components/PopularFruitsSlider/PopularFruitsSlider';
import ProductItem from '../../components/ProductItem/ProductItem';
import Loader from '../../components/Loader/Loader';
import { getData, postData } from '../../values/api/apiprovider';
import { ALL_PRODUCTS_URL } from '../../values/api/url';

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [allProductsData,setAllProductsData]=useState([])
  const getProductsList=async()=>{
    try {
      const response = await getData(ALL_PRODUCTS_URL);
      const data = await response;
      if (data.status) {
  setAllProductsData(data.product_list.product_data)
  // console.log("---",data.product_list.product_data)
  // console.log("-----",data.product_list.product_data[0].rating)
      }
    } catch (error) {
      console.error('Error fetching meeting data:', error);
    }
  }
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
    getProductsList()
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }




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
        HomeHeader={'HomeHeader'}
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
                // onPress={() => navigation.navigate('MyOrder')}
                onPress={() => navigation.navigate('MyCart')}
              // onPress={() => navigation.navigate('ProductDetails')}
              // onPress={() => navigation.navigate('Checkout')}
              // onPress={() => navigation.navigate('PaymentDetails')}
              // onPress={() => navigation.navigate('PaymentSuccessful')}
              >
                <Text style={styles.ViewAllBtnText}>See All</Text>
              </Pressable>
            </View>
            {/* HeadingBox */}
            {/* PopularFruitsSlider  */}
            <PopularFruitsSlider navigation={navigation} products={allProductsData} />
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

            {allProductsData.map(item=>(
              <ProductItem item_key={item.products_id} navigation={navigation} productItem={item}  />
              
              
            ))}
            {/* <ProductItem /> */}
            

            {/* Today Offer */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}
