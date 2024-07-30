import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from './style';
import { PRO2, PRO3, PRO6 } from '../../constants/images';

export default function OrderSummary({ navigation }) {
    return (
        <View style={styles.OrderSummaryOuter}>
            <View style={styles.OrderSummaryInner}>
                <View style={styles.OrderSummaryUl}>
                    <View style={styles.OrderSummaryLi}>
                        <View style={styles.OrderSummaryLeft}>
                            <Image source={PRO2} style={styles.OrderSummaryImg} />
                            <View style={styles.OrderSummaryText}>
                                <Text style={styles.OrderSummaryTitle}>Avocado</Text>
                                <Text style={styles.ProductWeight}>1kg</Text>
                                <Text style={styles.sliderCardText}> $13 <Text style={styles.sliderCardTextCut}> $29</Text></Text>
                            </View>
                        </View>
                        <View style={styles.OrderSummaryRight}>
                            <Text style={styles.OrderSummaryQuantity}>1x</Text>
                        </View>
                    </View>
                    <View style={styles.OrderSummaryLi}>
                        <View style={styles.OrderSummaryLeft}>
                            <Image source={PRO3} style={styles.OrderSummaryImg} />
                            <View style={styles.OrderSummaryText}>
                                <Text style={styles.OrderSummaryTitle}>Mango</Text>
                                <Text style={styles.ProductWeight}>1kg</Text>
                                <Text style={styles.sliderCardText}> $19 <Text style={styles.sliderCardTextCut}> $22</Text></Text>
                            </View>
                        </View>
                        <View style={styles.OrderSummaryRight}>
                            <Text style={styles.OrderSummaryQuantity}>1x</Text>
                        </View>
                    </View>
                    <View style={styles.OrderSummaryLi}>
                        <View style={styles.OrderSummaryLeft}>
                            <Image source={PRO6} style={styles.OrderSummaryImg} />
                            <View style={styles.OrderSummaryText}>
                                <Text style={styles.OrderSummaryTitle}>Blueberry</Text>
                                <Text style={styles.ProductWeight}>2kg</Text>
                                <Text style={styles.sliderCardText}> $15 <Text style={styles.sliderCardTextCut}> $30</Text></Text>
                            </View>
                        </View>
                        <View style={styles.OrderSummaryRight}>
                            <Text style={styles.OrderSummaryQuantity}>1x</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.OrderitemsUl}>
                    <View style={styles.OrderSummaryRow}>
                        <Text style={styles.OrderSummaryLeftText}>Total items</Text>
                        <Text style={styles.OrderSummaryRightText}>03</Text>
                    </View>
                    <View style={styles.OrderSummaryRow}>
                        <Text style={styles.OrderSummaryLeftText}>Price</Text>
                        <Text style={styles.OrderSummaryRightText}>$55</Text>
                    </View>
                    <View style={styles.OrderSummaryRow}>
                        <Text style={styles.OrderSummaryLeftText}>Delivery</Text>
                        <Text style={styles.OrderSummaryRightText}>$3</Text>
                    </View>
                    <View style={styles.OrderSummaryRow}>
                        <Text style={styles.OrderSummaryLeftText}>Discount</Text>
                        <Text style={styles.OrderSummaryRightText}>$18</Text>
                    </View>
                </View>
                <View style={styles.TotalPriceRow}>
                    <Text style={styles.TotalPriceLeftText}>Total Price</Text>
                    <Text style={styles.TotalPriceRightText}>$55</Text>
                </View>
            </View>
        </View>
    );
}