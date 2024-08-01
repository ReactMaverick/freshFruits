import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
export default function LocationBottomSheet({ isVisible, onClose }) {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.CardOuter}>
                <View style={styles.CardInner}>
                    <Text style={styles.Title}>Location</Text>
                </View>
            </View>
        </Modal>
    );
}