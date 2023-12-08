import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { size } from "../../../assets/style/size.js";
import { color } from "../../../assets/style/color.js";
import { typography } from "../../../assets/style/typography.js";
import { border } from "../../../assets/style/border.js";

const styles = StyleSheet.create({
    addBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: size["4"],
    },
    input: {
        flex: 4,
        height: size["12"],
        borderWidth: border["width"]["2"],
        borderColor: color["primary"]["500"],
        marginRight: size["4"],
        paddingHorizontal: size["2"],
        fontSize: typography["fontSizes"]["lg"],
        fontWeight: typography["fontWeights"]["medium"],
        borderRadius: border["rounded"]["md"],
        color: color["primary"]["900"],
    },
    addBtn: {
        flex: 1,
        height: size["12"],
        backgroundColor: color["primary"]["500"],
        paddingVertical: size["2"],
        paddingHorizontal: size["4"],
        borderRadius: border["rounded"]["md"],
        justifyContent: "center",
        alignItems: "center",
    },
    addBtnText: {
        color: color["white"],
        fontSize: typography["fontSizes"]["lg"],
        fontWeight: typography["fontWeights"]["bold"],
    }
});

export default function Add({ onAddTodo }) {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        onAddTodo(todo);
        setTodo("");
    }
    return (
        <View style={styles.addBox}>
            <TextInput style={styles.input} placeholder="Enter Todo" value={todo} onChangeText={setTodo} />
            <Pressable style={styles.addBtn} onPress={() => handleAddTodo()}>
                <Text style={styles.addBtnText}>Add</Text>
            </Pressable>
        </View>
    )

}