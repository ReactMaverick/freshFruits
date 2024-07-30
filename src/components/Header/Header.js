import {
    View,
    KeyboardAvoidingView,
    Pressable,
    Animated,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect, useRef } from 'react';
import { styles } from './Style';
import { Badge, Text } from 'react-native-elements';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { Image } from 'react-native';
import { BAR, FILTER } from '../../constants/images';
import { colors } from '../../constants/colors';
import { FormInput } from 'react-native-formtastic';

// import Animated from 'react-native-reanimated';
const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
};

export default function Header({ leftContent, MiddleContent, rightContent, navigation, pageName, BGCOLOR, BottomBar }) {
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


    return (
        <KeyboardAvoidingView
            behavior={platform === 'ios' ? 'padding' : 'height'}
            style={commonStyles.keyboardAvoidingView1}>
            <View style={[styles.headerAreaOuter, { backgroundColor: BGCOLOR }]}>
                <View style={styles.headerArea}>
                    {leftContent == "HomeLeft" &&
                        <View style={styles.headerLeft}>
                            <Text style={styles.leftTitle}>Deliver In</Text>
                            <Text style={styles.leftSubTitle}>Every Fruit 10 minutes</Text>
                            {/* location box */}
                            <Pressable style={styles.locationBox}>
                                <Octicons name="location"
                                    style={styles.locationIcon} />
                                <Text style={styles.locationText}> {truncateText(locationText, 5)}</Text>
                                <Octicons name="chevron-down" style={styles.locationIcon} />
                            </Pressable>
                        </View>}
                    {leftContent == "backBtn" && <View style={styles.backbtn}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" style={styles.BackBtnArrow} />
                        </Pressable>
                    </View>}

                    {MiddleContent == "Title" && <View style={styles.CenterBar}>
                        <Text style={styles.TitleText}>Home</Text>
                    </View>}

                    {rightContent == "blankBox" && <View style={styles.blankBox}></View>}

                    {/* notification bell button  */}
                    {rightContent == "HomeRight" &&
                        <View style={styles.RightSide}>
                            <Pressable
                                style={styles.bellBtn}
                                onPress={() => { navigation.navigate('Notification') }}
                            >
                                <Animated.View style={[animatedStyle, styles.NotificationBellIcon]}>
                                    <FontAwesome name="bell" style={styles.NotificationIcon} /></Animated.View>
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
                                style={styles.SideBarBtn}>
                                <Image source={BAR} style={styles.SideBarIcon} />
                            </Pressable>
                        </View>}
                </View>
                {BottomBar == "SearchBox" &&
                    <View style={styles.SearchBox}>
                        <FormInput
                            mainContainerStyle={styles.mainContainerStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            textInputProps={{ style: styles.textInputStyle }}
                            hideLabel
                            placeholderText="Search fruit....."
                            leftIcon
                            renderLeftIcon={() => <FontAwesome name="search" style={styles.textInputIcon} />}
                            rightIcon
                            rightIconOnPress={() => { }}
                            renderRightIcon={() => <View style={styles.filterIconBox}><Image source={FILTER} style={styles.filterIcon} /></View>}
                        />
                    </View>}
            </View>
        </KeyboardAvoidingView>
    );
}