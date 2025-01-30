import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/useTheme';
import { useStyles } from '../useStyles';

interface UnblockConfirmationModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userName: string;
}

export const UnblockConfirmationModal = ({ visible, onClose, onConfirm, userName }: UnblockConfirmationModalProps) => {
    const styles = useStyles();

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                        Kullanıcı Bloğunu Kaldır
                    </Text>
                    
                    <Text style={styles.modalText}>
                        {userName} adlı kullanıcının bloğunu kaldırmak istediğinizden emin misiniz?
                    </Text>

                    <View style={styles.modalActions}>
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.cancelButton}
                            accessibilityLabel="İptal"
                            accessibilityRole="button"
                        >
                            <Text style={styles.cancelButtonText}>
                                İptal
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={onConfirm}
                            style={styles.confirmButton}
                            accessibilityLabel="Onayla"
                            accessibilityRole="button"
                        >
                            <Text style={styles.confirmButtonText}>
                                Evet
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}; 