import { ScrollView } from 'react-native';
import Profile from './section/profile/Profile';
import BlockedUser from './section/blocked/BlockedUser';
import ChatSettings from './section/chatSetting/ChatSettings';
import { useTheme } from '@/theme/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
    const { theme } = useTheme();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, padding: 16 }}>
            <ScrollView style={{
                flex: 1,
                backgroundColor: theme.colors.background,
        }}>
                <Profile />
                <BlockedUser />
                <ChatSettings />
            </ScrollView>
        </SafeAreaView>
    )
}