import { useNavigation } from '@react-navigation/native';
import { Button, Card, Icon, Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Success = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="check-circle" type="material " color="#40BFFF" size={100} />
        <Text style={styles.title}>Success</Text>
        <Text style={styles.subTitle}>Thank you for shopping</Text>
        <Button
          buttonStyle={styles.button}
          title="Back To Order"
          onPress={() => {
            navigation.navigate('History');
          }}
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
