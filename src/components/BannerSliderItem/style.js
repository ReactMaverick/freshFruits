import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily } from "../../constants/fontConstants";

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
        minHeight: deviceHeight * 0.23,
        borderRadius: deviceHeight * 0.02,
        backgroundColor: colors.sliderBg,
        paddingHorizontal: deviceHeight * 0.02,
        paddingVertical: deviceHeight * 0.02,
        position: 'relative',
    },
    sliderCardLeft: {
        width: deviceWidth * 0.6,
        justifyContent: 'center',
    },
    sliderText: {
        fontSize: deviceHeight * 0.03,
        color: colors.PrimaryColor,
        fontFamily: fontFamily.Bold,
    },

});

export default styles;