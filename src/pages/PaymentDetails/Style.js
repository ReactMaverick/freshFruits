import { StyleSheet } from 'react-native';
import {
  fontFamily,
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
    justifyContent: 'space-between',
    paddingHorizontal: deviceWidth * 0.04,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F9F9f9",
    position: 'relative',
    paddingBottom: deviceHeight * 0.5,
  },
  OrderTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'Start',
    paddingTop: deviceHeight * 0.02,

  },
  OrderTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: H6,
    color: colors.PrimaryColor,
    marginLeft: deviceWidth * 0.02,
  },
  PayNowBox: {
    position: 'absolute',
    flex: 1,
    bottom: deviceHeight * 0.09,
    width: deviceWidth * 1,
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: deviceHeight * 0.05,
  },
  CheckOutButton: {
    backgroundColor: colors.PrimaryColor,
    paddingVertical: deviceHeight * 0.02,
    borderRadius: deviceHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth * 0.9,
  },
  CheckOutButtonText: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.White,
  },
  PaymentMethodUl: {
    paddingHorizontal: deviceWidth * 0.01,
    paddingVertical: deviceHeight * 0.01,
  },
  PaymentMethodLi: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight * 0.02,
    paddingHorizontal: deviceWidth * 0.04,
    backgroundColor: colors.White,
    borderRadius: deviceHeight * 0.02,
    paddingVertical: deviceHeight * 0.02,
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: 'rgba(72, 92, 40, 0.60)',
  },
  PaymentMethodLiInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth * 0.05,
    flex: 5,
  },
  PaymentMethodLiImage: {
    width: deviceWidth * 0.08,
    height: deviceWidth * 0.08,
  },
  PaymentMethodText: {
    fontFamily: fontFamily.Bold,
    fontSize: p,
    color: colors.HeadingColor,
  },
  inputContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: deviceHeight * 0.010,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.LightGrayColor,
  },
  textInputStyle: {
    color: colors.HeadingColor,
    fontFamily: fontFamily.Regular,
    fontSize: p,
    paddingVertical: deviceHeight * 0.012,
    paddingLeft: deviceWidth * 0.02,
  },
  labelTextStyle: {
    fontFamily: fontFamily.Medium,
    fontSize: p,
    marginBottom: deviceHeight * 0.01,
  },
  CardFormRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: deviceWidth * 0.05,
  },
  CardForm: {
    gap: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.04,
  },
  MainContainer: {
    flex: 1,
  },

});
