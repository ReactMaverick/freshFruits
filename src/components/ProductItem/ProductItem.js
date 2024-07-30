import React from 'react';
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

export default function ProductItem({ navigation }) {
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
                        <View style={styles.ratingBox}>
                            <Text style={styles.ratingText}>4.5</Text>
                            <AntDesign name="star" style={styles.ratingIcon} />
                        </View>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardText}> $13/<Text style={styles.sliderCardTextCut}>
                                $29</Text> </Text>
                        </View>
                        <Pressable
                            onPress={() => Alert.alert('Add to Cart')}
                            style={styles.AddToCartBtn}>
                            <Image source={BTNCARTTEXT} style={styles.AddToCartBtnImage} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}