import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
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


export default function MyOrder({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        < Header
          navigation={navigation}
          leftContent={'backBtn'}
          MiddleContent={'pageTitle'}
          rightContent={'blankBox'}
          BGCOLOR={'transparent'}
        />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.MainBox}>
            <View style={styles.OrderTabRow}>
              <Pressable style={styles.OrderTabBtnActive}>
                <Text style={styles.OrderTabTextActive}>Processing</Text>
              </Pressable>
              <Pressable style={styles.OrderTabBtn}>
                <Text style={styles.OrderTabText}>Delivered</Text>
              </Pressable>
              <Pressable style={styles.OrderTabBtn}>
                <Text style={styles.OrderTabText}>Canceled</Text>
              </Pressable>
            </View>
            <View style={styles.OrderBox}>
              {/* my order box  */}
              <View style={styles.OrderItemBox}>
                <View style={styles.OrderItemTop}>
                  <View style={styles.OrderItemTopLeft}>
                    <Image source={PRO1} resizeMode='cover' style={styles.OrderItemIcon} />
                    <View style={styles.OrderItemTopLeftText}>
                      <Text style={styles.OrderItemTitle}>Apple</Text>
                      <Text style={styles.OrderItemQunatity}>2Kg</Text>
                    </View>
                  </View>
                  <Text style={styles.orderIdText}>Order ID: <Text style={styles.orderId}>#596269</Text></Text>
                </View>
                <View style={styles.OrderItemBottom}>
                  <View style={styles.OrderItemStatus}>
                    <View style={styles.OrderItemStatusBox}>
                      <Text style={styles.OrderItemStatusText}>Estimate Delivery</Text>
                      <Text style={styles.OrderItemStatusTime}>25Min</Text>
                    </View>
                    <View style={styles.OrderItemStatusBox}>
                      <Text style={styles.OrderItemStatusText}>Status</Text>
                      <Text style={styles.OrderItemStatusTime}>On the Way</Text>
                    </View>
                  </View>
                  <View style={styles.OrderBtns}>
                    <Pressable style={styles.OrderBtn}>
                      <Text style={styles.OrderBtnText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.OrderBtn1}>
                      <Text style={styles.OrderBtnText1}>Track Order</Text>
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
                      <Text style={styles.OrderItemTitle}>Apple</Text>
                      <Text style={styles.OrderItemQunatity}>2Kg</Text>
                    </View>
                  </View>
                  <Text style={styles.orderIdText}>Order ID: <Text style={styles.orderId}>#596269</Text></Text>
                </View>
                <View style={styles.OrderItemBottom}>
                  <View style={styles.OrderItemStatus}>
                    <View style={styles.OrderItemStatusBox}>
                      <Text style={styles.OrderItemStatusText}>Estimate Delivery</Text>
                      <Text style={styles.OrderItemStatusTime}>25Min</Text>
                    </View>
                    <View style={styles.OrderItemStatusBox}>
                      <Text style={styles.OrderItemStatusText}>Status</Text>
                      <Text style={styles.OrderItemStatusTime}>On the Way</Text>
                    </View>
                  </View>
                  <View style={styles.OrderBtns}>
                    <Pressable style={styles.OrderBtn}>
                      <Text style={styles.OrderBtnText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.OrderBtn1}>
                      <Text style={styles.OrderBtnText1}>Track Order</Text>
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
                      <Text style={styles.OrderItemTitle}>Apple</Text>
                      <Text style={styles.OrderItemQunatity}>2Kg</Text>
                    </View>
                  </View>
                  <Text style={styles.orderIdText}>Order ID: <Text style={styles.orderId}>#596269</Text></Text>
                </View>
                <View style={styles.OrderItemBottom}>
                  <View style={styles.OrderItemStatus}>
                    <View style={styles.OrderItemStatusBox}>
                      <Text style={styles.OrderItemStatusText}>Estimate Delivery</Text>
                      <Text style={styles.OrderItemStatusTime}>25Min</Text>
                    </View>
                    <View style={styles.OrderItemStatusBox}>
                      <Text style={styles.OrderItemStatusText}>Status</Text>
                      <Text style={styles.OrderItemStatusTime}>On the Way</Text>
                    </View>
                  </View>
                  <View style={styles.OrderBtns}>
                    <Pressable style={styles.OrderBtn}>
                      <Text style={styles.OrderBtnText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.OrderBtn1}>
                      <Text style={styles.OrderBtnText1}>Track Order</Text>
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
