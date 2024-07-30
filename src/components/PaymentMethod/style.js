import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    PaymentMethodOuter: {
        flex: 1,
        paddingHorizontal: deviceWidth * 0.01,
        paddingVertical: deviceHeight * 0.01,
    },
    PaymentMethodInner: {
        backgroundColor: colors.White,
        borderRadius: deviceHeight * 0.02,
        paddingVertical: deviceHeight * 0.02,
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
    },
    PaymentMethodUl: {
        flexDirection: 'column',
        paddingHorizontal: deviceWidth * 0.02,
    },
    PaymentMethodLi: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: deviceHeight * 0.01,
    },
    PaymentMethodLiInner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth * 0.05,
        flex: 5,
    },
    PaymentMethodLiImage: {
        width: deviceWidth * 0.08,
        height: deviceWidth * 0.08,
    },
    PaymentMethodText: {
        fontFamily: fontFamily.Bold,
        fontSize: p,
        color: colors.HeadingColor,
    },
    PaymentMethodLiRadio: {
        flex: 0.5,
    },
    PaymentMethodLiRadioImage: {
        width: deviceWidth * 0.05,
        height: deviceWidth * 0.05,
        objectFit: 'contain',
    },


});

export default styles;