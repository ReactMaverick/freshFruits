import React from 'react';
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

export default function MyCartItem({ navigation,item }) {
    const [quantity, setQuantity] = useState(item.customers_basket_quantity); // Initialize quantity state

    const incrementQuantity = () => {
        let newQuantity = quantity + 1;
    setQuantity(newQuantity);

        updateProductQuantity(item.customers_basket_id,item.products_id,newQuantity,item.attributes[0].products_attributes_id)
        
    };

    const decrementQuantity = () => {
        let newQuantity = quantity - 1;
        setQuantity(newQuantity);
        
        updateProductQuantity(item.customers_basket_id,item.products_id,newQuantity,item.attributes[0].products_attributes_id)
    };
    return (
        <View key={item.products_id} style={styles.CardOuter}>
            <View style={styles.CardInner}>
                <View style={styles.ProductImageBox}>
                    <ImageBackground source={DISCOUNT} resizeMode='contain' style={styles.Discount}>
                        <Text style={styles.DiscountText}>{Math.abs(item.prodDiscountRate)}%</Text>
                    </ImageBackground>
                    <Image source={PRO2} style={styles.ProductImage} />
                </View>
                <View style={styles.ProductDetails}>
                    <View style={styles.ProductDetailsTop}>
                        <View style={styles.ProductDetailsLeft}>
                            <Text style={styles.ProductName}>{item.products_name}</Text>
                            <Text style={styles.ProductWeight}>1kg</Text>
                        </View>
                        <Pressable onPress={()=>deleteCartproducts(item.customers_basket_id)} style={styles.RemoveBtn}>
                            <Feather name="trash-2" style={styles.RemoveBtnIcon} />
                        </Pressable>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardText}> ${Number(item.afterDiscountPrice)} <Text style={styles.sliderCardTextCut}>
                                ${Number(item.final_price)}</Text> </Text>
                        </View>
                        <View style={styles.quantityPlusMinus}>
                            <Pressable style={styles.MinusBtn} onPress={decrementQuantity}>
                                <Feather name="minus" style={styles.MinusIcon} />
                            </Pressable>
                            <Text style={styles.quantityText}>{quantity}Kg</Text>
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