import { StyleSheet } from 'react-native';
import {
  p,
  fontFamily,
  small,
  H5,
  H1,
  H1BIG,
  H4,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceHeight, deviceWidth } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    // paddingTop: deviceHeight * 0.0,
    // backgroundColor: colors.PrimaryColor,
    flex: 1,
  },
  HeadingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: deviceWidth * 0.05,
    paddingTop: deviceHeight * 0.02,
  },
  HeadingText: {
    fontSize: H4,
    fontFamily: fontFamily.Bold,
    color: colors.HeadingColor,
  },
  ViewAllBtn: {
    paddingVertical: deviceHeight * 0.01,
  },
  ViewAllBtnText: {
    color: colors.PrimaryColor,
    fontSize: p,
    fontFamily: fontFamily.Bold,
  },

});


