import React from 'react'
import { View, Text, StyleSheet, Pressable, Switch } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { size } from "../../../assets/style/size.js";
import { color } from "../../../assets/style/color.js";
import { typography } from "../../../assets/style/typography.js";
import { border } from "../../../assets/style/border.js";

const styles = StyleSheet.create({
    todoItemBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: size["4"],
        paddingVertical: size["2"],
        marginBottom: size["4"],
        borderWidth: border["width"]["2"],
        borderColor: color["gray"]["300"],
        borderRadius: border["rounded"]["md"],
        marginHorizontal: size["4"],
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    deleteBtn: {
        padding: size["3"],
       backgroundColor: color["red"]["500"],
       borderRadius: border["rounded"]["full"],
    },
    title: {
        fontSize: typography["fontSizes"]["lg"],
        fontWeight: typography["fontWeights"]["medium"],
        color: color["primary"]["900"],
    },
});

export default function Todo({ onUpdateTodo, onDeleteTodo, item}) {
    return (
        <View style={styles.todoItemBox}>
            <View style={styles.itemLeft}>
                <Switch 
                    value={item.completed} 
                    onValueChange={() => onUpdateTodo(item.id, !item.completed)} 
                    thumbColor={item.completed ? color["primary"]["600"] : color["gray"]["400"]}
                    trackColor={{ false: color["gray"]["200"], true: color["primary"]["400"] }}
                />
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Pressable style={styles.deleteBtn} onPress={() => onDeleteTodo(item.id)}>
                <AntDesign name="delete" size={18} color="white" />
            </Pressable>
        </View>
    )
}