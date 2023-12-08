import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { size } from '../../../assets/style/size.js'
import { color } from '../../../assets/style/color.js'
import { typography } from '../../../assets/style/typography.js'

const styles = StyleSheet.create({
    inlineHeader: {
        width: size["5/6"],
        justifyContent: 'start',
        alignItems: 'start',
        gap: size["2"],
    },
    h1: {
        fontSize: typography["fontSizes"]["2xl"],
        fontWeight: typography["fontWeights"]["bold"],
        color: color["primary"]["800"],
    },
    h3: {
        fontSize: typography["fontSizes"]["md"],
        fontWeight: typography["fontWeights"]["normal"],
        color: color["primary"]["700"],
    },
});

export default function InlineHeader({ header, subtitle }) {
    return (
        <View style={styles.inlineHeader}>
            <Text style={styles.h1}>{header}</Text>
            <Text style={styles.h3}>
                {subtitle}
            </Text>
        </View>
    )
}