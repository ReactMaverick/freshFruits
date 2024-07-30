import React from 'react';
import {
    View,
    Image,
    Text,
    Pressable,
    Alert,
} from 'react-native';
import styles from './style';
import { BTNCART, PRO1 } from '../../constants/images';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PopularFruitsSliderItem({ navigation }) {
    return (
        <View style={styles.sliderCardOuter}>
            <View style={styles.sliderCardMain}>
                {/* wishlisted button  */}
                <Pressable
                    onPress={() => navigation.navigate('Wishlist')}
                    style={styles.wishlistBtn}>
                    <AntDesign name="hearto" style={styles.wishlistIcon} />
                </Pressable>
                <Image
                    style={styles.sliderCardImage}
                    source={PRO1}
                />
                <View style={styles.sliderCardContent}>
                    <View style={styles.sliderCardTop}>
                        <Text style={styles.sliderCardTitle}>Apple</Text>
                        <View style={styles.ratingBox}>
                            <Text style={styles.ratingText}>4.5</Text>
                            <AntDesign name="star" style={styles.ratingIcon} />
                        </View>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardPrice}>$17</Text>
                            <Text style={styles.sliderCardText}><Text style={styles.sliderCardTextBig}>
                                $13/</Text> 1Kg</Text>
                        </View>
                        <Pressable
                            onPress={() => Alert.alert('Add to Cart')}
                            style={styles.AddToCartBtn}>
                            <Image source={BTNCART} style={styles.AddToCartBtnImage} />
                        </Pressable>
                    </View>

                </View>
            </View>
        </View>
    );
}