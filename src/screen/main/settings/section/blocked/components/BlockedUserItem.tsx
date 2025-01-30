import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import { useStyles } from '../useStyles';
import { BlockedUserType } from '../types';
import { UnblockConfirmationModal } from './UnblockConfirmationModal';
import CustomSwitch from '@/ui/Switch';

export const BlockedUserItem = ({ name, phoneNumber, id, image }: BlockedUserType) => {
    const [isBlocked, setIsBlocked] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const styles = useStyles();

    const handleUnblockConfirm = () => {
        setIsBlocked(false);
        setShowConfirmation(false);
    };

    const handleUnblock = () => {
        setShowConfirmation(true);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.userContainer}>
                    <Image 
                        source={{ uri: image }}
                        style={styles.userImage}
                        accessibilityLabel={`${name} profil fotoğrafı`}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.phone}>{phoneNumber}</Text>
                    </View>
                </View>
                <CustomSwitch
                    checked={isBlocked}
                    setChecked={handleUnblock}
                />
            </View>
            <UnblockConfirmationModal 
                visible={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onConfirm={handleUnblockConfirm}
                userName={name}
            />
        </>
    );
}; 