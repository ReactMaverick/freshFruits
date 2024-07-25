import { StyleSheet } from 'react-native';
import {
  p,
  fontFamily,
  H3,
  H1BIG,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceHeight, deviceWidth } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    minHeight: deviceHeight * 1,
  },

  SliderItem: {
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    width: deviceWidth * 1,
    paddingBottom: deviceHeight / 30,

  },

  SliderImage: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.6,
    resizeMode: 'contain',
  },
  SliderContent: {
    paddingHorizontal: deviceWidth / 20,
  },
  SliderTitle: {
    fontSize: H1BIG,
    fontFamily: fontFamily.Bold,
    color: colors.PrimaryColor,
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "#F2E7B6",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,

  },
  SliderText: {
    fontSize: p,
    fontFamily: fontFamily.Medium,
    color: colors.MediumGrayColor,
    marginBottom: 10,
    textAlign: "center",
  },
  SliderButton: {
    backgroundColor: colors.PrimaryColor,
    paddingHorizontal: deviceWidth / 20,
    paddingVertical: deviceHeight / 60,
    borderRadius: deviceHeight / 60,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SliderButtonText: {
    color: colors.White,
    fontSize: H3,
    fontFamily: fontFamily.Bold,
  },
  paginationStyle: {
    bottom: deviceHeight * 0.32,

  },
  paginationStyleItem: {
    width: deviceHeight * 0.03,
    height: deviceHeight * 0.01,
    borderRadius: deviceHeight * 0.01,
    marginHorizontal: deviceWidth * 0.01,
  },
  paginationStyleItemActive: {
    width: deviceHeight * 0.05,
    height: deviceHeight * 0.01,
    borderRadius: deviceHeight * 0.01,
  }

});
