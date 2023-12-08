import React, { useReducer } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { size } from "../../../assets/style/size.js";
import { color } from "../../../assets/style/color.js";
import { typography } from "../../../assets/style/typography.js";
import { border } from "../../../assets/style/border.js";
import { shadow } from "../../../assets/style/shadow.js";

const styles = StyleSheet.create({
    inputBox: {
        width: size["4/5"],
        marginVertical: size["9"],
        justifyContent: 'center',
        alignItems: 'center',
        gap: size["6"],
    },
    input: {
        width: size["full"],
        paddingHorizontal: size["4"],
        paddingVertical: size["2"],
        backgroundColor: color["white"],
        fontSize: typography["fontSizes"]["lg"],
        borderRadius: border["rounded"]["md"],
        borderWidth: border["width"]["2"],
        borderColor: color["primary"]["500"],
        color: color["primary"]["800"],
    },
    loginBtn: {
        width: size["4/5"],
        backgroundColor: color["primary"]["500"],
        padding: size["3"],
        alignItems: 'center',
        borderRadius: border["rounded"]["md"]
    },
    btnText: {
        color: color["white"],
        fontSize: typography["fontSizes"]["lg"],
        fontWeight: typography["fontWeights"]["bold"],
    }
});

const initalState = {
    email: "",
    password: ""
}

const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}

export default function Form({ onSubmit, btnText }) {
    const [state, dispatch] = useReducer(formReducer, initalState);

    const handleInputChange = (value, type) => {
        dispatch({ type, payload: value });
    }

    const handleSubmit = () => {
        onSubmit(state.email, state.password);
    }

    return (
        <>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={color["primary"]["700"]}
                    placeholder="Email"
                    value={state.email}
                    inputMode="email"
                    onChangeText={(text) => handleInputChange(text, "SET_EMAIL")} />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={color["primary"]["700"]}
                    placeholder="Password"
                    value={state.password}
                    onChangeText={(text) => handleInputChange(text, "SET_PASSWORD")}
                />
            </View>
            <Pressable style={[styles.loginBtn, shadow[6]]} onPress={() => handleSubmit()}>
                <Text style={styles.btnText}>{btnText}</Text>
            </Pressable>
        </>
    )
}