import { useNavigation } from '@react-navigation/native';
import { Button, Card, Icon, Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { removeAllStorage } from '../../utils/AsyncStorageUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Success = (props) => {
  const navigation = useNavigation();
  const userName = props.route.params;
  console.log(userName);
  const backToHome = async () => {
    // await removeAllStorage();
    const storedString = await AsyncStorage.getItem('cart');
    const stored = JSON.parse(storedString);
    stored[userName] = [];
    await AsyncStorage.setItem('cart', JSON.stringify(stored));
    await navigation.navigate('Cart&History');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="check-circle" type="material " color="#40BFFF" size={100} />
        <Text style={styles.title}>Success</Text>
        <Text style={styles.subTitle}>Thank you for shopping</Text>
        <Button
          buttonStyle={styles.button}
          title="Back To Home"
          onPress={backToHome}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  subTitle: {
    color: '#9098B1',
  },
  button: {
    margin: 20,
    width: 343,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
  },
});

export default Success;
