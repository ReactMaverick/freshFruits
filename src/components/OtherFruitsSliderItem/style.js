import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H5, H6, p, small } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    sliderCardOuter: {
        paddingHorizontal: deviceWidth * 0.025,
        paddingVertical: deviceHeight * 0.01,
    },
    sliderCardMain: {
        backgroundColor: colors.White,
        minWidth: deviceWidth * 0.41,
        borderRadius: deviceHeight * 0.035,
        shadowColor: 'rgba(72, 92, 40, 0.40)',
        justifyContent: 'center',
        paddingBottom: deviceHeight * 0.022,
        alignItems: 'stretch',
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        position: 'relative',
        overflow: 'hidden',
    },
    wishlistBtn: {
        position: 'absolute',
        top: deviceHeight * 0.015,
        right: deviceWidth * 0.02,
        height: deviceHeight * 0.04,
        width: deviceWidth * 0.08,
        borderRadius: deviceHeight * 0.02,
        backgroundColor: "rgba(124, 186, 30, 0.07)",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    wishlistIcon: {
        fontSize: p,
        color: colors.PrimaryColor,
    },

    sliderCardImage: {
        width: "100%",
        height: deviceHeight * 0.14,
        objectFit: 'cover',
    },
    sliderCardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: deviceWidth * 0.03,
        marginBottom: deviceHeight * 0.01,
    },
    sliderCardTitle: {
        fontFamily: fontFamily.Bold,
        fontSize: H5,
        color: colors.HeadingColor,
    },
    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "rgba(255, 171, 37, 0.12)",
        paddingHorizontal: deviceWidth * 0.02,
        gap: deviceWidth * 0.01,
        borderRadius: 5,
    },
    ratingText: {
        fontFamily: fontFamily.Regular,
        fontSize: small,
        color: colors.SecondoryColor,
    },
    ratingIcon: {
        fontSize: small,
        color: colors.SecondoryColor,
    },

    sliderCardText: {
        fontFamily: fontFamily.Bold,
        fontSize: H3,
        color: colors.PrimaryColor,
    },
    sliderCardTextCut: {
        fontSize: small,
        fontFamily: fontFamily.Bold,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        color: colors.MediumGrayColor,
    },
    sliderCardPrice: {
        fontFamily: fontFamily.Bold,
        fontSize: p,
        color: colors.MediumGrayColor,
    },

    sliderCardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sliderCardPriceBox: {
        paddingLeft: deviceWidth * 0.03,
        flex: 2,
    },
    AddToCartBtn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    AddToCartBtnImage: {
        width: deviceWidth * 0.12,
        height: deviceHeight * 0.05,
        objectFit: 'contain',
    },


});

export default styles;