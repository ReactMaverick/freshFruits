import React from 'react';
import styles from './style';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import OtherFruitsSliderItem from '../OtherFruitsSliderItem/OtherFruitsSliderItem';
import { useSelector } from 'react-redux';

export default function OtherFruitsSlider({ navigation,productId=0 }) {
    const productList = useSelector(state => state.productList.totalProductsList);
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
            {/* <OtherFruitsSliderItem navigation={navigation} /> */}
     
{productList.filter((elements=>elements.id!==productId)).map(item=><OtherFruitsSliderItem key={item.products_id} productDetails={item} navigation={navigation} /> )}
<OtherFruitsSliderItem navigation={navigation} />
<OtherFruitsSliderItem navigation={navigation} />
<OtherFruitsSliderItem navigation={navigation} />


        </SwiperFlatList>
    );
}