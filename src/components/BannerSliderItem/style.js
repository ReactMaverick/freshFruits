import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H6, p } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    sliderCardMain: {
        backgroundColor: colors.White,
        flex: 1,
        width: deviceWidth * 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: deviceHeight * 0.02,
        paddingVertical: deviceHeight * 0.02,
    },
    sliderCard: {
        width: deviceWidth * 0.9,
        minHeight: deviceHeight * 0.21,
        borderRadius: deviceHeight * 0.02,
        backgroundColor: colors.sliderBg,
        paddingHorizontal: deviceHeight * 0.02,
        paddingVertical: deviceHeight * 0.02,
        overflow: 'hidden',
    },
    sliderCardLeft: {
        width: deviceWidth * 0.6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: deviceHeight * 0.01,
        justifyContent: 'flex-end',
        height: "100%",
    },
    sliderText: {
        fontSize: H4,
        color: colors.PrimaryColor,
        fontFamily: fontFamily.Bold,
    },
    TextColorChange: {
        color: colors.SecondoryColor,
    },
    sliderSubText: {
        fontSize: p,
        color: colors.HeadingColor,
        fontFamily: fontFamily.Medium,
    },
    sliderButton: {
        backgroundColor: colors.PrimaryColor,
        paddingVertical: deviceHeight * 0.01,
        paddingHorizontal: deviceHeight * 0.02,
        borderRadius: deviceHeight * 0.05,
        marginTop: deviceHeight * 0.01,
        shadowColor: 'rgba(83, 113, 38, 0.80)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    sliderButtonText: {
        color: colors.White,
        fontSize: p,
        fontFamily: fontFamily.Bold,
    },

});

export default styles;