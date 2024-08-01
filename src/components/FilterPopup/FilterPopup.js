import React from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import Octicons from 'react-native-vector-icons/Octicons';
export default function FilterPopup({ isVisible, onClose }) {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}>
            {/* close icon  */}

            <View style={styles.CardOuter}>
                <Pressable onPress={onClose} style={styles.closeIconBtn}>
                    <Octicons name="x" style={styles.closeIcon} />
                </Pressable>
                <View style={styles.CardInner}>
                    <Text style={styles.Title}>Filter Popup</Text>
                </View>
            </View>
        </Modal>
    );
}