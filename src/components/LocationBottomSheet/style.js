import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    CardOuter: {
        paddingHorizontal: deviceWidth * 0.04,
        // paddingVertical: deviceHeight * 0.01,
    },
    CardInner: {
        backgroundColor: colors.White,
        minWidth: deviceWidth * 0.42,
        borderTopLeftRadius: deviceHeight * 0.03,
        borderTopRightRadius: deviceHeight * 0.03,
        // flexDirection: 'row',   ------>initial
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: deviceWidth * 0.04,
        paddingVertical: deviceHeight * 0.02,
        alignItems: 'center',
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
        overflow: 'hidden',
    },
    Title: {
        color: colors.HeadingColor,
        fontSize: H4,
        fontFamily: fontFamily.Bold,
    },
});

export default styles;