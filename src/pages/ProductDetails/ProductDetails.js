import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform, showToast} from '../../constants/constants';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  FLAME,
  PRO1,
  PRO2,
  PRO3,
  PRO4,
  PRO5,
  PRODETAILSBG,
  WATCH,
} from '../../constants/images';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {colors} from '../../constants/colors';

import Feather from 'react-native-vector-icons/Feather';
import OtherFruitsSlider from '../../components/OtherFruitsSlider/OtherFruitsSlider';
import Header from '../../components/Header/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {addToCart} from '../../values/CartUrls';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectUser_Id,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import {storeCartItems} from '../../redux/reducers/cartItemsReducer';
import Loader from '../../components/Loader/Loader';
//  import HtmlToText from '../../common/htmlToText';
import HTMLView from 'react-native-htmlview';

export default function ProductDetails({navigation, route}) {
  const product = route.params;
  const user_Id = useSelector(selectUser_Id);
  const dispatch = useDispatch();
  const userSession_Id = useSelector(selectUser_session_Id);
  const [quantity, setQuantity] = useState('');
  const [loader, setLoader] = useState(false);
  const [fullDescription, setFullDescription] = useState([
    Math.round(product.products_description.length / 3),
    false,
  ]);
  const [totalPrice, setTotalPrice] = useState('');
  const [isQuantityZero, setIsQuantityZero] = useState(false);
  useEffect(() => {
    let initialQuantity = 2;
    setTotalPrice(Number(product.discounted_price) * initialQuantity);
    setQuantity(initialQuantity);
  }, [route]);

  const incrementQuantity = () => {
    let newQuantity = quantity + 1;
    if (newQuantity > 1) {
      setIsQuantityZero(false);
    }
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * Number(product.discounted_price));
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      setIsQuantityZero(true);
      return;
    }
    let newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * Number(product.discounted_price));
    if (newQuantity === 1) {
      setIsQuantityZero(true);
    }
  };

  const addItemsToCartFunc = async () => {
    console.log('items added');
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 4000);
    const returnData = await addToCart(
      user_Id,
      userSession_Id,
      product.products_id,
      product.attributes[0].values1[0].products_attributes_id,
      quantity,
    );
    setLoader(false);
    if (returnData.success) {
      dispatch(storeCartItems(returnData.newCartItems));
      navigation.navigate('MyCart');
    } else {   
      showToast('info', returnData.message);
    }
  };
   return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <Header
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={'TitleBox'}
          BGCOLOR={'#FFE8E8'}
        />
        <View style={styles.MainBox}>
          <ScrollView style={styles.ScrollView}>
            <ImageBackground
              source={PRODETAILSBG}
              resizeMode="cover"
              style={styles.ProductDetailsBox}>
              <View style={styles.ProductDetailsTitleBox}>
                <Text style={styles.ProductDetailsTitle}>
                  {product.products_name}
                </Text>
                <View style={styles.ProductDetailsRatingBox}>
                  <AntDesign name="star" style={styles.ratingIcon} />
                  <Text style={styles.ProductDetailsRatingText}>
                    {' '}
                    {product.reviewed_customers.length > 0
                      ? `(${product.reviewed_customers.length} Reviews)`
                      : `No Reviews Yet`}
                  </Text>
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
                paginationDefaultColor={'#AAADA6'}>
                <View style={styles.SliderItem}>
                  <Image
                    source={{uri: product.image_path ?? PRO1}}
                    style={styles.Productimage}
                  />
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
                  <Pressable
                    onPress={decrementQuantity}
                    style={[
                      styles.MinusBtn,
                      isQuantityZero && styles.deactivate_MinusBtn,
                    ]}>
                    <Feather name="minus" style={styles.MinusIcon} />
                  </Pressable>
                  <Text style={styles.quantityText}>{quantity}Kg</Text>
                  <Pressable onPress={incrementQuantity} style={styles.plusBtn}>
                    <Feather name="plus" style={styles.plusIcon} />
                  </Pressable>
                </View>
              </View>
              <View style={styles.DetailsArea}>
                <Text style={styles.ProductDetailsTitle}>Product Details </Text>
                <Text style={styles.ProductDetailsText}>
                  {/* onPress={()=>fullDescription[1]?setFullDescription([Math.round(product.products_description.length/3),false]):setFullDescription([product.products_description.length,true])} */}
                  {product.products_description.slice(0, fullDescription[0])}  
               
                  {/* {fullDescription[1] ? ( */}
              
              
        {/* <HTMLView
          value={product.products_description}
        /> */}
  
                  {/* ) : (
                    <HTMLView
                      value={product.products_description.slice(
                        0,
                        fullDescription[0],
                      )}
                    />
                  )} */}
                  {!fullDescription[1] && '...'}
                  <Text
                    onPress={() =>
                      fullDescription[1]
                        ? setFullDescription([
                            Math.round(product.products_description.length / 3),
                            false,
                          ])
                        : setFullDescription([
                            product.products_description.length,
                            true,
                          ])
                    }
                    style={styles.ProductReadMore}>
                    {!fullDescription[1] ? 'Read more' : ' Show less'}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.ProductMainBox}>
              <Text style={styles.ProductDetailsTitle}>Other Fruits </Text>
            </View>
            <OtherFruitsSlider
              productId={product.products_id}
              navigation={navigation}
            />
          </ScrollView>
          <View style={styles.AddToCartBox}>
            <View style={styles.AddToCartTextBox}>
              <Text style={styles.TotalText}>Total price</Text>
              <Text style={styles.PriceText}>${totalPrice}</Text>
            </View>
            <Pressable style={styles.AddToCartBtn} onPress={addItemsToCartFunc}>
              <Text style={styles.AddToCartBtnText}>
                {!loader ? 'Add to Cart' : 'Adding ...'}
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}


