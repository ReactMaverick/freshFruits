import { StyleSheet } from 'react-native';
import {
  p,
  fontFamily,
  small,
  H5,
  H1,
  H1BIG,
  H3,
  H6,
} from '../../constants/fontConstants';
import { colors } from '../../constants/colors';
import { deviceWidth, deviceHeight } from '../../constants/constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    paddingBottom: deviceHeight / 40,
    minHeight: deviceHeight * 1,
    backgroundColor: "#F2F2F2",
  },
  ScrollView: {
    // flex: 1,
    backgroundColor: colors.White,
  },
  BGImage: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.25,
    borderBottomLeftRadius: deviceHeight * 0.03,
    borderBottomRightRadius: deviceHeight * 0.03,
    overflow: 'hidden'
  },
  UserBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: deviceWidth * 0.05,
    marginTop: -deviceHeight * 0.09,
  },
  ProfilePic: {
    width: deviceWidth * 0.25,
    height: deviceWidth * 0.25,
    borderRadius: deviceWidth * 0.25,
    borderWidth: 2,
    borderColor: colors.White,
  },
  UserName: {
    fontFamily: fontFamily.Bold,
    fontSize: H3,
    color: colors.HeadingColor,
    marginTop: deviceHeight * 0.01,
  },
  UserEmail: {
    fontFamily: fontFamily.Regular,
    fontSize: p,
    color: colors.MediumGrayColor,
    marginTop: deviceHeight * 0.01,
  },
  UserBoxEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth * 0.02,
  },
  EditBtn: {
    padding: deviceWidth * 0.02,
  },
  textInputIcon: {
    fontSize: H5,
    color: colors.PrimaryColor,
  },
  ServiceBoxarea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: deviceHeight * 0.02,
  },
  ServiceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: deviceHeight * 0.02,
    width: deviceWidth * 0.9,
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: 'rgba(72, 92, 40, 0.40)',
  },

  ServiceBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: deviceHeight * 0.02,
    flex: 1,
  },
  ServiceIcon: {
    width: deviceWidth * 0.18,
    height: deviceWidth * 0.15,
    objectFit: 'contain',
  },
  ServiceText: {
    fontFamily: fontFamily.Bold,
    fontSize: small,
    color: colors.MediumGrayColor,
    textAlign: 'center',
    lineHeight: deviceHeight * 0.020,
  },

  ManuBox: {
    backgroundColor: colors.White,
    borderRadius: deviceHeight * 0.02,
    width: deviceWidth * 0.9,
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: 'rgba(72, 92, 40, 0.40)',
  },
  MenuText: {
    fontFamily: fontFamily.Medium,
    fontSize: p,
    color: colors.MediumGrayColor,
  },
  MenuListLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth * 0.04,
  },
  MenuList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.015,
  },
  MenuIcon: {
    height: deviceWidth * 0.1,
    width: deviceWidth * 0.1,
    objectFit: 'contain',
  },
  MenuText: {
    fontFamily: fontFamily.Bold,
    fontSize: p,
    color: colors.HeadingColor,
  },
  MenuArrow: {
    fontSize: H5,
    color: colors.MediumGrayColor,
  },
  LogoutBox: {
    paddingHorizontal: deviceWidth * 0.07,
    paddingVertical: deviceHeight * 0.08,
  },
  LogoutBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: deviceHeight * 0.015,
    gap: deviceWidth * 0.04,
  },
  LogoutText: {
    fontFamily: fontFamily.Bold,
    fontSize: p,
    color: colors.MediumGrayColor,

  },
  LogOutIcon: {
    width: deviceWidth * 0.07,
    height: deviceWidth * 0.07,
    objectFit: 'contain',
  }
});
