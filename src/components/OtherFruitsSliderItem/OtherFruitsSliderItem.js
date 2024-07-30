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

export default function OtherFruitsSliderItem({ navigation }) {
    return (
        <View style={styles.sliderCardOuter}>
            <View style={styles.sliderCardMain}>

                <Image
                    style={styles.sliderCardImage}
                    source={PRO10}
                />
                <View style={styles.sliderCardContent}>
                    <View style={styles.sliderCardTop}>
                        <Text style={styles.sliderCardTitle}>Strawberry</Text>
                    </View>
                    <View style={styles.sliderCardBottom}>
                        <View style={styles.sliderCardPriceBox}>
                            <Text style={styles.sliderCardPrice}>2Kg</Text>
                            <Text style={styles.sliderCardText}> $13 <Text style={styles.sliderCardTextCut}>
                                $29</Text> </Text>
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