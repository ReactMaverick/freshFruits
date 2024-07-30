import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    OrderSummaryOuter: {
        flex: 1,
        paddingHorizontal: deviceWidth * 0.01,
        paddingVertical: deviceHeight * 0.01,
    },
    OrderSummaryInner: {
        backgroundColor: colors.White,
        borderRadius: deviceHeight * 0.02,
        paddingVertical: deviceHeight * 0.02,
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
    },
    OrderSummaryLi: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: deviceHeight * 0.01,
    },
    OrderSummaryLeft: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth * 0.05,
    },
    sliderCardText: {
        fontFamily: fontFamily.Bold,
        fontSize: H6,
        color: colors.PrimaryColor,
    },
    sliderCardTextCut: {
        fontSize: smallS,
        fontFamily: fontFamily.Bold,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        color: colors.LightGrayColor,
    },
    OrderSummaryRight: {
        flex: 0.5,
    },
    OrderSummaryUl: {
        flexDirection: 'column',
        paddingHorizontal: deviceWidth * 0.02,
        borderBottomColor: colors.LightGrayColor,
        borderBottomWidth: deviceHeight * 0.002,
        paddingBottom: deviceHeight * 0.02,
        borderStyle: 'dashed',
    },
    OrderitemsUl: {
        paddingHorizontal: deviceWidth * 0.04,
        borderBottomColor: colors.LightGrayColor,
        borderBottomWidth: deviceHeight * 0.002,
        paddingVertical: deviceHeight * 0.02,
        borderStyle: 'dashed',
    },
    OrderSummaryImg: {
        width: deviceWidth * 0.22,
        height: deviceWidth * 0.22,
        objectFit: 'contain',
    },
    OrderSummaryText: {
        gap: deviceHeight * 0.005,
    },
    OrderSummaryTitle: {
        fontSize: H5,
        color: colors.HeadingColor,
        fontFamily: fontFamily.Bold,
    },
    OrderSummaryQuantity: {
        fontSize: H4,
        color: colors.LightGrayColor,
        fontFamily: fontFamily.Bold,
    },
    ProductWeight: {
        fontSize: small,
        color: colors.MediumGrayColor,
        fontFamily: fontFamily.Bold,
    },
    OrderSummaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: deviceHeight * 0.013,
    },
    OrderSummaryLeftText: {
        fontFamily: fontFamily.Medium,
        fontSize: p,
        color: colors.MediumGrayColor,
    },
    OrderSummaryRightText: {
        fontFamily: fontFamily.Bold,
        fontSize: p,
        color: colors.HeadingColor,
    },
    TotalPriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: deviceWidth * 0.04,
        paddingVertical: deviceHeight * 0.02,
    },
    TotalPriceLeftText: {
        fontFamily: fontFamily.Bold,
        fontSize: H4,
        color: colors.HeadingColor,
    },
    TotalPriceRightText: {
        fontFamily: fontFamily.Bold,
        fontSize: H4,
        color: colors.PrimaryColor,
    },


});

export default styles;