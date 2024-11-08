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
import {
  NEW_ARRIVED_FRUITS_URL,
  TOP_SELLER_FRUITS_URL,
  VIEW_WISHLIST_URL,
} from '../../values/api/url';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectUser_Id,
  selectUser_isLoggedIn,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import {viewCartProducts} from '../../values/CartUrls';
import {storeCartItems} from '../../redux/reducers/cartItemsReducer';
import {
  storeNewArrivedList,
  storeTopSellerList,
} from '../../redux/reducers/productListReducer';
import {storeWishlistItems} from '../../redux/reducers/WishListReducer';
import {viewWishlist} from '../../Utils/WishList_Func';
import { useIsFocused } from '@react-navigation/native';
import Skeleton from "react-native-reanimated-skeleton";

export default function Home({navigation}) {
  const [loading, setLoading] = useState(true);

  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  const dispatch = useDispatch();
  const isFocus = useIsFocused();
  const listOfProducts = useSelector(
    state => state.productList.newArrivedProductsList,
  );
  const listOfTopSellerProducts = useSelector(
    state => state.productList.topSellerProductsList,
  );

  // console.log("the list of total products are",listOfProducts)
  const getNewArrivedProducts = async () => {
    try {
      const response = await getData(NEW_ARRIVED_FRUITS_URL);
      const data = await response;
      if (data.status) {
        // console.log(data);
        dispatch(storeNewArrivedList(data.product_list.product_data));
      }
    } catch (error) {
      console.error('Error fetching new arriverd products data');
    }
  };
  const getTopSellerProducts = async () => {
    try {
      const response = await postData(TOP_SELLER_FRUITS_URL, {});
      const data = await response;
      if (data.status) {
        // console.log(
        //   'the data value of top seller products is ',
        //   data.products.product_data,
        // );
        dispatch(storeTopSellerList(data.products.product_data));
      }
    } catch (error) {
      console.error('Error fetching top seller products', error);
    }
  };
  

  const getWishlist = async () => {
    const response = await viewWishlist(user_Id);
    if (response.success) {
      dispatch(storeWishlistItems(response));
    }
  };

  useEffect(() => {
    getWishlist()
  }, [isFocus]);
  const getCartItems = async () => {
    const data = await viewCartProducts(user_Id, userSession_Id);
    if (data.success) {
      dispatch(storeCartItems(data.cartItems));
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    getNewArrivedProducts();
    getTopSellerProducts();
    getCartItems();
    getWishlist();
    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

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

<Skeleton
  containerStyle={{
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap:20,
    marginTop:100
  }}
  isLoading={loading}
  layout={[
    // {
    //   key: "header",
    //   flexDirection: "row",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   gap:65,
    //   children: [
    //     { key: "logo", width: 150, height: 20, marginRight: 20 },
    //     { key: "title", width: 50, height: 40,borderRadius:20 },
    //   ],
    //   // marginBottom: 20,
    // },
    
    
     
        { key: "input1", width: "85%", height: "29%", marginRight: 10, borderRadius: 5,marginBottom: 35, },
       
    
     
    
    // { key: "button", width: "80%", height: 50, borderRadius: 8, },
    {
      key: "footerRow",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap:13,
      children: [
        { key: "footer1", width: "45%", height: 170, marginRight: 6 ,borderRadius:8},
        { key: "footer2", width: "45%", height: 170,borderRadius:8 },
      ],
    },
    { key: "button", width: "90%", height: 120, borderRadius: 8, },
  ]}
>
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
                onPress={() => navigation.navigate('popularFruits')}

                // onPress={() => navigation.navigate('PaymentDetails')}
                // onPress={() => navigation.navigate('PaymentSuccessful')}
                // onPress={() => navigation.navigate('MyOrder')}
              >
                <Text style={styles.ViewAllBtnText}>See All</Text>
              </Pressable>
            </View>
            {/* HeadingBox */}
            {/* PopularFruitsSlider  */}
            <PopularFruitsSlider
              navigation={navigation}
              products={listOfProducts}
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

            {listOfTopSellerProducts.map(item => (
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
      </Skeleton>
    </KeyboardAvoidingView>
   
  );
}
