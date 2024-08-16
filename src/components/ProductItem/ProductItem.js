import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    Pressable,
    Alert,
    ImageBackground,
} from 'react-native';
import styles from './style';
import { BTNCARTTEXT, DISCOUNT, PRO2 } from '../../constants/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser_Id, selectUser_session_Id } from '../../redux/reducers/authReducer';
import { addToCart } from '../../values/CartUrls';
import { showToast } from '../../constants/constants';
import Loader from '../Loader/Loader';
import { storeCartItems } from '../../redux/reducers/cartItemsReducer';

export default function ProductItem({ navigation,productItem }) {
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
     
       <Pressable onPress={()=>navigation.navigate('ProductDetails',productItem)}>
         <View  style={styles.CardOuter}>
            <View style={styles.CardInner}>
               <View style={styles.ProductImageBox}>
                     {/* <ImageBackground source={DISCOUNT} resizeMode='contain' style={styles.Discount}>
                        <Text style={styles.DiscountText}>{productItem?.rating }%</Text>
                    </ImageBackground>  */}   
                    <Image  source={{uri: productItem.image_path ?? PRO2}}style={styles.ProductImage} />
                </View>
                <View style={styles.ProductDetails}>
                    <View style={styles.ProductDetailsTop}>
                        <View style={styles.ProductDetailsLeft}>
                            <Text style={styles.ProductName}>{productItem.products_name}</Text>
                            <Text style={styles.ProductWeight}>1kg</Text>
                        </View>
                        <View style={styles.ratingBox}>
                            <Text style={styles.ratingText}>{productItem.rating}</Text>
                            <AntDesign name="star" style={styles.ratingIcon} />
                        </View>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardText}> ${Number(productItem.discounted_price)}/<Text style={styles.sliderCardTextCut}>
                                ${Number(productItem.products_price)}</Text> </Text>
                        </View>
                        <Pressable
                            onPress={addItemsToCartFunc}
                            style={styles.AddToCartBtn}>
                                  {!loader ? (
                            <Image source={BTNCARTTEXT} style={styles.AddToCartBtnImage} />
                        ) : (
                            <Loader />
                          )}
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
       </Pressable>
    );
}