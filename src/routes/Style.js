import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { deviceHeight, deviceWidth } from '../constants/constants';
import { fontFamily, H5, H6, small } from '../constants/fontConstants';


export const styles = StyleSheet.create({
  BottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: deviceHeight * 0.02,
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: 'rgba(72, 92, 40, 0.60)',

  },
  BottomBarBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LabelText: {
    fontSize: small,
    fontFamily: fontFamily.Bold,
  },
  Iconbox: {
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: deviceWidth * 0.1,
  },
});
