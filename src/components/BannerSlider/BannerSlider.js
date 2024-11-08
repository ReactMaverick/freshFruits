import React from 'react';
import styles from './style';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../constants/colors'; // Ensure colors is imported if used
import BannerSliderItem from '../BannerSliderItem/BannerSliderItem';
import { Text } from 'react-native-elements';

export default function BannerSlider({ navigation }) {
    return (

      
        <SwiperFlatList autoplay autoplayDelay={4} autoplayLoop index={1} showPagination>
        
            <BannerSliderItem />
            <BannerSliderItem />
            <BannerSliderItem />
            <BannerSliderItem />
            <BannerSliderItem />
            <BannerSliderItem />
            {/* <Text>hhh</Text> */}
        </SwiperFlatList>
    );
}
// import React from 'react';
// import styles from './style';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import { colors } from '../../constants/colors'; // Ensure colors is imported if used
// import BannerSliderItem from '../BannerSliderItem/BannerSliderItem';

// export default function BannerSlider({ navigation }) {
//     return (
//         <SwiperFlatList
//             index={0}
//             autoplay // Enables auto sliding
//             autoplayDelay={10} // Delay between slides in seconds
//             autoplayLoop // Ensures the slides loop infinitely
//             showPagination
//             paginationStyle={styles.paginationStyle}
//             paginationStyleItem={styles.paginationStyleItem}
//             paginationStyleItemActive={styles.paginationStyleItemActive}
//             paginationActiveColor={colors.PrimaryColor}
//             paginationDefaultColor={'#AAADA6'}
//         >
//             {/* Add your slide items here */}
//             <BannerSliderItem />
//             <BannerSliderItem />
//             <BannerSliderItem />
//         </SwiperFlatList>
//     );
// }
