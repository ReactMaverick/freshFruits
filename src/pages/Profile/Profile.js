import {
  Alert,
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
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform} from '../../constants/constants';
import {FormInput} from 'react-native-formtastic';
import React from 'react';
import {
  ICON1,
  ICON2,
  ICON3,
  ICON4,
  ICON5,
  LOGOUT,
  MASTERCARD,
  ONLINESUPPORT,
  PROFILEBG,
  PROFILEPIC,
  WALLET,
} from '../../constants/images';
import {StatusBar} from 'react-native';
import {Avatar} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  logout,
  selectUser_email,
  selectUser_name,
} from '../../redux/reducers/authReducer';

export default function Profile({navigation}) {
  const user_name = useSelector(selectUser_name);
  const user_email = useSelector(selectUser_email);
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <StatusBar backgroundColor="#DCDDAE" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={styles.ScrollView}>
          <Image source={PROFILEBG} resizeMode="cover" style={styles.BGImage} />
          <View style={styles.MainBox}>
            <View style={styles.UserBox}>
              <Avatar
                style={styles.ProfilePic}
                rounded
                size="large"
                source={PROFILEPIC}
              />
              <View style={styles.UserBoxEdit}>
                <Text style={styles.UserName}>{user_name}</Text>
                <Pressable style={styles.EditBtn}>
                  <Feather name="edit-3" style={styles.textInputIcon} />
                </Pressable>
              </View>
              <Text style={styles.UserEmail}>{user_email}</Text>
            </View>
            <View style={styles.ServiceBoxarea}>
              <View style={styles.ServiceItem}>
                <Pressable style={styles.ServiceBox}>
                  <Image
                    source={MASTERCARD}
                    resizeMode="cover"
                    style={styles.ServiceIcon}
                  />
                  <Text style={styles.ServiceText}>Payment</Text>
                </Pressable>
                <Pressable style={styles.ServiceBox}>
                  <Image
                    source={ONLINESUPPORT}
                    resizeMode="cover"
                    style={styles.ServiceIcon}
                  />
                  <Text style={styles.ServiceText}>Customer Support</Text>
                </Pressable>
                <Pressable style={styles.ServiceBox}>
                  <Image
                    source={WALLET}
                    resizeMode="cover"
                    style={styles.ServiceIcon}
                  />
                  <Text style={styles.ServiceText}>Wallet</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.ServiceBoxarea}>
              <View style={styles.ManuBox}>
                <Pressable style={styles.MenuList}>
                  <View style={styles.MenuListLeft}>
                    <Image
                      source={ICON1}
                      resizeMode="cover"
                      style={styles.MenuIcon}
                    />
                    <Text style={styles.MenuText}>Address</Text>
                  </View>
                  <Feather name="chevron-right" style={styles.MenuArrow} />
                </Pressable>
                <Pressable style={styles.MenuList}>
                  <View style={styles.MenuListLeft}>
                    <Image
                      source={ICON2}
                      resizeMode="cover"
                      style={styles.MenuIcon}
                    />
                    <Text style={styles.MenuText}>Transaction</Text>
                  </View>
                  <Feather name="chevron-right" style={styles.MenuArrow} />
                </Pressable>
                <Pressable style={styles.MenuList}>
                  <View style={styles.MenuListLeft}>
                    <Image
                      source={ICON3}
                      resizeMode="cover"
                      style={styles.MenuIcon}
                    />
                    <Text style={styles.MenuText}>Person Info</Text>
                  </View>
                  <Feather name="chevron-right" style={styles.MenuArrow} />
                </Pressable>
                <Pressable style={styles.MenuList}>
                  <View style={styles.MenuListLeft}>
                    <Image
                      source={ICON4}
                      resizeMode="cover"
                      style={styles.MenuIcon}
                    />
                    <Text style={styles.MenuText}>Setting</Text>
                  </View>
                  <Feather name="chevron-right" style={styles.MenuArrow} />
                </Pressable>
                <Pressable style={styles.MenuList}>
                  <View style={styles.MenuListLeft}>
                    <Image
                      source={ICON5}
                      resizeMode="cover"
                      style={styles.MenuIcon}
                    />
                    <Text style={styles.MenuText}>Change language</Text>
                  </View>
                  <Feather name="chevron-right" style={styles.MenuArrow} />
                </Pressable>
              </View>
            </View>
            <View style={styles.LogoutBox}>
              <Pressable
                style={styles.LogoutBtn}
                onPress={() => {
                  dispatch(logout());
                 // navigation.navigate('Login')
                }}>
                <Image
                  source={LOGOUT}
                  resizeMode="cover"
                  style={styles.LogOutIcon}
                />
                <Text style={styles.LogoutText}>Log Out</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
