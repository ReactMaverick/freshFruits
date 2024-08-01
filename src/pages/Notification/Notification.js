import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  Touchable,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { FormInput } from 'react-native-formtastic';
import React, { } from 'react';
import { ICON1, ICON2, ICON3, ICON4, ICON5, LOGOUT, MASTERCARD, NOTIFI1, ONLINESUPPORT, PROFILEBG, PROFILEPIC, WALLET } from '../../constants/images';
import { StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Header';


export default function Notification({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
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
              <Text style={styles.HeadingText}>Today</Text>
            </View>
            <FlatList style={styles.FlatList}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              data={[
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

              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <Pressable style={styles.NotificationBox}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Image source={item.icon} resizeMode='cover' style={styles.NotificationIcon} />
                  <View style={styles.NotificationContent}>
                    <Text style={styles.NotificationTitle}>{item.title}</Text>
                    <Text style={styles.NotificationDescription}>{item.description}</Text>
                  </View>
                </Pressable>
              }
            />
            <View style={{ paddingTop: 0 }}>
              <View style={styles.HeadingBox}>
                <Text style={styles.HeadingText}>Yesterday</Text>
              </View>
              <FlatList style={styles.FlatList}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                data={[
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

                ]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <Pressable style={styles.NotificationBox}
                    onPress={() => navigation.navigate('Profile')}
                  >
                    <Image source={item.icon} resizeMode='cover' style={styles.NotificationIcon} />
                    <View style={styles.NotificationContent}>
                      <Text style={styles.NotificationTitle}>{item.title}</Text>
                      <Text style={styles.NotificationDescription}>{item.description}</Text>
                    </View>
                  </Pressable>
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
