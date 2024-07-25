import { StyleSheet } from 'react-native';
import {
  p,
  fontFamily,
  small,
  H5,
  H1,
  H1BIG,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingVertical: deviceHeight / 40,
    // paddingHorizontal: deviceWidth / 20,
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
  inputContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: deviceHeight * 0.05,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.LightGrayColor,
  },
  textInputStyle: {
    color: colors.HeadingColor,
    fontFamily: fontFamily.Regular,
    fontSize: p,
    paddingLeft: deviceWidth / 8,
  },
  labelTextStyle: {
    fontFamily: fontFamily.Regular,
    fontSize: small,
  },
  textInputIcon: {
    color: colors.MediumGrayColor,
    fontSize: p,
    bottom: deviceHeight / 100 / 4,
    borderRightWidth: 1,
    paddingRight: deviceWidth * 0.02,
    borderColor: colors.LightGrayColor
  },
  textInputEyeIcon: {
    color: colors.MediumGrayColor,
    fontSize: p,
    bottom: deviceHeight / 100 / 4,
  },
  forgotPassword: {
    color: colors.MediumGrayColor,
    fontFamily: fontFamily.Regular,
    fontSize: small,
  },

  loginBtn: {
    backgroundColor: colors.PrimaryColor,
    width: deviceWidth * 0.9,
    paddingVertical: deviceHeight / 50,
    paddingHorizontal: deviceWidth / 10,
    borderRadius: deviceHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceHeight * 0.06,
  },
  loginBtnText: {
    color: colors.White,
    fontFamily: fontFamily.Bold,
    fontSize: H5,
  },
  RowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth * 0.9,
  },
  customCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth * 0.02,
    justifyContent: "flex-start",

  },
  checkboxImage: {
    width: deviceWidth * 0.12,
    height: deviceHeight * 0.04,
    resizeMode: 'contain',

  },
  customCheckBoxText: {
    color: colors.MediumGrayColor,
    fontFamily: fontFamily.Regular,
    fontSize: small,
  },
  forgotPasswordText: {
    color: colors.DarkGrayColor,
    fontFamily: fontFamily.Regular,
    fontSize: small,
    padding: 5,
  },
  dontHaveAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: deviceHeight * 0.02,
  },
  dontHaveAccountText: {
    color: colors.DarkGrayColor,
    fontFamily: fontFamily.Regular,
    fontSize: small,
  },
  registerText: {
    color: colors.SecondoryColor,
    fontFamily: fontFamily.Bold,
    fontSize: small,
    textDecorationColor: colors.SecondoryColor,
    textDecorationLine: 'underline',

  },


});
