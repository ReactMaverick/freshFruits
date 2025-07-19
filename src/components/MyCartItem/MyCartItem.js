import React, { useEffect } from 'react';
import { useState } from 'react';
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
import Feather from 'react-native-vector-icons/Feather';
import { deleteCartproducts, updateProductQuantity } from '../../values/CartUrls';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { storeCartItems } from '../../redux/reducers/cartItemsReducer';
import { showToast } from '../../constants/constants';
import Ctext from '../Ctext';

export default function MyCartItem({ navigation, item }) {
  console.log("------------------")
  const [quantity, setQuantity] = useState(''); // Initialize quantity state
  const cartItems = useSelector(state => state.cart.cartItems);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const [isQuantityZero, setIsQuantityZero] = useState(false);

  useEffect(() => {
    if (item.customers_basket_quantity == 1) setIsQuantityZero(true);
    setQuantity(item.customers_basket_quantity);
  }, [item]);

  const incrementQuantity = async () => {
    console.log("ok clicked to enter")
    let newQuantity = quantity + 1;
    if (newQuantity > 1) {
      setIsQuantityZero(false);
    }
    setQuantity(newQuantity);
    console.log("ok entering to update")
    const data = await updateProductQuantity(
      item.customers_basket_id,
      item.products_id,
      newQuantity,
      item.attributes[0].products_attributes_id,
    );
    console.log("updateion done with resuklt", data)
    if (data.success) {
      console.log("entered in successs block")
      const newUpdatedCartItems = cartItems.map(cartItem =>
        cartItem.products_id === item.products_id
          ? { ...cartItem, customers_basket_quantity: newQuantity }
          : cartItem
      );
      console.log("calculations one")
      console.log("the new itemis -- ------------           --------------          ------------  ", newUpdatedCartItems)
      dispatch(storeCartItems(newUpdatedCartItems));
    }
  };

  const decrementQuantity = async () => {
    if (quantity === 1) {
      setIsQuantityZero(true);
      return;
    }
    let newQuantity = quantity - 1;
    setQuantity(newQuantity);
    if (newQuantity === 1) {
      setIsQuantityZero(true);
    }
    const data = await updateProductQuantity(
      item.customers_basket_id,
      item.products_id,
      newQuantity,
      item.attributes[0].products_attributes_id,
    );
    if (data.success) {
      const newUpdatedCartItems = cartItems.map(cartItem =>
        cartItem.products_id === item.products_id
          ? { ...cartItem, customers_basket_quantity: newQuantity }
          : cartItem
      );
      console.log("the new itemis ", newUpdatedCartItems)
      dispatch(storeCartItems(newUpdatedCartItems));
    }
  };

  const deleteCartItem = async () => {
    setLoader(true);
    const response = await deleteCartproducts(item.customers_basket_id);
    setLoader(false);
    if (response.success) {
      const newCartUpdatedItems = cartItems.filter(
        elements => elements.products_id !== item.products_id,
      );
      dispatch(storeCartItems(newCartUpdatedItems));
      showToast('success', response.message);
    } else {
      showToast('info', response.message);
    }
  };

  return (
    // <View key={item.products_id} style={styles.CardOuter}>
    <View style={styles.CardOuter}>
      <View style={styles.CardInner}>
        <View style={styles.ProductImageBox}>
          <ImageBackground
            source={DISCOUNT}
            resizeMode="contain"
            style={styles.Discount}>
            <Ctext style={styles.DiscountText}>
              {/* {Math.abs(item.prodDiscountRate)}%   pro_discount_rate */}
              {Math.abs(item.prodDiscountRate)}%
            </Ctext>
          </ImageBackground>
          <Image source={PRO2} style={styles.ProductImage} />
          {/* <Image
            source={{uri: item.image_path ?? PRO2}}
            style={styles.ProductImage}
          /> */}
        </View>
        <View style={styles.ProductDetails}>
          <View style={styles.ProductDetailsTop}>
            <View style={styles.ProductDetailsLeft}>
              <Ctext style={styles.ProductName}>{item.products_name}</Ctext>
              <Ctext style={styles.ProductWeight}>1kg</Ctext>
            </View>
            {!loader ? (
              <Pressable onPress={deleteCartItem} style={styles.RemoveBtn}>
                <Feather name="trash-2" style={styles.RemoveBtnIcon} />
              </Pressable>
            ) : (
              <Loader />
            )}
          </View>
          <View style={styles.sliderCardBottom}>
            <View style={styles.sliderCardPriceBox}>
              <Ctext style={styles.sliderCardText}>
                {' '}
                ${Number(item.afterDiscountPrice)}{' '}
                <Ctext style={styles.sliderCardTextCut}>
                  ${Number(item.final_price)}
                </Ctext>{' '}
              </Ctext>
            </View>
            <View style={styles.quantityPlusMinus}>
              <Pressable
                style={[
                  styles.MinusBtn,
                  isQuantityZero && styles.deactivate_MinusBtn,
                ]}
                onPress={decrementQuantity}>
                <Feather name="minus" style={styles.MinusIcon} />
              </Pressable>
              <Ctext style={styles.quantityText}>{quantity}Kg</Ctext>
              <Pressable style={styles.plusBtn} onPress={incrementQuantity}>
                <Feather name="plus" style={styles.plusIcon} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
