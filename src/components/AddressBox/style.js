import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    addressInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
        paddingHorizontal: deviceWidth * 0.04,
        paddingVertical: deviceHeight * 0.02,
        borderRadius: deviceHeight * 0.02,
        backgroundColor: colors.White,
    },
    addressOuter: {
        paddingHorizontal: deviceHeight * 0.005,
        paddingVertical: deviceHeight * 0.02,
    },
    addressText: {
        fontFamily: fontFamily.Medium,
        fontSize: small,
        color: colors.LightGrayColor,
    },
    addressTitle: {
        fontFamily: fontFamily.Bold,
        fontSize: H6,
        color: colors.HeadingColor,
        flex: 3,
    },
    addressTextColor: {
        color: colors.HeadingColor,
    },
    addressBox: {
        flex: 8,
        gap: deviceHeight * 0.01,
    },

    EditBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth * 0.01,
    },
    RadioBtn: {
        flex: 1,

    },
    RadioBtnImage: {
        width: deviceWidth * 0.05,
        height: deviceWidth * 0.05,
    },
    EditBtnText: {
        fontFamily: fontFamily.Bold,
        fontSize: small,
        color: colors.HeadingColor,
    },
    EditBtnIcon: {
        fontSize: small,
        color: colors.HeadingColor,
    },

    TitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },




});

export default styles;