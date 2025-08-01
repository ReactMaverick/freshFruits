import {
    View,
    Pressable,
    Animated,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useState, useEffect, useRef } from 'react';
import { styles } from './Style';
import { Badge, Text } from 'react-native-elements';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { Image } from 'react-native';
import { BAR, FILTER } from '../../constants/images';
import { colors } from '../../constants/colors';
import { FormInput } from 'react-native-formtastic';
import LocationBottomSheet from '../LocationBottomSheet/LocationBottomSheet';
import FilterPopup from '../FilterPopup/FilterPopup';
import Ctext from '../Ctext';
import { p } from '../../constants/fontConstants';

// import Animated from 'react-native-reanimated';
const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
};

export default function Header({ leftContent, HomeHeader, InnerPagesHeader, rightContent, navigation, pageName, BGCOLOR, BottomBar, BlankBox, WishListBtn, ClearAllBtn, BackBtn, CenterBox }) {
    const locationText = "2972 Westheimer Rd. Santa Ana, Illinois";
    // notification bell animation 
    const [notificationCount, setNotificationCount] = useState(0);
    const animatedValue = useState(new Animated.Value(0))[0];

    useEffect(() => {
        setNotificationCount(5);
    }, []);

    const animatedStyle = {
        transform: [

            {
                rotate: animatedValue.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['-8deg', '8deg'] // Rotation range for the ringing effect
                })
            }
        ]
    };
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const [isFilterPopupVisible, setFilterPopupVisible] = useState(false);

    const toggleFilterPopup = () => {
        setFilterPopupVisible(!isFilterPopupVisible);
    };

    return (
        <>
            {HomeHeader == "HomeHeader" &&
                <View style={[styles.headerAreaOuter, { backgroundColor: BGCOLOR }]}>
                    <View style={styles.headerArea}>
                        {leftContent == "HomeLeft" &&
                            <View style={styles.headerLeft}>
                                {/* <Ctext style={styles.leftTitle}>Deliver In</Ctext> */}
                                <Ctext style={styles.leftSubTitle}>Welcome...</Ctext>
                                <Ctext style={{ fontSize: 15, fontWeight: '600', color: 'gray', }}>Gouranga Ghosh</Ctext>
                                {/* location box */}
                                {/* <Pressable onPress={toggleBottomSheet} style={styles.locationBox}>
                                    <Octicons name="location"
                                        style={styles.locationIcon} />
                                    <Ctext style={styles.locationText}> {truncateText(locationText, 5)}</Ctext>
                                    <Octicons name="chevron-down" style={styles.locationIcon} />
                                    <LocationBottomSheet isVisible={isBottomSheetVisible} onClose={toggleBottomSheet} />
                                </Pressable> */}
                            </View>}

                        {rightContent == "HomeRight" &&
                            <View style={styles.RightSide}>
                                <Pressable
                                    style={styles.bellBtn}
                                    onPress={() => { navigation.navigate('Notification') }}
                                >
                                    <Animated.View style={[animatedStyle, styles.NotificationBellIcon]}>
                                        <FontAwesome name="bell" style={styles.NotificationIcon} />
                                    </Animated.View>
                                    <Badge value={notificationCount > 0 ? notificationCount.toString() : ""}
                                        status="success"
                                        badgeStyle={{ backgroundColor: colors.SecondoryColor }}
                                        containerStyle={{
                                            position: 'absolute',
                                            top: notificationCount ? 8 : 15,
                                            right: notificationCount ? 8 : 15
                                        }}
                                    />
                                </Pressable>
                                <Pressable
                                    style={styles.SideBarBtn}
                                    onPress={() => { navigation.toggleDrawer() }}
                                >
                                    <Image source={BAR} style={styles.SideBarIcon} />
                                </Pressable>
                            </View>}
                    </View>
                    {BottomBar == "SearchBox" &&
                        <View style={styles.SearchBox}>

                            {/* <FormInput
                                mainContainerStyle={styles.mainContainerStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                textInputProps={{ style: styles.textInputStyle }}
                                hideLabel
                                placeholderText="Search fruit....."
                                leftIcon
                                renderLeftIcon={() => <FontAwesome name="search" style={styles.textInputIcon} />}

                            // renderRightIcon={() => <View style={styles.filterIconBox}><Image source={FILTER} style={styles.filterIcon} /></View>}
                            /> */}
                            <FontAwesome name="search" style={styles.textInputIcon} />
                            <TextInput placeholderTextColor={colors.black} placeholder="Search fruit....." style={styles.textInputStyle} />
                            <TouchableOpacity onPress={toggleFilterPopup} style={styles.filterBTN}>
                                <FontAwesome name="filter" style={{ color: colors.black, fontSize: p, alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <FilterPopup isVisible={isFilterPopupVisible} onClose={toggleFilterPopup} />
                        </View>}
                </View>}
            {InnerPagesHeader == "InnerHeader" &&
                <View style={[styles.InnerHeader, { backgroundColor: BGCOLOR }]}>
                    {BackBtn == "BackBtn" &&
                        <View style={styles.InnerHeaderLeft}>
                            <Pressable style={styles.BackBtn} onPress={() => navigation.goBack()}>
                                <FontAwesome6 name="angle-left" style={styles.BackBtnArrow} />
                            </Pressable>
                        </View>}
                    {CenterBox == "TitleBox" &&
                        <View style={styles.InnerHeaderCenter}>
                            <Ctext style={styles.InnerHeaderTitle}>{pageName}</Ctext>
                        </View>}
                    <View style={styles.InnerHeaderRight}>
                        {BlankBox == "Blank" &&
                            <View style={styles.BlankBox} />}
                        {WishListBtn == "WishList" &&
                            <View style={styles.WishListBox}>
                                <FontAwesome name="heart" style={styles.WishListIcon} />
                            </View>}
                        {ClearAllBtn == "ClearAll" &&
                            <Pressable style={styles.ClearAllBox}>
                                <Ctext style={styles.ClearAllText}>Clear All</Ctext>
                            </Pressable>}


                    </View>
                </View>}

        </>
    );
}