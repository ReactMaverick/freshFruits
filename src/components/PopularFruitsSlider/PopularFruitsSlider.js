import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native';
import styles from './style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import PopularFruitsSliderItem from '../PopularFruitsSliderItem/PopularFruitsSliderItem';

export default function PopularFruitsSlider({ navigation }) {
    return (
        <SwiperFlatList
            index={0}
            showPagination={false}
            paginationStyle={styles.paginationStyle}
            paginationStyleItem={styles.paginationStyleItem}
            paginationStyleItemActive={styles.paginationStyleItemActive}
            paginationActiveColor={colors.PrimaryColor}
            paginationDefaultColor={'#AAADA6'}
        >
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />

        </SwiperFlatList>
    );
}