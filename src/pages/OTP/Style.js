import { StyleSheet } from 'react-native';
import {
  p,
  fontFamily,
  small,
  H5,
  H1,
  H1BIG,
  H3,
  H4,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingVertical: deviceHeight / 40,
    minHeight: deviceHeight * 1,
  },
  FreshFoodLogo: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.22,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  formBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceHeight / 100 / 2,
    paddingHorizontal: deviceWidth * 0.02,
  },
  TitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: deviceHeight * 0.05,
    paddingHorizontal: deviceWidth * 0.12,
  },
  LoginText: {
    color: colors.HeadingColor,
    fontSize: H1BIG,
    fontFamily: fontFamily.Bold,
    textAlign: 'center',
  },
  LoginPara: {
    color: colors.MediumGrayColor,
    fontSize: p,
    fontFamily: fontFamily.Medium,
    textAlign: 'center',
  },

  otpBox: {
    width: deviceWidth * 0.15,
    height: deviceWidth * 0.15,
    borderRadius: 10,
    backgroundColor: colors.otp,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: deviceWidth * 0.02,
  },
  otpBoxText: {
    color: colors.PrimaryColor,
    fontSize: H4,
    fontFamily: fontFamily.Medium,
  },
  otpBoxActive: {
    borderColor: colors.PrimaryColor,
  },
  otpBoxActiveText: {
    color: colors.PrimaryColor,
    fontFamily: fontFamily.Medium,
  },
  otpBoxError: {
    borderColor: colors.Redtone,
  },
  otpBoxErrorText: {
    color: colors.Redtone,
  },
  otpBoxSuccess: {
    borderColor: colors.PrimaryColor,
  },
  otpBoxSuccessText: {
    color: colors.PrimaryColor,
    fontFamily: fontFamily.Medium,
  },
  otpText: {
    color: colors.MediumGrayColor,
    fontSize: p,
    fontFamily: fontFamily.Medium,
    textAlign: 'center',
    marginTop: deviceHeight * 0.05,
  },
  resendButton: {
    padding: deviceWidth * 0.02,
    borderRadius: 10,
  },
  resendButtonText: {
    color: colors.PrimaryColor,
    fontSize: small,
    fontFamily: fontFamily.Medium,
    textDecorationColor: colors.PrimaryColor,
    textDecorationLine: 'underline',
  },
  resendTimer: {
    color: colors.MediumGrayColor,
    fontSize: p,
    fontFamily: fontFamily.Medium,
    textAlign: 'center',
    marginTop: deviceHeight / 100 / 2,
  },

});
