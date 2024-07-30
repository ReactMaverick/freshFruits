import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";
import { deviceHeight, deviceWidth } from "../../constants/constants";

const styles = StyleSheet.create({
    paginationStyle: {
        position: 'absolute',
        bottom: deviceHeight * 0.02,
        gap: deviceWidth * 0.01,
        alignItems: 'center',
    },
    paginationStyleItem: {
        width: 6,
        height: 6,
        borderRadius: deviceHeight * 0.01,
        marginHorizontal: 0,
    },
    paginationStyleItemActive: {
        width: 12,
        height: 6,
        borderRadius: deviceHeight * 0.01,
        marginHorizontal: 0,
    },
    categoryBox: {
        paddingHorizontal: deviceWidth * 0.03,
        paddingVertical: deviceHeight * 0.01,
    },
    categoryBtn: {
        // backgroundColor: colors.PrimaryColor,
        paddingVertical: deviceHeight * 0.01,
        paddingHorizontal: deviceHeight * 0.02,
        borderRadius: deviceHeight * 0.05,
        borderWidth: 1,
        borderColor: colors.MediumGrayColor,
    },
    categoryBtnText: {
        color: colors.MediumGrayColor,
        fontSize: p,
        fontFamily: fontFamily.Bold,
    },

});

export default styles;