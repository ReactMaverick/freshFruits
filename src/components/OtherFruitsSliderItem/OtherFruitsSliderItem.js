import React from 'react';
import {
    View,
    Image,
    Text,
    Pressable,
    Alert,
} from 'react-native';
import styles from './style';
import { BTNCART, PRO1, PRO10, PRO8 } from '../../constants/images';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function OtherFruitsSliderItem({ navigation,productDetails }) {
    return (
        <Pressable onPress={()=>navigation.navigate('ProductDetails',productDetails)}>

<View style={styles.sliderCardOuter}>
            <View style={styles.sliderCardMain}>
                <Image
                    style={styles.sliderCardImage}
                    source={PRO10}
                />
                <View style={styles.sliderCardContent}>
                    <View style={styles.sliderCardTop}>
                        <Text style={styles.sliderCardTitle}>{productDetails?.products_name || "dragon"}</Text>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardPrice}>2Kg</Text>
                            <Text style={styles.sliderCardText}> ${Number(productDetails?.discounted_price) || "18"} <Text style={styles.sliderCardTextCut}>
                                ${Number(productDetails?.products_price) || "32"}</Text> </Text>
                        </View>
                        {/* <Pressable
                            onPress={() => Alert.alert('Add to Cart')}
                            style={styles.AddToCartBtn}>
                            <Image source={BTNCART} style={styles.AddToCartBtnImage} />
                        </Pressable> */}
                    </View>

                </View>
            </View>
        </View>

        </Pressable>
    );
}