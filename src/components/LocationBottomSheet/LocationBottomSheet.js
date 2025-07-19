import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import Ctext from '../Ctext';
export default function LocationBottomSheet({ isVisible, onClose }) {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.CardOuter}>
                <View style={styles.CardInner}>
                    <Ctext style={styles.Title}>Location</Ctext>
                </View>
                    <Ctext style={styles.Title}>Locatizxdon</Ctext>
            </View>
            
        </Modal>
    );
}