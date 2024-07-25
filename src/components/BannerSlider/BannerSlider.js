import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import styles from './style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import BannerSliderItem from '../BannerSliderItem/BannerSliderItem';

export default function BannerSlider({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={platform === 'ios' ? 'padding' : 'height'}
            style={commonStyles.keyboardAvoidingView}>
            <SafeAreaView>
                <SwiperFlatList
                    index={0}
                    showPagination
                    paginationStyle={styles.paginationStyle}
                    paginationStyleItem={styles.paginationStyleItem}
                    paginationStyleItemActive={styles.paginationStyleItemActive}
                    paginationActiveColor={colors.PrimaryColor}
                    paginationDefaultColor={'red'}
                >
                    <BannerSliderItem />
                    <BannerSliderItem />
                    <BannerSliderItem />
                </SwiperFlatList>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}