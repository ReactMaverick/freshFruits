import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from "./Style";
import { INFOBG, INFORMATION, LOCK, PROFILEPIC, RECEIPT, SETTINGS, SHARE, SHOP, SIDEBAR, TICKET } from '../../constants/images';
import { useSelector } from 'react-redux';
import { selectUser_name } from '../../redux/reducers/authReducer';
import Ctext from '../Ctext';
import { wp } from '../../constants/constants';


export default function CustomDrawerContent(props) {
    const userName = useSelector(selectUser_name)
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground source={SIDEBAR} style={styles.drawerHeader}>
                <Image source={PROFILEPIC} style={styles.profilePic} />
                <View style={styles.profileContent}>
                    <Ctext style={styles.drawerHeaderName}>{userName}</Ctext>
                    <Pressable onPress={() => props.navigation.navigate('Profile')}>
                        <Ctext style={styles.drawerHeaderText}>View profile</Ctext>
                    </Pressable>
                </View>
            </ImageBackground>
            <View style={styles.mainbox}>
                <View style={styles.ULBox}>
                    <Ctext style={styles.Heading}>Your Information</Ctext>
                    <View style={styles.ManuBox}>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={RECEIPT} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>Today Deals</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={SHOP} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>Gift voucher</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={TICKET} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>My coupons</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>

                    </View>
                </View>
                <View style={styles.ULBox}>
                    <Ctext style={styles.Heading}>Other Information</Ctext>
                    <View style={styles.ManuBox}>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={LOCK} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>Privacy</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={SETTINGS} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>Setting</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={INFORMATION} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>FAQ</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={SHARE} resizeMode='cover' style={styles.MenuIcon} />
                                <Ctext style={styles.MenuText}>Share App</Ctext>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.BottomBoxs}>
                    <ImageBackground resizeMode='cover' source={INFOBG} style={styles.Infobg}>
                        <View style={styles.InfoBox}>
                            <Ctext style={styles.InfoText}>Rate our App</Ctext>
                            <Ctext style={styles.InfosubText}>We love appreciation & Feedback</Ctext>
                        </View>
                    </ImageBackground>
                    <View style={styles.CopyRightbox}>
                        <Ctext style={styles.CopyRightText}>App version 45.69.6</Ctext>
                        <Ctext style={styles.CopyRightTextCont}><Ctext style={styles.CopyRightTextColor}>User agreement. Terms of Service, </Ctext>
                            and <Ctext style={styles.CopyRightTextColor}>Privacy Policy</Ctext> of Fresh Fruit</Ctext>
                    </View>
                </View>
            </View>

        </DrawerContentScrollView>
    );
}