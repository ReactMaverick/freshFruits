import { StyleSheet } from 'react-native';
import {
  fontFamily,
  H4,
  H5,
  H6,
  p,
  small,
  smallS,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight, wp } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingBottom: deviceHeight * 0.15,
    paddingHorizontal: deviceWidth * 0.04,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F2F2F2",
  },
  OrderTabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: deviceHeight * 0.02,
  },
  OrderTabBtn: {
    paddingVertical: deviceWidth * 0.03,
    paddingHorizontal: wp("1%"),
    borderRadius: deviceHeight * 0.01,
    width: deviceWidth * 0.3,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.PrimaryColor,
  },
  OrderTabText: {
    fontSize: small,
    color: colors.HeadingColor,
  },
  OrderTabBtnActive: {
    paddingVertical: deviceWidth * 0.03,
    paddingHorizontal: deviceWidth * 0.03,
    borderRadius: deviceHeight * 0.01,
    width: deviceWidth * 0.3,
    alignItems: 'center',
    borderWidth: 0,
    borderColor: colors.PrimaryColor,
    backgroundColor: colors.PrimaryColor,
  },
  OrderTabTextActive: {
    fontFamily: fontFamily.Bold,
    fontSize: small,
    color: colors.White,
  },
  OrderItemBox: {
    backgroundColor: colors.White,
    borderRadius: deviceHeight * 0.02,
    paddingHorizontal: deviceWidth * 0.04,
    paddingVertical: deviceHeight * 0.02,
    marginBottom: deviceHeight * 0.02,
  },
  OrderItemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },
  OrderItemTopLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 2,
    // backgroundColor: "red",
  },
  OrderItemIcon: {
    height: deviceHeight * 0.1,
    width: deviceWidth * 0.25,
    // backgroundColor: "red",
  },
  OrderItemTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: H5,
    color: colors.HeadingColor,
    marginLeft: deviceWidth * 0.03,
  },
  OrderItemQunatity: {
    fontFamily: fontFamily.Regular,
    fontSize: small,
    color: colors.MediumGrayColor,
    marginLeft: deviceWidth * 0.03,
  },
  orderIdText: {
    fontFamily: fontFamily.Bold,
    fontSize: smallS,
    color: colors.HeadingColor,
  },
  orderId: {
    color: colors.PrimaryColor,
  },
  OrderItemStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  OrderItemStatusText: {
    fontFamily: fontFamily.Regular,
    fontSize: small,
    color: colors.HeadingColor,
  },
  OrderItemStatusTime: {
    fontFamily: fontFamily.Bold,
    fontSize: H5,
    color: colors.HeadingColor,
  },
  OrderItemStatusBox: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: deviceWidth * 0.02,
  },
  OrderBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: deviceHeight * 0.02,
    gap: deviceWidth * 0.02,
  },
  OrderBtn: {
    flex: 1,
    paddingHorizontal: deviceWidth * 0.02,
    paddingVertical: deviceHeight * 0.015,
    backgroundColor: colors.btnBgGray,
    borderRadius: deviceHeight * 0.01,
    borderWidth: 1,
    borderColor: colors.btnBgGray,
    alignItems: 'center',
  },
  OrderBtnText: {
    fontFamily: fontFamily.Bold,
    fontSize: p,
    color: colors.MediumGrayColor,
  },
  OrderBtn1: {
    flex: 1,
    paddingHorizontal: deviceWidth * 0.02,
    paddingVertical: deviceHeight * 0.015,
    borderRadius: deviceHeight * 0.01,
    alignItems: 'center',
    backgroundColor: colors.White,
    borderWidth: 1,
    borderColor: colors.PrimaryColor,
  },
  OrderBtnText1: {
    fontFamily: fontFamily.Bold,
    fontSize: p,
    color: colors.PrimaryColor,
  },

});
