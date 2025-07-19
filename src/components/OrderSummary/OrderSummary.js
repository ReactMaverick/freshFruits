import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
import {PRO2, PRO3, PRO6} from '../../constants/images';
import {useSelector} from 'react-redux';
import Ctext from '../Ctext';

export default function OrderSummary({navigation}) {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <View style={styles.OrderSummaryOuter}>
      <View style={styles.OrderSummaryInner}>
        <View style={styles.OrderSummaryUl}>
          {cartItems.map(item => (
            <View key={item.products_id} style={styles.OrderSummaryLi}>
              <View style={styles.OrderSummaryLeft}>
                <Image source={PRO2} style={styles.OrderSummaryImg} />
                <View style={styles.OrderSummaryText}>
                  <Ctext style={styles.OrderSummaryTitle}>{item.products_name}</Ctext>
                  <Ctext style={styles.ProductWeight}>1kg</Ctext>
                  <Ctext style={styles.sliderCardText}>
                    {' '}
                    ${Number(item.afterDiscountPrice)} <Ctext style={styles.sliderCardTextCut}> ${Number(item.final_price)}</Ctext>
                  </Ctext>
                </View>
              </View>
              <View style={styles.OrderSummaryRight}>
                <Ctext style={styles.OrderSummaryQuantity}>{item.customers_basket_quantity}x</Ctext>
              </View>
            </View>
          ))}

          {/* <View style={styles.OrderSummaryLi}>
                        <View style={styles.OrderSummaryLeft}>
                            <Image source={PRO3} style={styles.OrderSummaryImg} />
                            <View style={styles.OrderSummaryText}>
                                <Ctext style={styles.OrderSummaryTitle}>Mango</Ctext>
                                <Ctext style={styles.ProductWeight}>1kg</Ctext>
                                <Ctext style={styles.sliderCardText}> $19 <Ctext style={styles.sliderCardTextCut}> $22</Ctext></Ctext>
                            </View>
                        </View>
                        <View style={styles.OrderSummaryRight}>
                            <Ctext style={styles.OrderSummaryQuantity}>1x</Ctext>
                        </View>
                    </View>
*/}
        </View>
        <View style={styles.OrderitemsUl}>
          <View style={styles.OrderSummaryRow}>
            <Ctext style={styles.OrderSummaryLeftText}>Total items</Ctext>
            <Ctext style={styles.OrderSummaryRightText}>03</Ctext>
          </View>
          <View style={styles.OrderSummaryRow}>
            <Ctext style={styles.OrderSummaryLeftText}>Price</Ctext>
            <Ctext style={styles.OrderSummaryRightText}>$55</Ctext>
          </View>
          <View style={styles.OrderSummaryRow}>
            <Ctext style={styles.OrderSummaryLeftText}>Delivery</Ctext>
            <Ctext style={styles.OrderSummaryRightText}>$3</Ctext>
          </View>
          <View style={styles.OrderSummaryRow}>
            <Ctext style={styles.OrderSummaryLeftText}>Discount</Ctext>
            <Ctext style={styles.OrderSummaryRightText}>$18</Ctext>
          </View>
        </View>
        <View style={styles.TotalPriceRow}>
          <Ctext style={styles.TotalPriceLeftText}>Total Price</Ctext>
          <Ctext style={styles.TotalPriceRightText}>$55</Ctext>
        </View>
      </View>
    </View>
  );
}
