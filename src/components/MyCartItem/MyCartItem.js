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

export default function MyCartItem({ navigation }) {
    const [quantity, setQuantity] = useState(1); // Initialize quantity state

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    return (
        <View style={styles.CardOuter}>
            <View style={styles.CardInner}>
                <View style={styles.ProductImageBox}>
                    <ImageBackground source={DISCOUNT} resizeMode='contain' style={styles.Discount}>
                        <Text style={styles.DiscountText}>50%</Text>
                    </ImageBackground>
                    <Image source={PRO2} style={styles.ProductImage} />
                </View>
                <View style={styles.ProductDetails}>
                    <View style={styles.ProductDetailsTop}>
                        <View style={styles.ProductDetailsLeft}>
                            <Text style={styles.ProductName}>Avocado</Text>
                            <Text style={styles.ProductWeight}>1kg</Text>
                        </View>
                        <Pressable style={styles.RemoveBtn}>
                            <Feather name="trash-2" style={styles.RemoveBtnIcon} />
                        </Pressable>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardText}> $13 <Text style={styles.sliderCardTextCut}>
                                $29</Text> </Text>
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