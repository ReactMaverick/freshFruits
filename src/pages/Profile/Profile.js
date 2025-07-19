import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  View,
  StatusBar,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { FormInput } from 'react-native-formtastic';
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
  CAMERA,
  GALLERY
} from '../../constants/images';
import { Avatar, Button, colors } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  logout,
  selectUser_email,
  selectUser_name,
} from '../../redux/reducers/authReducer';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const user_name = useSelector(selectUser_name);
  const user_email = useSelector(selectUser_email);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handelSubmit = () => {
    setModalVisible(false);
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Password changed"
    });
    console.log(password);
    console.log(confirmPassword);

  }
  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs camera access to take photos',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
      return true; // iOS doesn't need explicit permission request
    } catch (err) {
      console.warn(err);
      return false;
    }

  };

  // Open Camera
  const openCamera = async () => {
    const isCameraPermitted = await requestCameraPermission();
    if (!isCameraPermitted) {
      Alert.alert('Permission Denied', 'Camera permission is required to take photos.');
      return;
    }

    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log('Camera error: ', response.errorMessage);
        Alert.alert('Camera Error', response.errorMessage);
      } else {
        const uri = response.assets && response.assets[0].uri;
        setImageUri(uri);
      }
    });
    setModalProfile(false)
  };

  // Open Gallery
  const openGallery = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Gallery error: ', response.errorMessage);
        Alert.alert('Gallery Error', response.errorMessage);
      } else {
        const uri = response.assets && response.assets[0].uri;
        setImageUri(uri);
      }
    });
    setModalProfile(false)
  };




  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}
    >
      <StatusBar backgroundColor="#DCDDAE" barStyle="dark-content" />
      <SafeAreaView style={commonStyles.safeAreaView}>
        <ScrollView style={styles.ScrollView}>
          <Image source={PROFILEBG} resizeMode="cover" style={styles.BGImage} />
          <View style={styles.MainBox}>
            <View style={styles.UserBox}>

              <View style={{ position: 'relative' }}>

                <Avatar
                  source={
                    imageUri
                      ? { uri: imageUri }
                      : PROFILEPIC
                  }
                  style={styles.ProfilePic}
                  rounded
                  size="large"
                />

                {/* <Avatar
                  style={styles.ProfilePic}
                  rounded
                  size="large"
                  source={PROFILEPIC}
                /> */}

                {/* Edit Icon Overlay */}
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'white', // Optional, to make the icon background more visible
                    borderRadius: 15,
                    padding: 5,
                  }}
                  onPress={() => { setModalProfile(true) }}
                >
                  <Feather name="edit-3" size={18} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.UserBoxEdit}>
                <Ctext style={styles.UserName}>{user_name}</Ctext>
                <Pressable style={styles.EditBtn}>
                  <Feather name="edit-3" style={styles.textInputIcon} />
                </Pressable>
              </View>
              <Ctext style={styles.UserEmail}>{user_email}</Ctext>
            </View>

            <View style={styles.ServiceBoxarea}>
              <View style={styles.ServiceItem}>
                <Pressable style={styles.ServiceBox}>
                  <Image
                    source={MASTERCARD}
                    resizeMode="cover"
                    style={styles.ServiceIcon}
                  />
                  <Ctext style={styles.ServiceText}>Payment</Ctext>
                </Pressable>
                <Pressable style={styles.ServiceBox}>
                  <Image
                    source={ONLINESUPPORT}
                    resizeMode="cover"
                    style={styles.ServiceIcon}
                  />
                  <Ctext style={styles.ServiceText}>Customer Support</Ctext>
                </Pressable>
                <Pressable style={styles.ServiceBox}>
                  <Image
                    source={WALLET}
                    resizeMode="cover"
                    style={styles.ServiceIcon}
                  />
                  <Ctext style={styles.ServiceText}>Wallet</Ctext>
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
                    <Ctext style={styles.MenuText}>Address</Ctext>
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
                    <Ctext style={styles.MenuText}>Transaction</Ctext>
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
                    <Ctext style={styles.MenuText}>Personal Info</Ctext>
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
                    <Ctext style={styles.MenuText}>Settings</Ctext>
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
                    <Ctext style={styles.MenuText}>Change Language</Ctext>
                  </View>
                  <Feather name="chevron-right" style={styles.MenuArrow} />
                </Pressable>

                <Pressable
                  style={styles.MenuList}
                  onPress={() => setModalVisible(true)}
                >
                  <View style={styles.MenuListLeft}>
                    <Image
                      source={ICON5}
                      resizeMode="cover"
                      style={styles.MenuIcon}
                    />
                    <Ctext style={styles.MenuText}>Change Password</Ctext>
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
                  // navigation.navigate('Login');
                }}
              >
                <Image
                  source={LOGOUT}
                  resizeMode="cover"
                  style={styles.LogOutIcon}
                />
                <Ctext style={styles.LogoutText}>Log Out</Ctext>
              </Pressable>
            </View>
          </View>


          {/* change password modal */}

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
          >
            <View
              style={{
                height: '35%',
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >

              <Ctext style={{ color: 'white', fontSize: 20, color: "black" }}>Change Password</Ctext>
              {/* Password Input */}
              <FormInput
                hideLabel
                inputType="password"
                placeholderText="Password"
                value={password}
                onTextChange={setPassword}
                renderLeftIcon={() => (
                  <AntDesign
                    name={isPasswordVisible ? 'unlock' : 'lock'}
                    style={styles.textInputIcon}
                  />
                )}
                renderRightIcon={() => (
                  <Feather
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    style={styles.textInputEyeIcon}
                  />
                )}
              />

              {/* Confirm Password Input */}
              <FormInput
                hideLabel
                value={confirmPassword}
                onTextChange={setConfirmPassword}
                inputType="password"
                placeholderText="Confirm Password"
                renderLeftIcon={() => (
                  <AntDesign
                    name="lock"
                    style={styles.textInputIcon}
                  />
                )}
                renderRightIcon={() => (
                  <Feather
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    style={styles.textInputEyeIcon}
                  />
                )}
              />

              {/* Submit Button */}
              <TouchableOpacity
                onPress={() => { handelSubmit() }}
                style={{
                  marginTop: 20,
                  backgroundColor: "blue",
                  paddingVertical: 10,
                  paddingHorizontal: 40,
                  borderRadius: 10,
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Ctext style={styles.registerText}>Submit</Ctext>
              </TouchableOpacity>
            </View>
          </Modal>

          {/* profile modal */}
          <Modal
            isVisible={modalProfile}
            onBackdropPress={() => setModalProfile(false)}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
          >
            <View
              style={{
                height: '35%',
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Ctext style={{ color: 'white', fontSize: 20, color: "black", fontWeight: "bold" }}>Select One</Ctext>
              <View style={{ flex: 1, flexDirection: "row", marginTop: 50, gap: 60 }}>
                <TouchableOpacity style={{ gap: 10 }} onPress={openGallery}>
                  <Avatar
                    style={styles.ProfilePic}
                    rounded
                    size="large"
                    source={GALLERY}
                  />
                  <Ctext style={{ fontWeight: "800", color: "black", alignItems: "center", textAlign: "center", }}>Gallery</Ctext>
                </TouchableOpacity>


                <TouchableOpacity style={{ gap: 10 }} onPress={openCamera} >
                  <Avatar
                    style={styles.ProfilePic}
                    rounded
                    size="large"
                    source={CAMERA}
                  />
                  <Ctext style={{ fontWeight: "800", color: "black", alignItems: "center", textAlign: "center", }}>Camera</Ctext>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* <Image
        source={
          imageUri
            ? { uri: imageUri }
            : require('../../constants/images')
        }
        style={{ width: 200, height: 200, marginTop: 20 }}
      /> */}



        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
