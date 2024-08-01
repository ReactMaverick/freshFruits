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
                        <Text style={styles.Title}>Filters and Sorting</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.cardCenter}>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Text style={styles.BoxCardItemTitle}>Top Picks</Text>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Image source={BEST} style={styles.BoxCardItemImg} />
                                            <Text style={styles.BoxCardItemText}>Best Seller</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Image source={STAR} style={styles.BoxCardItemImg} />
                                            <Text style={styles.BoxCardItemText}>Rated 4+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Text style={styles.BoxCardItemTitle}>Categories</Text>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>All</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Berries</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Apples & Pears</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Citrus Fruits</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Stone Fruits</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Tropical Fruits</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Text style={styles.BoxCardItemTitle}>Availability</Text>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>In Stock</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Out of Stock</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.BoxCardMain}>
                                <View style={styles.BoxCardArea}>
                                    <Text style={styles.BoxCardItemTitle}>Sort By</Text>
                                    <View style={styles.BoxCardItemRow}>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Price - Low to High</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Price - High to Low</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Rating- High to Low</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Rating - High to Low</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>New Arrivals</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Popularity</Text>
                                        </Pressable>
                                        <Pressable style={styles.BoxCardItem}>
                                            <Text style={styles.BoxCardItemText}>Customer Rating</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.cardBottom}>
                        <Pressable style={styles.Textbtn}>
                            <Text style={styles.TextbtnText}>Clear All</Text>
                        </Pressable>
                        <Pressable style={styles.sliderButton}>
                            <Text style={styles.sliderButtonText}>Apply All</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}