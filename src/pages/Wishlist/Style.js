import { StyleSheet } from 'react-native';
import {
  fontFamily,
  H4,
  H5,
  H6,
  p,
  small,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight, wp } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingBottom: deviceHeight * 0.15,
    paddingHorizontal: deviceWidth * 0.04,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F2F2F2",
  },
  column: {
    justifyContent: 'space-between',
  },
  nullText: {
    fontFamily: fontFamily.Bold,
    color: colors.PrimaryColor,
    textAlign: 'center',
    paddingVertical: wp("5%"),
  },

});
