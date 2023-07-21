import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Card } from '@rneui/base';
import { Country, State } from 'country-state-city';
import { Picker } from '@react-native-picker/picker';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function EditAddress({ route }) {
  const receivedData = route.params?.data;
  const [user, setUser] = useState();
  const isFocused = useIsFocused();
  const login = async () => {
    if (isFocused) {
      try {
        const response = await axios.post(
          'http://192.168.0.102:4000/api/v1/login',
          {
            email: 'vonglaucac123@gmail.com',
            password: 'vonglaucac123',
          }
        );
        setUser(response.data.user);
        console.log(user?.shippingInfos[receivedData].phoneNo);
        console.log(receivedData);
      } catch (e) {
        console.log('error at login:' + e);
      }
    }
  };

  useEffect(() => {
    login();
  }, [isFocused]);
  const navigation = useNavigation();

  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [pinCode, setPinCode] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const deleteAddress = async () => {
    try {
      const response = await axios.put(
        `http://192.168.0.102:4000/api/v1//shippinginfo/${user?.shippingInfos[receivedData]._id}`
      );
      await navigation.navigate('Ship To');
    } catch (e) {
      console.log('error' + e);
    }
  };

  const handleInputPhoneNo = (text) => {
    setPhoneNo(text);
  };

  const handleInputAddress = (text) => {
    setAddress(text);
  };

  const handleInputCity = (text) => {
    setCity(text);
  };

  const handleInputPincode = (text) => {
    setPinCode(text);
  };

  const handleCountry = (value) => {
    setCountry(value);
  };

  const handleState = (value) => {
    setState(value);
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      marginLeft: 18,
      marginTop: 15,
    },
    save_button: {
      margin: 16,
      height: 57,
      borderRadius: 5,
      backgroundColor: '#52D4D0',
    },
    delete_button: {
      margin: 16,
      height: 57,
      borderRadius: 5,
    },
  });

  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>User Info</Text>
        <Card>
          <Text>{user?.name}</Text>
        </Card>
        <Card>
          <TextInput
            placeholder="Enter phone number here"
            value={user?.shippingInfos[receivedData].phoneNo.toString()}
            onChangeText={handleInputPhoneNo}
          />
        </Card>
        <Text style={styles.text}>Shipping Info</Text>
        <Card>
          <Text>Address:</Text>
          <TextInput
            placeholder="Enter address here"
            value={
              user?.shippingInfos[receivedData].address +
              ', ' +
              user?.shippingInfos[receivedData].city +
              ', ' +
              user?.shippingInfos[receivedData].state +
              ', ' +
              user?.shippingInfos[receivedData].country
            }
            onChangeText={handleInputAddress}
          />
        </Card>
        <Card>
          <Text>Country:</Text>
          <Picker
            selectedValue={user?.shippingInfos[receivedData].country}
            onValueChange={handleCountry}
          >
            {Country &&
              Country.getAllCountries().map((item) => (
                <Picker.Item
                  key={item.isoCode}
                  label={item.name}
                  value={item.isoCode}
                />
              ))}
          </Picker>
        </Card>
        <Card>
          <Text>State:</Text>
          <Picker
            selectedValue={user?.shippingInfos[receivedData].state}
            onValueChange={handleState}
          >
            {State &&
              State.getStatesOfCountry(
                user?.shippingInfos[receivedData].country
              ).map((item) => (
                <Picker.Item
                  key={item.isoCode}
                  label={item.name}
                  value={item.isoCode}
                />
              ))}
          </Picker>
        </Card>
        <Card>
          <Text>City:</Text>
          <TextInput
            placeholder="Enter city here"
            value={user?.shippingInfos[receivedData].city}
            onChangeText={handleInputCity}
          />
        </Card>
        <Card>
          <Text>Pincode:</Text>
          <TextInput
            placeholder="Enter pincode here"
            value={user?.shippingInfos[receivedData].pinCode.toString()}
            onChangeText={handleInputPincode}
          />
        </Card>
        <Button
          title="Delete"
          color="error"
          buttonStyle={styles.delete_button}
          titleStyle={{ fontWeight: 'bold' }}
          onPress={() => deleteAddress()}
        />
        <Button
          title="Save Changes"
          buttonStyle={styles.save_button}
          titleStyle={{ fontWeight: 'bold' }}
        />
      </View>
    </ScrollView>
  );
}
