import { StyleSheet } from 'react-native';
import {
  p,
  fontFamily,
  small,
  H5,
  H1,
  H1BIG,
  H2BIG,
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
   
    padding:5
  },
  TitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: deviceHeight * 0.05,
    paddingHorizontal: deviceWidth * 0.12,
  },
  LoginText: {
    color: colors.HeadingColor,
    fontSize: H2BIG,
    width:"100%",
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
    paddingLeft: deviceWidth * 0.05,
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

  loginBtn: {
    backgroundColor: colors.PrimaryColor,
    width: deviceWidth * 0.9,
    paddingVertical: deviceHeight / 50,
    paddingHorizontal: deviceWidth / 10,
    borderRadius: deviceHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceHeight * 0.02,
  },
  loginBtnText: {
    color: colors.White,
    fontFamily: fontFamily.Bold,
    fontSize: H5,
  },

});
