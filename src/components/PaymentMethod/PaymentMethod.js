import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    Pressable,
} from 'react-native';
import styles from './style';
import { GPAY, MASTERCARD1, TOGGLEICON, TOGGLEICONINACTIVE, VISA } from '../../constants/images';
import Ctext from '../Ctext';

export default function PaymentMethod({ navigation }) {
    const [selectedMethod, setSelectedMethod] = useState(null); // Initialize state for selected payment method

    const handleToggle = (method) => {
        setSelectedMethod(method);
    };
    return (
        <View style={styles.PaymentMethodOuter}>
            <View style={styles.PaymentMethodInner}>
                <View style={styles.PaymentMethodUl}>
                    <View style={styles.PaymentMethodLi}>
                        <View style={styles.PaymentMethodLiInner}>
                            <Image source={VISA} style={styles.PaymentMethodLiImage} />
                            <Ctext style={styles.PaymentMethodText}>Visa Card</Ctext>
                        </View>
                        <Pressable style={styles.PaymentMethodLiRadio} onPress={() => handleToggle('VISA')}>
                            <Image source={selectedMethod === 'VISA' ? TOGGLEICON : TOGGLEICONINACTIVE} style={styles.PaymentMethodLiRadioImage} />
                        </Pressable>
                    </View>
                    <View style={styles.PaymentMethodLi}>
                        <View style={styles.PaymentMethodLiInner}>
                            <Image source={MASTERCARD1} style={styles.PaymentMethodLiImage} />
                            <Ctext style={styles.PaymentMethodText}>Master Card</Ctext>
                        </View>
                        <Pressable style={styles.PaymentMethodLiRadio} onPress={() => handleToggle('MASTERCARD')}>
                            <Image source={selectedMethod === 'MASTERCARD' ? TOGGLEICON : TOGGLEICONINACTIVE} style={styles.PaymentMethodLiRadioImage} />
                        </Pressable>
                    </View>
                    <View style={styles.PaymentMethodLi}>
                        <View style={styles.PaymentMethodLiInner}>
                            <Image source={GPAY} style={styles.PaymentMethodLiImage} />
                            <Ctext style={styles.PaymentMethodText}>UPI Payment</Ctext>
                        </View>
                        <Pressable style={styles.PaymentMethodLiRadio} onPress={() => handleToggle('GPAY')}>
                            <Image source={selectedMethod === 'GPAY' ? TOGGLEICON : TOGGLEICONINACTIVE} style={styles.PaymentMethodLiRadioImage} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}