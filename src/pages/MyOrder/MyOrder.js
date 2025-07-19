import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import { PRO1 } from '../../constants/images';
import Header from '../../components/Header/Header';
import Ctext from '../../components/Ctext';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MyOrder({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView style={commonStyles.safeAreaView}>
        < Header
          pageName={"My Order"}
          navigation={navigation}
          InnerPagesHeader={'InnerHeader'}
          BackBtn={'BackBtn'}
          CenterBox={"TitleBox"}
        />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.MainBox}>
            <View style={styles.OrderTabRow}>
              <Pressable style={styles.OrderTabBtnActive}>
                <Ctext style={styles.OrderTabTextActive}>Processing</Ctext>
              </Pressable>
              <Pressable style={styles.OrderTabBtn}>
                <Ctext style={styles.OrderTabText}>Delivered</Ctext>
              </Pressable>
              <Pressable style={styles.OrderTabBtn}>
                <Ctext style={styles.OrderTabText}>Canceled</Ctext>
              </Pressable>
            </View>
            <View style={styles.OrderBox}>
              {/* my order box  */}
              <View style={styles.OrderItemBox}>
                <View style={styles.OrderItemTop}>
                  <View style={styles.OrderItemTopLeft}>
                    <Image source={PRO1} resizeMode='cover' style={styles.OrderItemIcon} />
                    <View style={styles.OrderItemTopLeftText}>
                      <Ctext style={styles.OrderItemTitle}>Apple</Ctext>
                      <Ctext style={styles.OrderItemQunatity}>2Kg</Ctext>
                    </View>
                  </View>
                  <Ctext style={styles.orderIdText}>Order ID: <Ctext style={styles.orderId}>#596269</Ctext></Ctext>
                </View>
                <View style={styles.OrderItemBottom}>
                  <View style={styles.OrderItemStatus}>
                    <View style={styles.OrderItemStatusBox}>
                      <Ctext style={styles.OrderItemStatusText}>Estimate Delivery</Ctext>
                      <Ctext style={styles.OrderItemStatusTime}>25Min</Ctext>
                    </View>
                    <View style={styles.OrderItemStatusBox}>
                      <Ctext style={styles.OrderItemStatusText}>Status</Ctext>
                      <Ctext style={styles.OrderItemStatusTime}>On the Way</Ctext>
                    </View>
                  </View>
                  <View style={styles.OrderBtns}>
                    <Pressable style={styles.OrderBtn}>
                      <Ctext style={styles.OrderBtnText}>Cancel</Ctext>
                    </Pressable>
                    <Pressable style={styles.OrderBtn1}>
                      <Ctext style={styles.OrderBtnText1}>Track Order</Ctext>
                    </Pressable>
                  </View>
                </View>
              </View>
              {/* my order box  */}
              {/* my order box  */}
              <View style={styles.OrderItemBox}>
                <View style={styles.OrderItemTop}>
                  <View style={styles.OrderItemTopLeft}>
                    <Image source={PRO1} resizeMode='cover' style={styles.OrderItemIcon} />
                    <View style={styles.OrderItemTopLeftText}>
                      <Ctext style={styles.OrderItemTitle}>Apple</Ctext>
                      <Ctext style={styles.OrderItemQunatity}>2Kg</Ctext>
                    </View>
                  </View>
                  <Ctext style={styles.orderIdText}>Order ID: <Ctext style={styles.orderId}>#596269</Ctext></Ctext>
                </View>
                <View style={styles.OrderItemBottom}>
                  <View style={styles.OrderItemStatus}>
                    <View style={styles.OrderItemStatusBox}>
                      <Ctext style={styles.OrderItemStatusText}>Estimate Delivery</Ctext>
                      <Ctext style={styles.OrderItemStatusTime}>25Min</Ctext>
                    </View>
                    <View style={styles.OrderItemStatusBox}>
                      <Ctext style={styles.OrderItemStatusText}>Status</Ctext>
                      <Ctext style={styles.OrderItemStatusTime}>On the Way</Ctext>
                    </View>
                  </View>
                  <View style={styles.OrderBtns}>
                    <Pressable style={styles.OrderBtn}>
                      <Ctext style={styles.OrderBtnText}>Cancel</Ctext>
                    </Pressable>
                    <Pressable style={styles.OrderBtn1}>
                      <Ctext style={styles.OrderBtnText1}>Track Order</Ctext>
                    </Pressable>
                  </View>
                </View>
              </View>
              {/* my order box  */}
              {/* my order box  */}
              <View style={styles.OrderItemBox}>
                <View style={styles.OrderItemTop}>
                  <View style={styles.OrderItemTopLeft}>
                    <Image source={PRO1} resizeMode='cover' style={styles.OrderItemIcon} />
                    <View style={styles.OrderItemTopLeftText}>
                      <Ctext style={styles.OrderItemTitle}>Apple</Ctext>
                      <Ctext style={styles.OrderItemQunatity}>2Kg</Ctext>
                    </View>
                  </View>
                  <Ctext style={styles.orderIdText}>Order ID: <Ctext style={styles.orderId}>#596269</Ctext></Ctext>
                </View>
                <View style={styles.OrderItemBottom}>
                  <View style={styles.OrderItemStatus}>
                    <View style={styles.OrderItemStatusBox}>
                      <Ctext style={styles.OrderItemStatusText}>Estimate Delivery</Ctext>
                      <Ctext style={styles.OrderItemStatusTime}>25Min</Ctext>
                    </View>
                    <View style={styles.OrderItemStatusBox}>
                      <Ctext style={styles.OrderItemStatusText}>Status</Ctext>
                      <Ctext style={styles.OrderItemStatusTime}>On the Way</Ctext>
                    </View>
                  </View>
                  <View style={styles.OrderBtns}>
                    <Pressable style={styles.OrderBtn}>
                      <Ctext style={styles.OrderBtnText}>Cancel</Ctext>
                    </Pressable>
                    <Pressable style={styles.OrderBtn1}>
                      <Ctext style={styles.OrderBtnText1}>Track Order</Ctext>
                    </Pressable>
                  </View>
                </View>
              </View>
              {/* my order box  */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
