import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreen/> */}
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
});
