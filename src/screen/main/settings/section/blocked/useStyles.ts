import { StyleSheet } from 'react-native';
import { useTheme } from '@/theme/useTheme';

export const useStyles = () => {
    const { theme } = useTheme();
    
    return StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: theme.colors.background,
            marginTop: 16,
        },
        cardContainer: {
            backgroundColor: theme.colors.background,
            padding: 20,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 12,
            shadowColor: theme.colors.border,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 2,
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: '700',
            color: theme.colors.secondary,
            marginBottom: 4,
        },
        headerSubtitle: {
            fontSize: 14,
            color: theme.colors.border,
        },
        container: {
            backgroundColor: theme.colors.background,
            padding: 16,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 12,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        userContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginRight: 16,
        },
        userImage: {
            width: 48,
            height: 48,
            borderRadius: 24,
            marginRight: 12,
        },
        infoContainer: {
            flex: 1,
        },
        name: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.secondary,
            marginBottom: 4,
        },
        phone: {
            fontSize: 13,
            color: theme.colors.border,
            fontWeight: '500',
        },
        modalOverlay: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        modalContent: {
            backgroundColor: theme.colors.background,
            padding: 24,
            borderRadius: 16,
            width: '80%'
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.colors.secondary,
            marginBottom: 16
        },
        modalText: {
            fontSize: 14,
            color: theme.colors.border,
            marginBottom: 24
        },
        modalActions: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 12
        },
        cancelButton: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            backgroundColor: theme.colors.border + '20'
        },
        confirmButton: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            backgroundColor: theme.colors.primary
        },
        cancelButtonText: {
            color: theme.colors.secondary,
            fontWeight: '500'
        },
        confirmButtonText: {
            color: '#fff',
            fontWeight: '500'
        }
    });
}; 