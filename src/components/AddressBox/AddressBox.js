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

export default function AddressBox({ navigation }) {
    return (
        <View style={styles.addressOuter}>
            <View style={styles.addressInner}>
                <Pressable style={styles.RadioBtn}>
                    <Image source={TOGGLEICON} style={styles.RadioBtnImage} />
                </Pressable>
                <View style={styles.addressBox}>
                    <View style={styles.TitleRow}>
                        <Text style={styles.addressTitle}>Home</Text>
                        <Pressable style={styles.EditBtn}
                            onPress={() => Alert.alert('Edit Address')}>
                            <Text style={styles.EditBtnText}>Change</Text>
                            <Feather name="edit-3" style={styles.EditBtnIcon} />
                        </Pressable>
                    </View>
                    <Text style={styles.addressText}>1901 Thornridge Cir. Shiloh, Hawaii</Text>
                    <Text style={styles.addressText}>Phone number <Text style={styles.addressTextColor}>(704) 555-0127</Text></Text>
                </View>
            </View>
        </View>
    );
}