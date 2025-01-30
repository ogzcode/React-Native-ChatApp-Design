import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';

export interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  type?: 'success' | 'warning' | 'danger' | 'default';
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  confirmLabel = 'Onayla',
  cancelLabel = 'İptal',
  onConfirm,
  type = 'default'
}) => {
  const { theme } = useTheme();

  const getTypeColor = () => {
    switch (type) {
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'danger':
        return theme.colors.danger;
      default:
        return theme.colors.primary;
    }
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
      padding: 20,
      width: '80%',
      maxWidth: 400,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.secondary,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: theme.colors.secondary,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 10,
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    confirmButton: {
      backgroundColor: getTypeColor(),
    },
    cancelButton: {
      borderColor: theme.colors.border,
      borderWidth: 1,
    },
    cancelButtonText: {
      color: theme.colors.secondary,
    },
    buttonText: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <View 
          style={styles.dialogContainer}
          accessible={true}
          accessibilityRole="alert"
          accessibilityLabel={title}
        >
          <Text style={styles.title}>{title}</Text>
          {description && (
            <Text style={styles.description}>{description}</Text>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel={cancelLabel}
            >
              <Text style={styles.cancelButtonText}>{cancelLabel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={() => {
                onConfirm();
                onClose();
              }}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel={confirmLabel}
            >
              <Text style={styles.buttonText}>{confirmLabel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}; 