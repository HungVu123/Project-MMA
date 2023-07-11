import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/HomeScreen/HomeScreen';
import LoginScreen from './src/LoginScreen/LoginScreen';
import DetailScreen from './src/DetailScreen/DetailSrceen';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <LoginScreen /> */}
      <DetailScreen />
      {/* <ProfileScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
