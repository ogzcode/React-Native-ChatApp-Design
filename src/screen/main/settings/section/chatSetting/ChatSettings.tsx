import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '@/theme/useTheme';
import Switch from '@/ui/Switch';
import { useEffect, useState } from 'react';
import Select, { SelectOption } from '@/ui/Select';
import { useStyles } from './useStyles';
import { AlertDialog } from '@/ui/AlertDialog';

export default function ChatSettings() {
    const { theme, toggleTheme } = useTheme();
    const styles = useStyles(theme);
    const [autoDownload, setAutoDownload] = useState(false);
    const [autoBackup, setAutoBackup] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('');
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedFontSize, setSelectedFontSize] = useState('');
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const handleDeleteChats = () => {
        // Delete all chats logic
        console.log('All chats deleted');
    };

    const fontSizes: SelectOption[] = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
    ];

    const fontTypes: SelectOption[] = [
        { label: 'System Default', value: 'system' },
        { label: 'Arial', value: 'arial' },
        { label: 'Roboto', value: 'roboto' },
    ];

    const themes: SelectOption[] = [
        { label: 'Default', value: 'default' },
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
    ];

    useEffect(() => {
        toggleTheme(selectedTheme);
    }, [selectedTheme]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.innerContainer}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerTitle}>
                                Chat Settings
                            </Text>
                            <Text style={styles.headerSubtitle}>
                                Customize your chat experience
                            </Text>
                        </View>
                    </View>

                    {/* Settings Sections */}
                    <View style={styles.settingsContainer}>
                        {/* Theme Selection */}
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                                Theme
                            </Text>
                            <Text style={styles.sectionDescription}>
                                Customize the overall appearance
                            </Text>
                            <Select 
                                options={themes} 
                                selectedValue={selectedTheme}
                                onValueChange={setSelectedTheme}
                            />
                        </View>

                        {/* Font Settings */}
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                                Font Settings
                            </Text>
                            <Text style={styles.sectionDescription}>
                                Adjust reading comfort settings
                            </Text>
                            
                            <View style={styles.fontSettingsContainer}>
                                <View>
                                    <Text style={styles.fontOptionLabel}>
                                        Font Type
                                    </Text>
                                    <Select 
                                        options={fontTypes} 
                                        selectedValue={selectedFont}
                                        onValueChange={setSelectedFont}
                                    />
                                </View>
                                
                                <View>
                                    <Text style={styles.fontOptionLabel}>
                                        Font Size
                                    </Text>
                                    <Select 
                                        options={fontSizes} 
                                        selectedValue={selectedFontSize}
                                        onValueChange={setSelectedFontSize}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Switches Section */}
                        <View style={styles.sectionContainer}>
                            <View style={styles.switchContainer}>
                                <View>
                                    <Text style={styles.switchTitle}>
                                        Auto-Download Media
                                    </Text>
                                    <Text style={styles.switchDescription}>
                                        Automatically download received media
                                    </Text>
                                </View>
                                <Switch 
                                    checked={autoDownload} 
                                    setChecked={setAutoDownload}
                                />
                            </View>
                            
                            <View style={styles.switchContainer}>
                                <View>
                                    <Text style={styles.switchTitle}>
                                        Auto Backup
                                    </Text>
                                    <Text style={styles.switchDescription}>
                                        Keep your chats backed up
                                    </Text>
                                </View>
                                <Switch 
                                    checked={autoBackup} 
                                    setChecked={setAutoBackup}
                                />
                            </View>
                        </View>

                        {/* Delete Button */}
                        <TouchableOpacity 
                            onPress={() => setIsAlertDialogOpen(true)}
                            style={styles.deleteButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.deleteButtonText}>
                                Delete All Chats
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <AlertDialog
                isOpen={isAlertDialogOpen}
                onClose={() => setIsAlertDialogOpen(false)}
                title="Delete All Chats"
                description="Are you sure you want to delete all chats?"
                onConfirm={handleDeleteChats}
                type="danger"
            />
        </SafeAreaView>
    );
} 