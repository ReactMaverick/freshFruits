import React from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList,
} from 'react-native';
import styles from './style';
import { colors } from '../../constants/colors';

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
                        <Text style={styles.categoryBtnText}>{item}</Text>
                    </Pressable>
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    );
}