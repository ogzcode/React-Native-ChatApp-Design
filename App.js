import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Navigation />
    </SafeAreaView>
  );
}
