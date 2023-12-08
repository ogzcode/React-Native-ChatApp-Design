import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Logo from "../../../assets/svg-components/Logo";
import { size } from '../../../assets/style/size.js'
import { color } from '../../../assets/style/color.js'
import { typography } from '../../../assets/style/typography.js'

const styles = StyleSheet.create({
    logoBox: {
        height: size["1/4"],
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: typography["fontSizes"]["2xl"],
        fontWeight: typography["fontWeights"]["medium"],
        color: color["white"],
    },
});

export default function LogoHeader() {
    return (
        <View style={styles.logoBox}>
            <Logo width={64} height={64} />
            <Text style={styles.logoText}>TodoBase</Text>
        </View>
    )
}