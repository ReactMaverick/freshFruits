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
    paddingHorizontal: deviceWidth * 0.04,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F9F9f9",
    position: 'relative',
    paddingBottom: deviceHeight * 0.1,
  },
  OrderTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'Start',
    paddingVertical: deviceHeight * 0.02,

  },
  OrderTitleImage: {
    width: deviceWidth * 0.08,
    height: deviceWidth * 0.08,
  },
  OrderTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.HeadingColor,
    marginLeft: deviceWidth * 0.02,
  },
  CheckOutButtonBox: {
    paddingTop: deviceHeight * 0.02,
    paddingBottom: deviceHeight * 0.01,
  },
  CheckOutButton: {
    backgroundColor: colors.PrimaryColor,
    paddingVertical: deviceHeight * 0.02,
    borderRadius: deviceHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CheckOutButtonText: {
    fontFamily: fontFamily.Bold,
    fontSize: H4,
    color: colors.White,
  },

});
