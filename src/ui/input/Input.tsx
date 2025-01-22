import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { useStyle } from './useStyle';
import { useTheme } from '../../theme/useTheme';
import { useState } from 'react';

interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    type: "text" | "password" | "email" | "number";
    style?: StyleProp<ViewStyle>;
}

export const Input = ({ placeholder, value, onChangeText, type, style }: InputProps) => {
    const styles = useStyle();
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput 
            style={[styles.input, style, isFocused ? styles.focused : {}]} 
            placeholder={placeholder} 
            value={value} 
            onChangeText={onChangeText} 
            keyboardType={type === "number" ? "numeric" : "default"}
            secureTextEntry={type === "password"}
            cursorColor={theme.colors.primary}
            placeholderTextColor={theme.colors.border}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    );
};