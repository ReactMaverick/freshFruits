import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontFamily, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";
import { deviceHeight, deviceWidth } from "../../constants/constants";

const styles = StyleSheet.create({
    paginationStyle: {
        position: 'absolute',
        bottom: deviceHeight * 0.0,
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
    pageBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
    },
});

export default styles;