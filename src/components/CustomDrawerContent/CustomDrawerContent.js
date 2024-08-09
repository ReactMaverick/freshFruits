import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from "./Style";
import { INFOBG, INFORMATION, LOCK, PROFILEPIC, RECEIPT, SETTINGS, SHARE, SHOP, SIDEBAR, TICKET } from '../../constants/images';
import { useSelector } from 'react-redux';
import { selectUser_name } from '../../redux/reducers/authReducer';


export default function CustomDrawerContent(props) {
    const userName=useSelector(selectUser_name)
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground source={SIDEBAR} style={styles.drawerHeader}>
                <Image source={PROFILEPIC} style={styles.profilePic} />
                <View style={styles.profileContent}>
                    <Text style={styles.drawerHeaderName}>{userName}</Text>
                    <Pressable>
                        <Text style={styles.drawerHeaderText}>View profile</Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <View style={styles.mainbox}>
                <View style={styles.ULBox}>
                    <Text style={styles.Heading}>Your Information</Text>
                    <View style={styles.ManuBox}>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={RECEIPT} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>Today Deals</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={SHOP} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>Gift voucher</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={TICKET} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>My coupons</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>

                    </View>
                </View>
                <View style={styles.ULBox}>
                    <Text style={styles.Heading}>Other Information</Text>
                    <View style={styles.ManuBox}>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={LOCK} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>Privacy</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={SETTINGS} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>Setting</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={INFORMATION} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>FAQ</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                        <Pressable style={styles.MenuList}>
                            <View style={styles.MenuListLeft}>
                                <Image source={SHARE} resizeMode='cover' style={styles.MenuIcon} />
                                <Text style={styles.MenuText}>Share App</Text>
                            </View>
                            <Feather name="chevron-right" style={styles.MenuArrow} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.BottomBoxs}>
                    <ImageBackground resizeMode='cover' source={INFOBG} style={styles.Infobg}>
                        <View style={styles.InfoBox}>
                            <Text style={styles.InfoText}>Rate our App</Text>
                            <Text style={styles.InfosubText}>We love appreciation & Feedback</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.CopyRightbox}>
                        <Text style={styles.CopyRightText}>App version 45.69.6</Text>
                        <Text style={styles.CopyRightTextCont}><Text style={styles.CopyRightTextColor}>User agreement. Terms of Service, </Text>
                            and <Text style={styles.CopyRightTextColor}>Privacy Policy</Text> of Fresh Fruit</Text>
                    </View>
                </View>
            </View>

        </DrawerContentScrollView>
    );
}