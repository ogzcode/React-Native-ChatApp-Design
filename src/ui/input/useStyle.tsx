import { StyleSheet } from 'react-native';
import { useTheme } from '../../theme/useTheme';    

export const useStyle = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
        input: {
            borderWidth: 1,
            borderColor: theme.colors.border,
            padding: 16,
            width: "100%",
            color: theme.colors.secondary,
            fontSize: 16,
            borderRadius: 8,
        },
        focused: {
            borderColor: theme.colors.secondary,
        },
        inputOtpContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        },
        inputOtp: {
            width: 48,
            height: 48,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 8,
            textAlign: 'center',
            fontSize: 16,
            color: theme.colors.secondary,
        },
    });
};