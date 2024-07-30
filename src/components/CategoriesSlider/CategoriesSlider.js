import React from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';
import styles from './style';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
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

        <SwiperFlatList
            index={0}
            loop={false}
            showPagination={false}
            paginationStyle={styles.paginationStyle}
            paginationStyleItem={styles.paginationStyleItem}
            paginationStyleItemActive={styles.paginationStyleItemActive}
            paginationActiveColor={colors.PrimaryColor}
            paginationDefaultColor={'#AAADA6'}
        >
            {fruits.map((item, index) => (
                <View style={styles.categoryBox} key={index}>
                    <Pressable style={styles.categoryBtn} key={index}>
                        <Text style={styles.categoryBtnText}>{item}</Text>
                    </Pressable>
                </View>
            ))
            }
        </SwiperFlatList>
    );
}