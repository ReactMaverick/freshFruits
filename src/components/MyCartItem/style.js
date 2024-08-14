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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: deviceWidth * 0.02,
        paddingVertical: deviceHeight * 0.012,
        alignItems: 'center',
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
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
        flex: 2.2,
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

    RemoveBtn: {
        padding: deviceWidth * 0.02,
    },
    RemoveBtnIcon: {
        fontSize: H4,
        color: colors.MediumGrayColor,
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
        color: colors.MediumGrayColor,
    },

    sliderCardPriceBox: {
        flex: 1.3,
    },
    quantityPlusMinus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1.5,
        paddingRight: deviceWidth * 0.03,
    },
    MinusBtn: {
        height: deviceHeight * 0.03,
        width: deviceHeight * 0.03,
        borderRadius: deviceHeight * 0.02,
        backgroundColor: colors.PrimaryColorlight10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deactivate_MinusBtn:{
opacity:0.5,
backgroundColor:'red',
    },
    MinusIcon: {
        fontSize: p,
        color: colors.PrimaryColor,
    },
    quantityText: {
        fontFamily: fontFamily.Bold,
        fontSize: small,
        color: colors.PrimaryColor,
        paddingHorizontal: deviceWidth * 0.02,
        textAlign: 'center',
        width: deviceWidth * 0.13,
    },
    plusBtn: {
        height: deviceHeight * 0.03,
        width: deviceHeight * 0.03,
        borderRadius: deviceHeight * 0.02,
        backgroundColor: colors.PrimaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusIcon: {
        fontSize: p,
        color: colors.White,
    },





});

export default styles;