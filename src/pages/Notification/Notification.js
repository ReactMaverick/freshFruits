import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  Touchable,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform, wp } from '../../constants/constants';
import { FormInput } from 'react-native-formtastic';
import React, { } from 'react';
import { ICON1, ICON2, ICON3, ICON4, ICON5, LOGOUT, MASTERCARD, NOTIFI1, ONLINESUPPORT, PROFILEBG, PROFILEPIC, WALLET } from '../../constants/images';
import { StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Header';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyData1 = [
  {
    title: 'Order Confirmation',
    description: '"Your fresh fruit order is on its way! 🍎🍊🍇 Get ready to enjoy natures sweetness!"',
    icon: NOTIFI1
  },
  {
    title: 'Promotion Alert',
    description: '"Limited Time Offer! Get 20% off on all tropical fruits today. 🥭🍍 Dont miss out!"',
    icon: NOTIFI1
  },
  {
    title: 'New Arrival Notification',
    description: '"New Season, New Flavors! 🍑🍒 Check out our latest arrivals and savor the freshness."',
    icon: NOTIFI1
  },
];

const dummyData2 = [
  {
    title: 'Health Tip',
    description: '"Boost Your Day with a Vitamin C Kick! 🍊🍋 Discover our citrus collection for a healthy start."',
    icon: NOTIFI1
  },
  {
    title: 'Subscription Reminder',
    description: '"Stay Fresh! 🌟 Your fruit subscription renews tomorrow. Update your preferences for a personalized experience."',
    icon: NOTIFI1
  },
];


export default function Notification({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        < Header
          pageName={"Notification"}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={"TitleBox"}
          ClearAllBtn={"ClearAll"}
        />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.MainBox}>
            <View style={styles.HeadingBox}>
              <Ctext style={styles.HeadingText}>Today</Ctext>
            </View>
            <View style={{ gap: wp(2) }}>
              {dummyData1.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    style={styles.NotificationBox}
                    onPress={() => navigation.navigate('Profile')}
                  >
                    <Image source={item.icon} resizeMode='cover' style={styles.NotificationIcon} />
                    <View style={styles.NotificationContent}>
                      <Ctext style={styles.NotificationTitle}>{item.title}</Ctext>
                      <Ctext style={styles.NotificationDescription}>{item.description}</Ctext>
                    </View>
                  </Pressable>
                )
              })}
            </View>
            <View style={{ paddingTop: 0 }}>
              <View style={styles.HeadingBox}>
                <Ctext style={styles.HeadingText}>Yesterday</Ctext>
              </View>
              <View style={{ gap: wp(2) }}>
                {
                  dummyData2.map((item, index) => {
                    return (
                      <Pressable
                        key={index}
                        style={styles.NotificationBox}
                        onPress={() => navigation.navigate('Profile')}
                      >
                        <Image source={item.icon} resizeMode='cover' style={styles.NotificationIcon} />
                        <View style={styles.NotificationContent}>
                          <Ctext style={styles.NotificationTitle}>{item.title}</Ctext>
                          <Ctext style={styles.NotificationDescription}>{item.description}</Ctext>
                        </View>
                      </Pressable>
                    )
                  })
                }
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
