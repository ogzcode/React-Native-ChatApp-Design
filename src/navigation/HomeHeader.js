import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../services/firebaseConfig";

import { color } from "../assets/style/color.js";
import { size } from "../assets/style/size.js";
import { typography } from "../assets/style/typography.js";
import { border } from "../assets/style/border.js";


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: size["4"],
        backgroundColor: color["white"],
        borderBottomColor: color["gray"]["300"],
        borderBottomWidth: border["width"]["default"],
    },
    headerTitle: {
        fontSize: typography["fontSizes"]["2xl"],
        fontWeight: typography["fontWeights"]["bold"],
        color: color["primary"]["900"],
    },
    goBack: {
        flexDirection: "row",
        alignItems: "center",
    },
});


export default function HomeHeader({ navigation, route }) {

    const handleLogout = async () => {
        await auth.signOut();
        navigation.navigate("Login");
    };

    return (
        <View style={styles.header}>
            {route.name !== "Home" ? (
                <Pressable onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
            ) : null}
            <Text style={styles.headerTitle}>
                {route.name}
            </Text>
            <Pressable onPress={() => handleLogout()}>
                <AntDesign name="logout" size={24} color={ color["red"]["500"]} />
            </Pressable>
        </View>
    );
}