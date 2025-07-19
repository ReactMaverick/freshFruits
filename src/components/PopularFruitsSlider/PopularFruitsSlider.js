import React, { useEffect, useRef, useState } from 'react';
import styles from './style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import PopularFruitsSliderItem from '../PopularFruitsSliderItem/PopularFruitsSliderItem';
import { useSelector } from 'react-redux';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';

export default function PopularFruitsSlider({ navigation, products, screen = false }) {
    const listOfProducts = useSelector(state => state.productList.newArrivedProductsList);
    const [dummyItemWidth, setDummyItemWidth] = useState(0);
    const itemRef = useRef();

    useEffect(() => {
        if (itemRef.current) {
            itemRef.current.measure((x, y, width, height, pageX, pageY) => {
                setDummyItemWidth(width);
            });
        }
    }, []);

    if (screen) {
        return (
            <KeyboardAvoidingView
                behavior={platform === 'ios' ? 'padding' : 'height'}
                style={commonStyles.keyboardAvoidingView}>
                <SafeAreaView style={commonStyles.safeAreaView}>
                    <ScrollView>
                        {listOfProducts?.length % 2 === 0 ? <View style={styles.pageBody}>
                            {listOfProducts.map(item => (
                                <PopularFruitsSliderItem key={item.products_id} navigation={navigation} productItem={item} />
                            ))}
                        </View> :
                            <>
                                <View style={styles.pageBody}>
                                    {listOfProducts.map((item, index) => {
                                        return <PopularFruitsSliderItem refference={index === 0 ? itemRef : null} key={item.products_id} navigation={navigation} productItem={item} />;
                                    })}
                                    <View style={{ width: dummyItemWidth }}></View>
                                </View>

                            </>
                        }
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    } else {
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
                {listOfProducts.map(item => (
                    <PopularFruitsSliderItem key={item.products_id} navigation={navigation} productItem={item} />
                ))}
            </SwiperFlatList>
        );
    }

}