import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navigation from './src/navigation/Navigation';
import { ThemeProvider } from './src/theme/useTheme';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
        <StatusBar/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
