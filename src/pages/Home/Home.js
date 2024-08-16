import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform} from '../../constants/constants';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import {colors} from '../../constants/colors';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import CatagoriesSlider from '../../components/CategoriesSlider/CategoriesSlider';
import PopularFruitsSlider from '../../components/PopularFruitsSlider/PopularFruitsSlider';
import ProductItem from '../../components/ProductItem/ProductItem';
import Loader from '../../components/Loader/Loader';
import {getData, postData} from '../../values/api/apiprovider';
import {ALL_PRODUCTS_URL} from '../../values/api/url';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectUser_Id,
  selectUser_isLoggedIn,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import {viewCartProducts} from '../../values/CartUrls';
import {storeCartItems} from '../../redux/reducers/cartItemsReducer';
import {  storeProductsList } from '../../redux/reducers/productListReducer';

export default function Home({navigation}) {
  const [loading, setLoading] = useState(true);
  const [allProductsData, setAllProductsData] = useState([]);
  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  const dispatch = useDispatch();
  const listOfProducts=useSelector(state => state.productList.totalProductsList)
 // console.log("the list of total products are",listOfProducts)
  const getProductsList = async () => {
    try {
      const response = await getData(ALL_PRODUCTS_URL);
      const data = await response;
      if (data.status) {
        console.log(data);
        dispatch(storeProductsList(data.product_list.product_data))
        //setAllProductsData(data.product_list.product_data);
      }
    } catch (error) {
      console.error('Error fetching meeting data:', error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    getProductsList();
    const getCartItems = async () => {
      const data = await viewCartProducts(user_Id, userSession_Id); //for getting the cart products
      dispatch(storeCartItems(data));
    };
    getCartItems();
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <Header
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
            {/* <CatagoriesSlider /> */}
            {/* CatagoriesSlider */}
            {/* HeadingBox */}
            <View style={styles.HeadingBox}>
              <Text style={styles.HeadingText}>Popular Fruits</Text>
              <Pressable
                style={styles.ViewAllBtn}
                // onPress={() => navigation.navigate('Wishlist')}
                // onPress={() => navigation.navigate('MyOrder')}
                onPress={() => navigation.navigate('popularFruits')}
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
            <PopularFruitsSlider
              navigation={navigation}
              products={allProductsData}
            />
            {/* PopularFruitsSlider  */}
            {/* HeadingBox */}
            <View style={styles.HeadingBox}>
              <Text style={styles.HeadingText}>Today Offer</Text>
              <Pressable
                style={styles.ViewAllBtn}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.ViewAllBtnText}>See All</Text>
              </Pressable>
            </View>
            {/* HeadingBox */}
            {/* Today Offer */}

            {listOfProducts.map(item => (
              <ProductItem
                // item_key={item.products_id}
                key={item.products_id}
                navigation={navigation}
                productItem={item}
              />
            ))}
            {/* <ProductItem /> */}

            {/* Today Offer */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
