import { useNavigation } from '@react-navigation/native';
import { Button, Card, Icon, Text } from '@rneui/themed';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const ShipTo = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Payment');
        }}
      >
        <Card containerStyle={styles.card_container.active}>
          <View style={styles.container}>
            <Text style={styles.container_title}>Uy Dũng</Text>
            <Text style={styles.container_subtitles}>
              3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United
              States
            </Text>
            <Text style={styles.container_subtitles}>+84 98982164</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Button buttonStyle={styles.edit_button} title="Edit" />
              <Button
                buttonStyle={styles.remove_button}
                icon={<Icon name="trash" type="feather" />}
              />
            </View>
          </View>
        </Card>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Payment');
        }}
      >
        <Card containerStyle={styles.card_container}>
          <View style={styles.container}>
            <Text style={styles.container_title}>Uy Dũng</Text>
            <Text style={styles.container_subtitles}>
              3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United
              States
            </Text>
            <Text style={styles.container_subtitles}>+84 98982164</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Button buttonStyle={styles.edit_button} title="Edit" />
              <Button
                buttonStyle={styles.remove_button}
                icon={<Icon name="trash" type="feather" />}
              />
            </View>
          </View>
        </Card>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 5,
    active: {
      borderRadius: 5,
      borderColor: '#40BFFF',
    },
  },
  container: { margin: 24 },
  container_title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 16,
  },
  container_subtitles: {
    color: '#9098B1',
    marginBottom: 16,
    fontSize: 12,
  },
  edit_button: {
    height: 57,
    width: 77,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
  },
  remove_button: { backgroundColor: 'white', marginLeft: 15 },
});

export default ShipTo;
