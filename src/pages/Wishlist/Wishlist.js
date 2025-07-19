import {
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import {platform, showToast} from '../../constants/constants';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import PopularFruitsSliderItem from '../../components/PopularFruitsSliderItem/PopularFruitsSliderItem';
import {getData} from '../../values/api/apiprovider';
import {VIEW_WISHLIST_URL} from '../../values/api/url';
import {useSelector} from 'react-redux';
import {
  selectUser_Id,
  selectUser_session_Id,
} from '../../redux/reducers/authReducer';
import {useIsFocused} from '@react-navigation/native';
import {Text} from 'react-native-elements';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

// const data = [
//   { id: '1' },
//   { id: '2' },
//   { id: '3' },
//   { id: '4' },
//   { id: '5' },
//   { id: '6' },
//   { id: '7' },
// ];
export default function Wishlist({navigation}) {
  const user_Id = useSelector(selectUser_Id);
  const userSession_Id = useSelector(selectUser_session_Id);
  // const [wishlistItems,setWishlistItems]=useState([])
  const wishListItems = useSelector(state => state.wishlist);

  const isFocus = useIsFocused();
  useEffect(() => {
    console.log("eneterd in use effect")
    if ( !wishListItems.success) {
      showToast('info', 'Login and Try After Sometime');
    }
  }, [wishListItems.success]);
  // const getWishlist=async()=>{
  //   console.log("wishlist fetching in progress")
  //   try {
  //     const response = await getData(VIEW_WISHLIST_URL(user_Id));
  //     const data = await response;
  // console.log("the length of the wishlist response is",data.result.length)
  //    console.log("the message provided by view wishlist api is --- ---- ",data)
  //     if(data.status){
  // setWishlistItems(data.result)
  //     }
  //     else{
  //       showToast('error',"Login and Try after Sometime")
  //     }
  //   }
  //    catch (error) {
  //     console.error('Error occured in view wishlist cart :', error.message);
  //       showToast('error',"Login and Try after Sometime")
  //   }
  // }
  // getWishlist()

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        <Header
          pageName={'Wishlist'}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={'TitleBox'}
        />

        {/* <ScrollView style={styles.ScrollView}> */}
        <View style={styles.MainBox}>
          {wishListItems.wishlist_items.length > 0 ? (
            <FlatList
              data={wishListItems.wishlist_items}
              renderItem={({item}) => (
                <PopularFruitsSliderItem
                  key={item.products_id}
                  productItem={item}
                  navigation={navigation}
                />
              )}
              keyExtractor={item => item.products_id}
              numColumns={2}
              columnWrapperStyle={styles.column}
            />
         ) : ( 
             wishListItems.success ? (
              <Ctext style={styles.nullText}>Wishlist is empty</Ctext>
            ) : (
              <Ctext>Login and Try after some time</Ctext>
            )
          )} 
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
