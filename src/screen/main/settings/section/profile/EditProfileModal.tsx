import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useTheme } from '@/theme/useTheme';
import { X, Camera } from 'lucide-react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import profileImage from "@/assets/image/profile.jpg";
import { createModalStyles } from './useStyles';

type EditProfileModalProps = {
    visible: boolean;
    onClose: () => void;
    onSave: (data: { name: string; phone: string; image: string | null }) => void;
    initialData: {
        name: string;
        phone: string;
        image: string | null;
    };
};

const EditProfileModal = ({ visible, onClose, onSave, initialData }: EditProfileModalProps) => {
    const { theme } = useTheme();
    const styles = createModalStyles(theme);
    const [name, setName] = useState(initialData.name);
    const [phone, setPhone] = useState(initialData.phone);
    const [image, setImage] = useState<string | null>(initialData.image);

    const handleImagePick = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
            alert('Fotoğraf seçmek için izin gerekiyor!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSave = () => {
        onSave({ name, phone, image });
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Profili Düzenle</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <X size={24} color={theme.colors.secondary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageContainer}>
                        {image ? (
                            <Image 
                                source={{ uri: image }}
                                style={styles.imagePreview}
                            />
                        ) : (
                            <View style={[styles.imagePreview, { backgroundColor: `${theme.colors.primary}20`, justifyContent: 'center', alignItems: 'center' }]}>
                                <Image source={profileImage} style={styles.imagePreview} />
                            </View>
                        )}
                        <TouchableOpacity style={styles.imagePickButton} onPress={handleImagePick}>
                            <Camera size={20} color={theme.colors.primary} />
                            <Text style={styles.imagePickText}>Fotoğraf Seç</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="İsim"
                        placeholderTextColor={theme.colors.border}
                    />

                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="Telefon"
                        placeholderTextColor={theme.colors.border}
                        keyboardType="phone-pad"
                    />

                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Kaydet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default EditProfileModal; 