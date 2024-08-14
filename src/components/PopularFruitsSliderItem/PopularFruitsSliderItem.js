import React, {useState} from 'react';
import {View, Image, Text, Pressable, Alert} from 'react-native';
import styles from './style';
import {BTNCART, PRO1} from '../../constants/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {addToCart} from '../../values/CartUrls';
import {
  selectUser_Id,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Loader/Loader';
import {showToast} from '../../constants/constants';
import { addWishlistProduct } from '../../Utils/WishList_Func';
import { storeCartItems } from '../../redux/reducers/cartItemsReducer';

export default function PopularFruitsSliderItem({
  navigation,
  productItem,
  
}) {
  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  const [loader, setLoader] = useState(false);
  const dispatch=useDispatch()

  const addItemsToCartFunc = async () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 4000);
    const returnData = await addToCart(
      user_Id,
      userSession_Id,
      productItem.products_id,
      productItem.attributes[0].values1[0].products_attributes_id,
    );

    if (returnData.success) {
      setLoader(false);
dispatch(storeCartItems(returnData.newCartItems))
      showToast('success', returnData.messgae);
    } else {
      setLoader(false);
      showToast('info', returnData.message);
    }
  };

  
  return (
    // <View key={item_key} style={styles.sliderCardOuter}>
    <View  style={styles.sliderCardOuter}>
      <View style={styles.sliderCardMain}>
        {/* wishlisted button  */}
        <Pressable
          // onPress={() => navigation.navigate('Wishlist')}
          onPress={() => {
            console.log()
             addWishlistProduct(user_Id,productItem.products_id,productItem.attributes[0].values1[0].products_attributes_id)  
          }}
          style={styles.wishlistBtn}>
          <AntDesign name="hearto" style={styles.wishlistIcon} />
        </Pressable>
        {/* <Image
          style={styles.sliderCardImage}
          source={{uri: productItem.image_path ?? PRO1}}
        /> */}
        <Image
          style={styles.sliderCardImage}
          source={PRO1}
        />
        <View style={styles.sliderCardContent}>
          <View style={styles.sliderCardTop}>
            <Text style={styles.sliderCardTitle}>
              {productItem.products_name}
            </Text>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{productItem.rating}</Text>
              <AntDesign name="star" style={styles.ratingIcon} />
            </View>
          </View>
          <View style={styles.sliderCardBottom}>
            <View style={styles.sliderCardPriceBox}>
              <Text style={styles.sliderCardPrice}>
                {productItem.products_price}
              </Text>
              <Text style={styles.sliderCardText}>
                <Text style={styles.sliderCardTextBig}>
                  ${productItem.discounted_price}/
                </Text>
                1Kg
              </Text>
            </View>

            {/* Alert.alert('Add to Cart') */}
            <Pressable onPress={addItemsToCartFunc} style={styles.AddToCartBtn}>
              {!loader ? (
                <Image source={BTNCART} style={styles.AddToCartBtnImage} />
              ) : (
                <Loader />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
