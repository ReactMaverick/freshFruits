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
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingBottom: deviceHeight * 0.15,
    paddingHorizontal: deviceWidth * 0.04,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F2F2F2",
  },
  HeadingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight * 0.02,
  },
  HeadingText: {
    fontSize: H4,
    fontFamily: fontFamily.Bold,
    color: colors.MediumGrayColor,
  },
  NotificationIcon: {
    height: deviceHeight * 0.08,
    width: deviceHeight * 0.08,
    objectFit: 'contain',
    flex: 1.3,
  },
  NotificationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: deviceHeight * 0.02,
    backgroundColor: colors.White,
    borderRadius: deviceHeight * 0.02,
    paddingHorizontal: deviceWidth * 0.02,
    gap: deviceWidth * 0.02,
  },
  NotificationContent: {
    flex: 5,
  },
  NotificationTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: H5,
    color: colors.HeadingColor,
  },
  NotificationDescription: {
    fontFamily: fontFamily.Regular,
    fontSize: small,
    color: colors.MediumGrayColor,
  },
});
