import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/theme/useTheme";
import { Edit2 } from "lucide-react-native";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import profileImage from "@/assets/image/profile.jpg"
import { createProfileStyles } from './useStyles';

export default function Profile() {
    const { theme } = useTheme();
    const styles = createProfileStyles(theme);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [profileData, setProfileData] = useState<{
        name: string;
        phone: string;
        image: string | null;
    }>({
        name: 'John Doe',
        phone: '+90 555 555 55 55',
        image: null
    });

    const handleEditProfile = () => {
        setIsModalVisible(true);
    };

    const handleSaveProfile = (data: { name: string; phone: string; image: string | null }) => {
        setProfileData(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileImageContainer}>
                    {profileData.image ? (
                        <Image 
                            source={{ uri: profileData.image }} 
                            style={styles.profileImage} 
                        />
                    ) : (
                        <View style={[styles.profileImage, { backgroundColor: `${theme.colors.primary}20`, justifyContent: 'center', alignItems: 'center' }]}>
                            <Image source={profileImage} style={styles.profileImage} />
                        </View>
                    )}
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={handleEditProfile}
                        activeOpacity={0.7}
                    >
                        <Edit2 size={16} color={theme.colors.background} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{profileData.name}</Text>
                <Text style={styles.profilePhone}>{profileData.phone}</Text>
            </View>

            <EditProfileModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={handleSaveProfile}
                initialData={profileData}
            />
        </View>
    )
}