
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceWidth, deviceHeight } from "../../constants/constants";
import { fontFamily, H3, H5, H6, p, small, smallS } from "../../constants/fontConstants";

export const styles = StyleSheet.create({
    drawerHeader: {
        paddingHorizontal: deviceWidth * 0.04,
        paddingVertical: deviceWidth * 0.05,
        alignItems: 'center',
        flexDirection: 'row',
        gap: deviceWidth * 0.03,
    },
    profilePic: {
        width: deviceWidth * 0.2,
        height: deviceWidth * 0.2,
        borderRadius: deviceWidth * 0.1,
    },
    profileContent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5,
    },
    drawerHeaderName: {
        fontFamily: fontFamily.Bold,
        fontSize: H5,
        color: colors.HeadingColor,
    },
    drawerHeaderText: {
        fontFamily: fontFamily.Bold,
        fontSize: p,
        color: colors.PrimaryColor,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#7CBA1E',
        margin: 20,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        marginLeft: 10,
    },
    mainbox: {
        paddingVertical: deviceHeight * 0.03,
    },
    ULBox: {
        paddingVertical: deviceHeight * 0.015,
    },
    Heading: {
        fontFamily: fontFamily.Medium,
        fontSize: H6,
        color: colors.LightGrayColor,
        paddingHorizontal: deviceWidth * 0.05,
    },
    ManuBox: {
        paddingTop: deviceHeight * 0.015,
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
        height: deviceWidth * 0.05,
        width: deviceWidth * 0.05,
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
    BottomBoxs: {
        flexDirection: 'column',
        paddingHorizontal: deviceWidth * 0.05,
        paddingTop: deviceHeight * 0.1,
    },
    Infobg: {
        width: "100%",
        height: deviceHeight * 0.12,
        borderRadius: deviceHeight * 0.02,
        alignItems: 'flex-end',
        overflow: 'hidden',

    },
    InfoBox: {
        paddingVertical: deviceHeight * 0.015,
        paddingLeft: deviceWidth * 0.12,
        paddingRight: deviceWidth * 0.05,
        width: deviceWidth * 0.51,
        height: "100%",

    },
    InfoText: {
        fontFamily: fontFamily.Bold,
        fontSize: p,
        color: colors.WhiteColor,
    },
    InfosubText: {
        fontFamily: fontFamily.Medium,
        fontSize: smallS,
        color: colors.WhiteColor,

    },
    CopyRightbox: {
        paddingVertical: deviceHeight * 0.05,
        alignItems: 'center',
        gap: deviceHeight * 0.01,

    },
    CopyRightText: {
        fontFamily: fontFamily.Medium,
        fontSize: p,
        color: colors.LightGrayColor,
        textAlign: 'center',
    },
    CopyRightTextCont: {
        fontFamily: fontFamily.Medium,
        fontSize: small,
        color: colors.LightGrayColor,
        textAlign: 'center',
    },
    CopyRightTextColor: {
        color: colors.PrimaryColor,
    }


});