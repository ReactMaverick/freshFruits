import React from 'react';
import styles from './style';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import OtherFruitsSliderItem from '../OtherFruitsSliderItem/OtherFruitsSliderItem';

export default function OtherFruitsSlider({ navigation }) {
    return (
        <SwiperFlatList
            index={0}
            autoplay
            autoplayDelay={3}
            autoplayLoop
            showPagination={false}
            paginationStyle={styles.paginationStyle}
            paginationStyleItem={styles.paginationStyleItem}
            paginationStyleItemActive={styles.paginationStyleItemActive}
            paginationActiveColor={colors.PrimaryColor}
            paginationDefaultColor={'#AAADA6'}
        >
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />
            <OtherFruitsSliderItem navigation={navigation} />

        </SwiperFlatList>
    );
}