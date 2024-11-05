import {colors} from './colors';
import {deviceHeight, deviceWidth} from './constants';
import {fontFamily, H3, H5, p} from './fontConstants';
import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBox: {
    backgroundColor: colors.white,
    borderRadius: deviceHeight * 0.03,
    paddingHorizontal: deviceWidth * 0.03,
    paddingVertical: deviceHeight * 0.02,
    marginTop: deviceHeight * 0.02,
    borderWidth: 1,
    borderColor: colors.lightGray2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  cardBox: {
    backgroundColor: colors.white,
    borderRadius: deviceHeight * 0.03,
    paddingHorizontal: deviceWidth * 0.03,
    paddingVertical: deviceHeight * 0.02,
    marginTop: deviceHeight * 0.02,
    shadowColor: colors.black,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  NewContainer: {
    height: '100%',
    paddingHorizontal: 12,
    width: '100%',
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: (deviceHeight * 1) / 60,
    borderRadius: 10,
    width: (deviceWidth * 90) / 100,
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: p,
    fontFamily: 'LatoBold',
    lineHeight: 32,
  },
  BackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
  },
  keyboardAvoidingView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  keyboardAvoidingView1: {
    backgroundColor: '#fff',
  },
  CustomBtn: {
    backgroundColor: colors.primary,
    paddingVertical: (deviceHeight * 1) / 75,
    borderRadius: 10,
  },
  CustomBtnText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: p,
    fontFamily: fontFamily.Bold,
    lineHeight: (deviceHeight * 1) / 25,
  },
  TitleRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: deviceHeight / 60,
  },
  Title: {
    fontSize: H5,
    fontFamily: fontFamily.Bold,
    color: colors.blueDarkColor,
  },
  ViewAll: {
    fontSize: p,
    fontFamily: fontFamily.Regular,
    color: colors.blueDarkColor,
  },
  Para: {
    fontSize: p,
    fontFamily: fontFamily.Regular,
    color: colors.darkColor,
    lineHeight: deviceHeight / 35,
  },
  DefaultFont: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
