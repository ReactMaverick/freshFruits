import React from 'react';
import {
    View,
    Image,
    Text,
    Pressable,
    Alert,
} from 'react-native';
import styles from './style';
import { TOGGLEICON } from '../../constants/images';
import Feather from 'react-native-vector-icons/Feather';
import Ctext from '../Ctext';

export default function AddressBox({ navigation }) {
    return (
        <View style={styles.addressOuter}>
            <View style={styles.addressInner}>
                <Pressable style={styles.RadioBtn}>
                    <Image source={TOGGLEICON} style={styles.RadioBtnImage} />
                </Pressable>
                <View style={styles.addressBox}>
                    <View style={styles.TitleRow}>
                        <Ctext style={styles.addressTitle}>Home</Ctext>
                        <Pressable style={styles.EditBtn}
                            onPress={() => Alert.alert('Edit Address')}>
                            <Ctext style={styles.EditBtnText}>Change</Ctext>
                            <Feather name="edit-3" style={styles.EditBtnIcon} />
                        </Pressable>
                    </View>
                    <Ctext style={styles.addressText}>1901 Thornridge Cir. Shiloh, Hawaii</Ctext>
                    <Ctext style={styles.addressText}>Phone number <Ctext style={styles.addressTextColor}>(704) 555-0127</Ctext></Ctext>
                </View>
            </View>
        </View>
    );
}