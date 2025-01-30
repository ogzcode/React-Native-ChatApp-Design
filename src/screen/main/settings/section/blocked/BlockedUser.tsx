import { View, Text, Alert, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Modal, Image } from "react-native";
import { useState, useEffect } from "react";
import { useTheme } from "@/theme/useTheme";
import { X } from "lucide-react-native";
import blocked from "@/assets/image/block.png";
import { useStyles } from './useStyles';
import { getBlockedUsers } from './constants';
import { BlockedUserType } from './types';
import { BlockedUserItem } from './components/BlockedUserItem';

interface ModalHeaderProps {
    onClose: () => void;
    theme: {
        colors: {
            secondary: string;
        }
    }
}

const ModalHeader = ({ onClose, theme }: ModalHeaderProps) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: theme.colors.secondary }}>
            Engellenen Kullanıcılar
        </Text>
        <TouchableOpacity 
            onPress={onClose}
            accessibilityLabel="Modalı kapat"
            accessibilityRole="button"
        >
            <X size={28} color={theme.colors.secondary} />
        </TouchableOpacity>
    </View>
);

const BlockedUsers = () => {
    const styles = useStyles();
    const [showModal, setShowModal] = useState(false);
    const [blockedUsers, setBlockedUsers] = useState<BlockedUserType[]>([]);
    const { theme } = useTheme();

    useEffect(() => {
        const loadUsers = async () => {
            const users = await getBlockedUsers;
            setBlockedUsers(users);
        };
        loadUsers();
    }, []);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.cardContainer}>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View>
                        <Text style={styles.headerTitle}>Blocked Users</Text>
                        <Text style={styles.headerSubtitle}>Total {blockedUsers.length} users blocked</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={handleOpenModal}
                        accessibilityLabel="Engellenen kullanıcıları görüntüle"
                        accessibilityRole="button"
                    >
                        <Image 
                            source={blocked}
                            style={{ width: 64, height: 64 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={showModal}
                animationType="slide"
                presentationStyle="fullScreen"
            >
                <View style={{ 
                    flex: 1, 
                    backgroundColor: theme.colors.background, 
                    padding: 20 
                }}>
                    <ModalHeader onClose={handleCloseModal} theme={theme} />
                    <FlatList
                        data={blockedUsers}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <BlockedUserItem {...item} />}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default BlockedUsers;