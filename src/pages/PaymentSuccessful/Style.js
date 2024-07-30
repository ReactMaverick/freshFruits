import { StyleSheet } from 'react-native';
import {
  fontFamily,
  H1BIG,
  H2,
  H5,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: deviceWidth * 0.04,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F9F9f9",
    gap: deviceHeight * 0.023,
  },
  PaymentMethodLiImage: {
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.8,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  SuccessBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SuccessText: {
    fontFamily: fontFamily.Bold,
    fontSize: H1BIG,
    color: colors.PrimaryColor,
  },
  SuccessPara: {
    fontFamily: fontFamily.Medium,
    fontSize: H5,
    color: colors.MediumGrayColor,

  },
  Payment: {
    fontFamily: fontFamily.Bold,
    fontSize: H2,
    color: colors.PrimaryColor,
    marginTop: deviceHeight * 0.01,
  },


});
