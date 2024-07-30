// Date: 03/18/2021
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";
import { deviceHeight, deviceWidth } from "../../constants/constants";

export const styles = StyleSheet.create({
    headerAreaOuter: {
        paddingHorizontal: deviceWidth * 0.04,
        paddingTop: deviceHeight * 0.01,
        paddingBottom: deviceHeight * 0.02,
        borderBottomRightRadius: deviceWidth * 0.08,
        borderBottomLeftRadius: deviceWidth * 0.08,
        shadowColor: 'rgba(77, 104, 36, 0.30)',
        shadowOffset: { width: 5, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flex: 4,
        alignItems: 'stretch',
        // gap: deviceWidth * 0.04,
    },
    leftTitle: {
        color: colors.HeadingColor,
        fontSize: H5,
        fontFamily: fontFamily.Bold,
    },
    leftSubTitle: {
        color: colors.HeadingColor,
        fontSize: H4,
        fontFamily: fontFamily.Bold,
    },
    locationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: deviceWidth * 0.02,
        gap: deviceWidth * 0.02,
    },
    locationIcon: {
        color: colors.HeadingColor,
        fontSize: small,
    },
    locationText: {
        color: colors.HeadingColor,
        fontSize: smallS,
        fontFamily: fontFamily.Regular,
    },
    bellBtn: {
        flexDirection: 'row',
        position: 'relative',
        width: deviceWidth / 8,
        height: deviceWidth / 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: deviceWidth * 0.1,
        backgroundColor: colors.PrimaryColor,
    },
    NotificationIcon: {
        fontSize: H5,
        color: colors.White,
    },
    blankBox: {
        flex: 1,
    },
    SideBarIcon: {
        width: deviceWidth * 0.08,
        height: deviceWidth * 0.08,
        objectFit: 'cover',
    },
    RightSide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: deviceWidth * 0.04,
    },
    SearchBox: {
        borderRadius: deviceHeight * 0.05,
        backgroundColor: '#fff',
        shadowColor: 'rgba(72, 92, 40, 0.50)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        marginTop: deviceHeight * 0.01,
    },
    mainContainerStyle: {
        margin: 0,
        padding: 0,
    },
    inputContainerStyle: {
        width: "100%",
        margin: 0,
        padding: 0,
    },
    textInputStyle: {
        color: colors.HeadingColor,
        fontFamily: fontFamily.Regular,
        fontSize: p,
        paddingLeft: deviceWidth * 0.11,
        paddingRight: deviceWidth * 0.15,
    },
    labelTextStyle: {
        fontFamily: fontFamily.Regular,
        fontSize: small,
    },
    textInputIcon: {
        color: colors.MediumGrayColor,
        fontSize: p,
        bottom: deviceHeight / 100 / 4,
    },
    filterIconBox: {
        position: 'absolute',
        right: deviceWidth * 0.01,
        borderLeftColor: colors.MediumGrayColor,
        borderLeftWidth: 1,
        paddingLeft: deviceWidth * 0.03,
    },
    filterIcon: {
        width: deviceWidth * 0.05,
        height: deviceWidth * 0.05,
        objectFit: 'cover',
    },
    backbtn: {
        width: deviceWidth * 0.1,
        height: deviceWidth * 0.1,
        borderRadius: deviceWidth * 0.1,
        backgroundColor: colors.White,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BackBtnArrow: {
        color: colors.White,
        fontSize: H5,
    },
});