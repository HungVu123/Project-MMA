import { useNavigation } from '@react-navigation/native';
import { Button, Card, Icon, Text } from '@rneui/themed';
import React, { useEffect } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';

const ShipTo = () => {
  const navigation = useNavigation();

  const addNewAddress = () => {
    navigation.navigate('AddNewAddress');
  };
  // useEffect(() => {
  //   try {
  //     const response = axios.get(`http://192.168.1.9:4000/api/v1/me`);

  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }, []);

  const User = {
    name: 'John1',
    shippingInfos: [
      {
        address: '1/4d Xuan Thoi Thuong',
        phoneNo: 932951234124,
      },
      {
        address: '1/4d Xuan Thoi Thuong',
        phoneNo: 932951234124,
      },
    ],
  };

  return (
    <View>
      {User.shippingInfos &&
        User.shippingInfos.map((data, index) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}
            key={index}
          >
            <Card
              containerStyle={
                index === 0
                  ? styles.card_container.active
                  : styles.card_container
              }
            >
              <View style={styles.container}>
                <View style={styles.container1}>
                  <Text style={styles.container_title}>
                    {User.name} |{' '}
                    <Text style={styles.container_subtitles}>
                      ( +{data.phoneNo})
                    </Text>
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('EditAddress');
                    }}
                  >
                    <Text style={styles.edit_button}>Edit</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.container_subtitles}>{data.address}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
      <Button
        buttonStyle={styles.add_address}
        color="#52D4D0"
        titleStyle={{ fontWeight: 'bold' }}
        onPress={addNewAddress}
      >
        <Feather
          name="plus-circle"
          style={{
            fontSize: 20,
            color: 'white',
          }}
        />{' '}
        Add New Address
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 5,
    active: {
      borderRadius: 5,
      borderColor: '#52D4D0',
    },
  },
  container: { margin: 5 },
  container1: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container_title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  container_subtitles: {
    color: '#9098B1',
    fontSize: 12,
  },
  edit_button: {
    color: '#52D4D0',
    fontSize: 16,
  },
  add_address: {
    marginTop: 16,
    height: 57,
  },
});

export default ShipTo;
