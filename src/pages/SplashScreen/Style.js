import { StyleSheet } from 'react-native';
import {
  H1,
  p,
  deviceHeight,
  fontFamily,
  H6,
  small,
  H5,
  H3,
  H2,
  smallS,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingVertical: deviceHeight / 40,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: deviceHeight * 1,
  },
  Logo: {
    width: deviceWidth * 0.8,
    height: deviceHeight / 5,
    alignSelf: 'center',
    objectFit: 'contain',

  },
});
