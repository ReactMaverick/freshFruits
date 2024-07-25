import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { deviceWidth } from '../constants/constants';


export const styles = StyleSheet.create({
  BottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.bottomBar,
    padding: 10,
    borderRadius: deviceWidth * 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  BottomBarBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
