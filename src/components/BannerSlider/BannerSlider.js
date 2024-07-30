import React from 'react';
import styles from './style';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import BannerSliderItem from '../BannerSliderItem/BannerSliderItem';

export default function BannerSlider({ navigation }) {
    return (

        <SwiperFlatList
            index={0}
            showPagination
            paginationStyle={styles.paginationStyle}
            paginationStyleItem={styles.paginationStyleItem}
            paginationStyleItemActive={styles.paginationStyleItemActive}
            paginationActiveColor={colors.PrimaryColor}
            paginationDefaultColor={'#AAADA6'}
        >
            <BannerSliderItem />
            <BannerSliderItem />
            <BannerSliderItem />
        </SwiperFlatList>
    );
}