import React, {useEffect} from 'react';
import {View, Image, Text, Pressable, Alert} from 'react-native';
import styles from './style';
import {BTNCART, PRO1} from '../../constants/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused} from '@react-navigation/native';
import {addToCart} from '../../values/CartUrls';
import {
  selectUser_Id,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import {useSelector} from 'react-redux';

export default function PopularFruitsSliderItem({
  navigation,
  productItem,
  item_key,
}) {
  const isFocused = useIsFocused();
  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  useEffect(() => {
    let productId = productItem.products_id;
    let productAttributesId =
      productItem.attributes[0].values1[0].products_attributes_id;
    if (isFocused) {
      // addToCart(user_Id,userSession_Id,productId,productAttributesId)
    }
  }, [isFocused]);

  return (
    <View key={item_key} style={styles.sliderCardOuter}>
      <View style={styles.sliderCardMain}>
        {/* wishlisted button  */}
        <Pressable
          onPress={() => navigation.navigate('Wishlist')}
          style={styles.wishlistBtn}>
          <AntDesign name="hearto" style={styles.wishlistIcon} />
        </Pressable>
        <Image
          style={styles.sliderCardImage}
          source={{uri: productItem.image_path ?? PRO1}}
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
            {/* <Pressable
                            onPress={() => Alert.alert('Add to Cart')}
                            style={styles.AddToCartBtn}>
                            <Image source={BTNCART} style={styles.AddToCartBtnImage} />
                        </Pressable> */}

            <Pressable
              onPress={() =>{
                addToCart(
                    user_Id,
                    userSession_Id,
                    productItem.products_id,
                    productItem.attributes[0].values1[0].products_attributes_id,
                  );
                //   Alert.alert('Add to Cart')
                 
              }
              }
              style={styles.AddToCartBtn}>
              <Image source={BTNCART} style={styles.AddToCartBtnImage} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
