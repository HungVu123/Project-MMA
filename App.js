import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailSrceen from './src/DetailScreen/DetailSrceen';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';
import DetailScreen from './src/DetailScreen/DetailSrceen';

export default function App() {
  return (
    <View style={styles.container}>
      <DetailScreen/>
    </View>
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
