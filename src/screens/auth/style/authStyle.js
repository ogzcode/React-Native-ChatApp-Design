import { StyleSheet } from 'react-native';
import { color } from "../../../assets/style/color.js";
import { size } from "../../../assets/style/size.js";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color["primary"][900],
        justifyContent: 'center',
        alignItems: 'center',
    },
    inlineBox: {
        flex: 1,
        width: size["full"],
        backgroundColor: color["white"],
        justifyContent: 'start',
        alignItems: 'center',
        padding: size["6"],
        borderTopRightRadius: size["12"],
        borderTopLeftRadius: size["12"],
    },
});