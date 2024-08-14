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
import { useSelector } from 'react-redux';

export default function PopularFruitsSlider({ navigation,products }) {
    const listOfProducts=useSelector(state => state.productList.totalProductsList)
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
            
           
            
           {listOfProducts.map(item=>(
            <PopularFruitsSliderItem key={item.products_id} navigation={navigation} productItem={item} />
           ))}
             {/* <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} /> */}

            {/* <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} />
            <PopularFruitsSliderItem navigation={navigation} /> */}
        
        </SwiperFlatList>
    );
}