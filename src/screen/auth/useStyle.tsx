import { StyleSheet } from 'react-native';
import { useTheme } from '../../theme/useTheme';

export const useStyle = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
        },
        title: {
            color: theme.colors.secondary,
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 8,
            textAlign: 'center',
        },
        description: {
            color: theme.colors.secondary,
            fontSize: 14,
            textAlign: 'center',
            marginBottom: 32,
            paddingHorizontal: 8,
        },
        loginButton: {
            backgroundColor: theme.colors.primary,
            padding: 16,
            borderRadius: 8,
            width: '100%',
            marginTop: 24,
        },
        loginButtonText: {
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
        },
        image: {
            width: 240,
            height: 240,
            marginBottom: 16,
        },
        input: {
            marginTop: 32,
        },
        inputContainer: {
            width: '80%',
            maxWidth: 400,
            alignItems: 'center',
            marginTop: 24,
        },
        decorativeTop: {
            position: 'absolute',
            top: 40,
            right: 30,
        },
        decorativeBottom: {
            position: 'absolute',
            bottom: 40,
            left: 30,
        },
        backButton: {
            position: 'absolute',
            top: 16,
            left: 16,
            width: 36,
            height: 36,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};