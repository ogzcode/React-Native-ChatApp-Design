import { StyleSheet } from "react-native";
import { Theme } from "@/theme/types";

export const createProfileStyles = (theme: Theme) => 
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      padding: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 12,
    },
    profile: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 4,
      position: 'relative',
    },
    profileImageContainer: {
      position: 'relative',
      marginBottom: 4,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: theme.colors.primary,
    },
    editButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: theme.colors.primary,
      padding: 8,
      borderRadius: 20,
      shadowColor: theme.colors.border,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    profileInfo: {
      alignItems: 'center',
    },
    profileName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.secondary,
      marginBottom: 4,
    },
    profilePhone: {
      fontSize: 14,
      color: theme.colors.border,
      marginBottom: 4,
    },
    profileRole: {
      fontSize: 14,
      color: theme.colors.primary,
      backgroundColor: `${theme.colors.primary}20`,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
      overflow: 'hidden',
    },
    statusContainer: {
      position: 'absolute',
      top: 16,
      left: 16,
    },
  });

export const createModalStyles = (theme: Theme) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      padding: 20,
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.secondary,
    },
    closeButton: {
      padding: 4,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    imagePreview: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: theme.colors.border,
      marginBottom: 10,
    },
    imagePickButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: `${theme.colors.primary}20`,
      padding: 8,
      borderRadius: 8,
      gap: 8,
    },
    imagePickText: {
      color: theme.colors.primary,
      fontWeight: '500',
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
      color: theme.colors.secondary,
    },
    saveButton: {
      backgroundColor: theme.colors.primary,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    saveButtonText: {
      color: theme.colors.background,
      fontWeight: 'bold',
    },
  }); 