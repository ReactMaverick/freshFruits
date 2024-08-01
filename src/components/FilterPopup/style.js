import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { BIG, fontFamily, H1BIG, H3, H4, H5, H6, p, small, smallS } from "../../constants/fontConstants";

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    CardOuter: {
        paddingHorizontal: deviceWidth * 0.04,
        paddingVertical: deviceHeight * 0.01,
    },
    CardInner: {
        backgroundColor: "#F6F5FF",
        minWidth: deviceWidth * 0.42,
        borderRadius: deviceHeight * 0.03,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        height: deviceHeight * 0.85,
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
        overflow: 'hidden',
    },
    cardCenter: {
        paddingVertical: deviceHeight * 0.02,
        justifyContent: 'flex-start',

    },

    BoxCardMain: {
        paddingVertical: deviceHeight * 0.015,
        paddingHorizontal: deviceWidth * 0.04,
    },
    BoxCardArea: {
        paddingVertical: deviceHeight * 0.03,
        paddingHorizontal: deviceWidth * 0.045,
        backgroundColor: colors.White,
        width: '100%',
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 8,
        shadowColor: 'rgba(72, 92, 40, 0.60)',
        borderRadius: deviceHeight * 0.03,
    },
    BoxCardItemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: deviceWidth * 0.025,
        flexWrap: 'wrap',
        marginTop: deviceHeight * 0.02,
    },

    BoxCardItem: {
        backgroundColor: colors.White,
        paddingHorizontal: deviceHeight * 0.025,
        paddingVertical: deviceHeight * 0.012,
        borderRadius: deviceHeight * 0.015,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: deviceWidth * 0.02,
        borderColor: '#DFDFEA',
        borderWidth: 1,
    },
    BoxCardItemImg: {
        width: deviceWidth * 0.05,
        height: deviceWidth * 0.05,
        objectFit: 'contain',
    },
    BoxCardItemText: {
        color: colors.HeadingColor,
        fontSize: small,
        fontFamily: fontFamily.Bold,
    },
    BoxCardItemTitle: {
        color: colors.HeadingColor,
        fontSize: H5,
        fontFamily: fontFamily.Bold,
    },
    CardInnerTop: {
        backgroundColor: colors.White,
        width: '100%',
        paddingHorizontal: deviceWidth * 0.045,
        paddingVertical: deviceHeight * 0.02,
    },
    Title: {
        color: colors.HeadingColor,
        fontSize: H4,
        fontFamily: fontFamily.Bold,
    },
    closeIconBtn: {
        position: 'absolute',
        left: deviceWidth * 0.42,
        top: -deviceHeight * 0.1,
        width: deviceWidth * 0.15,
        height: deviceWidth * 0.15,
        borderRadius: 100,
        backgroundColor: 'rgba(48, 53, 43, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        color: colors.White,
        fontSize: H1BIG,
    },

    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.White,
        paddingHorizontal: deviceWidth * 0.045,
        paddingVertical: deviceHeight * 0.02,
        // backgroundColor: "red",
        borderTopColor: '#DFDFEA',
        borderTopWidth: 1,
    },
    Textbtn: {
        paddingVertical: deviceHeight * 0.015,
        paddingHorizontal: deviceHeight * 0.02,
    },
    TextbtnText: {
        color: colors.HeadingColor,
        fontSize: p,
        fontFamily: fontFamily.Bold,
    },
    sliderButton: {
        backgroundColor: colors.PrimaryColor,
        paddingVertical: deviceHeight * 0.015,
        paddingHorizontal: deviceHeight * 0.05,
        borderRadius: deviceHeight * 0.01,
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