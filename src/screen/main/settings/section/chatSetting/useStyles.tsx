import { StyleSheet } from 'react-native';
import { Theme } from '@/theme/types';

export const useStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        contentContainer: {
            flex: 1,
            marginTop: 16,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 16,
            backgroundColor: theme.colors.background,
            overflow: 'hidden'
        },
        innerContainer: {
            paddingHorizontal: 16,
            paddingTop: 16
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.border,
            marginBottom: 24
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: '600',
            color: theme.colors.secondary
        },
        headerSubtitle: {
            fontSize: 14,
            color: theme.colors.secondary,
            marginTop: 4
        },
        settingsContainer: {
            gap: 16
        },
        sectionContainer: {
            backgroundColor: theme.colors.background,
            borderRadius: 12,
            padding: 12
        },
        sectionTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.secondary,
            marginBottom: 8
        },
        sectionDescription: {
            fontSize: 14,
            color: theme.colors.secondary,
            marginBottom: 16
        },
        fontSettingsContainer: {
            gap: 16
        },
        fontOptionLabel: {
            fontSize: 14,
            color: theme.colors.secondary,
            marginBottom: 8
        },
        switchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16
        },
        switchTitle: {
            fontSize: 16,
            color: theme.colors.secondary
        },
        switchDescription: {
            fontSize: 14,
            color: theme.colors.secondary,
            marginTop: 4
        },
        deleteButton: {
            backgroundColor: theme.colors.primary,
            padding: 16,
            borderRadius: 12,
            marginTop: 8,
            marginBottom: 32
        },
        deleteButtonText: {
            color: theme.colors.background,
            fontWeight: '600',
            fontSize: 16,
            textAlign: 'center'
        }
    });
}; 