import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { fontFamily, p } from '../constants/fontConstants';
import { colors } from '../constants/colors';

export default function Ctext({
    style = StyleSheet.create({}),
    children,
    ...props
}) {
    return (
        <Text style={{ ...styles.text, ...style }} {...props}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily.Regular,
        fontSize: p,
        color: colors.black,
    },
});
