import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    CardOuter: {
        paddingHorizontal: deviceWidth * 0.04,
        paddingVertical: deviceHeight * 0.01,
    },
    CardInner: {
        backgroundColor: colors.White,
        minWidth: deviceWidth * 0.42,
        borderRadius: deviceHeight * 0.035,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: deviceWidth * 0.02,
        paddingVertical: deviceHeight * 0.012,
        alignItems: 'center',
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,

        overflow: 'hidden',
    },
    ProductImageBox: {
        position: 'relative',
        flex: 1.3,
    },
    Discount: {
        position: 'absolute',
        top: "-8px",
        left: 0,
        height: deviceHeight * 0.05,
        width: deviceWidth * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DiscountText: {
        fontFamily: fontFamily.Bold,
        fontSize: smallS,
        color: colors.White,
    },
    ProductImage: {
        width: deviceWidth * 0.32,
        height: deviceHeight * 0.14,
        objectFit: 'contain',
    },
    ProductDetails: {
        flex: 1.8,
        paddingLeft: deviceWidth * 0.02,
    },
    ProductDetailsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "baseline",
        marginBottom: deviceHeight * 0.01,
        paddingRight: deviceWidth * 0.04,
    },
    ProductDetailsLeft: {
        flex: 1,
    },
    ProductName: {
        fontFamily: fontFamily.Bold,
        fontSize: H5,
        color: colors.HeadingColor,
    },
    ProductWeight: {
        fontFamily: fontFamily.Medium,
        fontSize: small,
        color: colors.MediumGrayColor,
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
    sliderCardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },

    sliderCardPriceBox: {
        flex: 2,
    },
    AddToCartBtn: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    AddToCartBtnImage: {
        width: deviceWidth * 0.18,
        height: deviceHeight * 0.06,
        objectFit: 'contain',

    },


});

export default styles;