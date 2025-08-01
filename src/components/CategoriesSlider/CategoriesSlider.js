import React from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList,
} from 'react-native';
import styles from './style';
import { colors } from '../../constants/colors';
import Ctext from '../Ctext';

export default function CategoriesSlider({ navigation }) {
    const fruits = [
        'all',
        'Blueberry',
        'Strawberry',
        'Raspberry',
        'Blackberry',
        'Cherry',
        'Cranberry',
        'Orange',
        'Banana ',
        'Apple',
        'Pineapple',
        'Peach',
        'Mango',
        'Coconut',
        'Kiwi',
        'Watermelon',
    ];

    return (
        <FlatList
            data={fruits}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.categoryBox}>
                    <Pressable style={styles.categoryBtn}>
                        <Ctext style={styles.categoryBtnText}>{item}</Ctext>
                    </Pressable>
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    );
}