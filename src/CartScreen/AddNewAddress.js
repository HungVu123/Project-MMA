import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Button, Card } from '@rneui/base';
import { Country, State } from 'country-state-city';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

export default function AddNewAddress() {
  const User = {
    name: 'John1',
  };

  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [pinCode, setPinCode] = useState();
  const [phoneNo, setPhoneNo] = useState();

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

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        'http://192.168.0.102:4000/api/v1/shippinginfo/new',
        {
          // Request body data
          address: address,
          city: city,
          state: state,
          country: country,
          pinCode: pinCode,
          phoneNo: phoneNo,
        }
      );
    } catch (error) {
      Alert.alert('Error', error.response.data.message, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>User Info</Text>
        <Card>
          <Text>{User.name}</Text>
        </Card>
        <Card>
          <TextInput
            placeholder="Enter phone number here"
            value={phoneNo}
            onChangeText={handleInputPhoneNo}
            keyboardType="numeric"
          />
        </Card>
        <Text style={styles.text}>Shipping Info</Text>
        <Card>
          <Text>Address:</Text>
          <TextInput
            placeholder="Enter address here"
            value={address}
            onChangeText={handleInputAddress}
          />
        </Card>
        <Card>
          <Text>Country:</Text>
          <Picker selectedValue={country} onValueChange={handleCountry}>
            <Picker.Item label="Choose Your Country" value="" />
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
        {country && (
          <Card>
            <Text>State:</Text>
            <Picker selectedValue={state} onValueChange={handleState}>
              {State &&
                State.getStatesOfCountry(country).map((item) => (
                  <Picker.Item
                    key={item.isoCode}
                    label={item.name}
                    value={item.isoCode}
                  />
                ))}
            </Picker>
          </Card>
        )}
        <Card>
          <Text>City:</Text>
          <TextInput
            placeholder="Enter city here"
            value={city}
            onChangeText={handleInputCity}
          />
        </Card>
        <Card>
          <Text>Pincode:</Text>
          <TextInput
            placeholder="Enter pincode here"
            value={pinCode}
            onChangeText={handleInputPincode}
            keyboardType="numeric"
          />
        </Card>
        <Button
          title="Save Changes"
          buttonStyle={styles.save_button}
          titleStyle={{ fontWeight: 'bold' }}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}
