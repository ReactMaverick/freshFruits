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
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingBottom: deviceHeight * 0.18,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F9F9f9",
    position: 'relative',
  },
  OrderBox: {
    paddingBottom: deviceHeight * 0.02,
  },
  OrderSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.013,
  },
  OrderSummaryLeftText: {
    fontFamily: fontFamily.Medium,
    fontSize: p,
    color: colors.MediumGrayColor,
  },
  OrderSummaryRightText: {
    fontFamily: fontFamily.Bold,
    fontSize: p,
    color: colors.HeadingColor,
  },
  TotalPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: deviceHeight * 0.01,
  },
  TotalPriceLeftText: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.HeadingColor,
  },
  TotalPriceRightText: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.PrimaryColor,
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
  OrderSummaryBox: {
    minWidth: deviceWidth * 1,
    backgroundColor: "transparent",
    paddingHorizontal: deviceWidth * 0.04,
    paddingVertical: deviceHeight * 0.02,
    minHeight: deviceHeight * 0.15,
  },
  divider: {
    backgroundColor: '#DFE0DD',
    height: 5,
    marginBottom: deviceHeight * 0.03,
    width: deviceWidth * 0.3,
    borderRadius: deviceHeight * 0.02,
    alignSelf: 'center',
  },
  mainContainerStyle: {
    margin: 0,
    padding: 0,
  },
  inputContainerStyle: {
    width: '100%',
    margin: 0,
    padding: 0,
    borderWidth: 2,
    borderColor: colors.LightGrayColor,
    borderStyle: "dashed",
    borderRadius: deviceHeight * 0.02,
    backgroundColor: '#F3F3F3',
  },
  ApplyCouponBox: {
    marginTop: deviceHeight * 0.03,
    width: deviceWidth * 0.75,
  },
  textInputStyle: {
    color: colors.HeadingColor,
    fontFamily: fontFamily.Regular,
    fontSize: p,
    paddingLeft: deviceWidth * 0.05,
    paddingRight: deviceWidth * 0.05,
  },
  CheckoutBtn: {
    backgroundColor: colors.PrimaryColor,
    paddingVertical: deviceHeight * 0.02,
    borderRadius: deviceHeight * 0.02,
    marginTop: deviceHeight * 0.03,
    alignItems: 'center',
  },
  CheckoutBtnText: {
    color: colors.White,
    fontFamily: fontFamily.Bold,
    fontSize: H5,
  },

});
