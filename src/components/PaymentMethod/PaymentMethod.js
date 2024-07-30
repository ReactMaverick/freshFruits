import React from 'react';
import {
    View,
    Image,
    Text,
    Pressable,
} from 'react-native';
import styles from './style';
import { GPAY, MASTERCARD1, TOGGLEICON, TOGGLEICONINACTIVE, VISA } from '../../constants/images';

export default function PaymentMethod({ navigation }) {
    return (
        <View style={styles.PaymentMethodOuter}>
            <View style={styles.PaymentMethodInner}>
                <View style={styles.PaymentMethodUl}>
                    <View style={styles.PaymentMethodLi}>
                        <View style={styles.PaymentMethodLiInner}>
                            <Image source={VISA} style={styles.PaymentMethodLiImage} />
                            <Text style={styles.PaymentMethodText}>Visa Card</Text>
                        </View>
                        <Pressable style={styles.PaymentMethodLiRadio}>
                            <Image source={TOGGLEICON} style={styles.PaymentMethodLiRadioImage} />
                        </Pressable>
                    </View>
                    <View style={styles.PaymentMethodLi}>
                        <View style={styles.PaymentMethodLiInner}>
                            <Image source={MASTERCARD1} style={styles.PaymentMethodLiImage} />
                            <Text style={styles.PaymentMethodText}>Master Card</Text>
                        </View>
                        <Pressable style={styles.PaymentMethodLiRadio}>
                            <Image source={TOGGLEICONINACTIVE} style={styles.PaymentMethodLiRadioImage} />
                        </Pressable>
                    </View>
                    <View style={styles.PaymentMethodLi}>
                        <View style={styles.PaymentMethodLiInner}>
                            <Image source={GPAY} style={styles.PaymentMethodLiImage} />
                            <Text style={styles.PaymentMethodText}>UPI Payment</Text>
                        </View>
                        <Pressable style={styles.PaymentMethodLiRadio}>
                            <Image source={TOGGLEICONINACTIVE} style={styles.PaymentMethodLiRadioImage} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}