import React from 'react';
import {
    View,
    Text,
    Pressable,
    ScrollView,
    Image,
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import Octicons from 'react-native-vector-icons/Octicons';
import { BEST, STAR } from '../../constants/images';
import Ctext from '../Ctext';
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
                    <View style={styles.CardInnerTop}>
                        <Ctext style={styles.Title}>Filters and Sorting</Ctext>
                    </View>
                    <ScrollView>
                        <View style={styles.cardCenter}>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Ctext style={styles.BoxCardItemTitle}>Top Picks</Ctext>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Image source={BEST} style={styles.BoxCardItemImg} />
                                            <Ctext style={styles.BoxCardItemText}>Best Seller</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Image source={STAR} style={styles.BoxCardItemImg} />
                                            <Ctext style={styles.BoxCardItemText}>Rated 4+</Ctext>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Ctext style={styles.BoxCardItemTitle}>Categories</Ctext>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>All</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Berries</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Apples & Pears</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Citrus Fruits</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Stone Fruits</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Tropical Fruits</Ctext>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Ctext style={styles.BoxCardItemTitle}>Availability</Ctext>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>In Stock</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Out of Stock</Ctext>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Ctext style={styles.BoxCardItemTitle}>Sort By</Ctext>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Price - Low to High</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Price - High to Low</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Rating- High to Low</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Rating - High to Low</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>New Arrivals</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Popularity</Ctext>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Ctext style={styles.BoxCardItemText}>Customer Rating</Ctext>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.cardBottom}>
                        <Pressable style={styles.Textbtn}>
                            <Ctext style={styles.TextbtnText}>Clear All</Ctext>
                        </Pressable>
                        <Pressable style={styles.sliderButton}>
                            <Ctext style={styles.sliderButtonText}>Apply All</Ctext>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}