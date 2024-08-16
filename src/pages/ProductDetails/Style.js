import { StyleSheet } from 'react-native';
import {
  fontFamily,
  H2,
  H3,
  H4,
  H5,
  H6,
  p,
  small,
  smallS,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F9F9f9",
    position: 'relative',
    paddingBottom: deviceHeight * 0.09,
  },
  ProductDetailsBox: {
    minHeight: deviceHeight * 0.4,
    paddingHorizontal: deviceWidth * 0.04,
    // paddingTop: deviceHeight * 0.1,
    paddingBottom: deviceHeight * 0.05,

  },
  ProductDetailsTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: H2,
    color: colors.HeadingColor,
    marginBottom: deviceHeight * 0.01,
  },
  OrderSummary: {
    backgroundColor: colors.White,
    paddingHorizontal: deviceWidth * 0.08,
    paddingVertical: deviceHeight * 0.02,
    borderTopLeftRadius: deviceHeight * 0.02,
    borderTopRightRadius: deviceHeight * 0.02,
    shadowOffset: { width: 1, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: 'rgba(72, 92, 40, 0.50)',
  },
  ProductDetailsTitleBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: deviceHeight * 0.02,
  },
  ProductDetailsRatingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    color: colors.SecondoryColor,
    fontSize: smallS,
  },
  ProductDetailsRatingText: {
    fontFamily: fontFamily.Medium,
    fontSize: smallS,
    color: colors.MediumGrayColor,
  },
  SliderItem: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  Productimage: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.2,
    resizeMode: 'contain',
  },
  ProductTimeLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  ProductTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: deviceHeight * 0.01,
  },
  ProductTimeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TimeIcon: {
    width: deviceHeight * 0.02,
    height: deviceHeight * 0.02,
    resizeMode: 'contain',
  },
  TimeText: {
    fontFamily: fontFamily.Medium,
    fontSize: small,
    color: colors.MediumGrayColor,
    marginLeft: deviceWidth * 0.01,
  },

  ////////////////////// ProductDetails //////////////////////
  ProductMainBox: {
    paddingHorizontal: deviceWidth * 0.04,
    paddingVertical: deviceHeight * 0.02,
  },
  quantityPlusMinus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1.5,
  },
  MinusBtn: {
    height: deviceHeight * 0.03,
    width: deviceHeight * 0.03,
    borderRadius: deviceHeight * 0.02,
    backgroundColor: colors.PrimaryColorlight10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deactivate_MinusBtn:{
backgroundColor:"red",
opacity:0.4
  },
  MinusIcon: {
    fontSize: p,
    color: colors.PrimaryColor,
  },
  quantityText: {
    fontFamily: fontFamily.Bold,
    fontSize: small,
    color: colors.MediumGrayColor,
    paddingHorizontal: deviceWidth * 0.02,
    textAlign: 'center',
    width: deviceWidth * 0.12,
  },
  plusBtn: {
    height: deviceHeight * 0.03,
    width: deviceHeight * 0.03,
    borderRadius: deviceHeight * 0.02,
    backgroundColor: colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: p,
    color: colors.White,
  },
  // ProductDetailsTitle: {
  //   fontFamily: fontFamily.Medium,
  //   fontSize: H3,
  //   color: colors.HeadingColor,
  //   marginVertical: deviceHeight * 0.01,
  // },
  ProductDetailsText: {
    fontFamily: fontFamily.Regular,
    fontSize: p,
    color: colors.MediumGrayColor,
    lineHeight: deviceHeight * 0.03,
  },

  ReadMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProductReadMoreText: {
    fontFamily: fontFamily.Medium,
    fontSize: small,
    color: colors.PrimaryColor,
  },
  ProductReadMoreBtn:{
    backgroundColor:"red",
  },
  ProductReadMore: {
    fontFamily: fontFamily.Bold,
    fontSize: small,
    color: colors.PrimaryColor,
    marginLeft: deviceWidth * 0.01,
  
  },

  ////////////////////// AddToCartBox //////////////////////
  AddToCartBox: {
    minWidth: deviceWidth * 1,
    backgroundColor: "#FDFFFA",
    paddingHorizontal: deviceWidth * 0.04,
    paddingVertical: deviceHeight * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AddToCartTextBox: {
    flex: 1,
  },
  TotalText: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.MediumGrayColor,
  },
  PriceText: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.PrimaryColor,
  },
  AddToCartBtn: {
    flex: 2,
    backgroundColor: colors.PrimaryColor,
    paddingVertical: deviceHeight * 0.018,
    borderRadius: deviceHeight * 0.015,
    alignItems: 'center',
    shadowOffset: { width: 1, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: 'rgba(72, 92, 40, 0.50)',
  },
  AddToCartBtnText: {
    color: colors.White,
    fontFamily: fontFamily.Bold,
    fontSize: H5,
  },
  ////////////////////////////////// slider styles ////////////////////////////////

  paginationStyle: {
    position: 'absolute',
    // bottom: deviceHeight * 0.02,
    gap: deviceWidth * 0.01,
    alignItems: 'center',
  },
  paginationStyleItem: {
    width: 6,
    height: 6,
    borderRadius: deviceHeight * 0.01,
    marginHorizontal: 0,
  },
  paginationStyleItemActive: {
    width: 12,
    height: 6,
    borderRadius: deviceHeight * 0.01,
    marginHorizontal: 0,
  }
});
