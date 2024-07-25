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
import { deviceHeight, deviceWidth } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    paddingTop: deviceHeight * 0.05,
    // backgroundColor: colors.PrimaryColor,
    // flex: 1,
  },
  HomeText: {
    color: colors.SecondoryColor,
    fontSize: H1BIG,
    fontFamily: fontFamily.Bold,
    textAlign: 'center',
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
  },
});


