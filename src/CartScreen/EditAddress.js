import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Card } from '@rneui/base';
import { Country, State } from 'country-state-city';
import { Picker } from '@react-native-picker/picker';

export default function EditAddress() {
  const User = {
    name: 'John1',
    phoneNo: 932951234124,
    address: '1/4d Xuan Thoi Thuong',
    city: 'hcm',
    state: 'VietNam',
    country: 'Argentina',
    pinCode: 8593,
  };

  const [address, setAddress] = useState(
    User.address + ', ' + User.city + ', ' + User.state + ', ' + User.country
  );
  const [city, setCity] = useState(User.city);
  const [state, setState] = useState(User.state);
  const [country, setCountry] = useState(User.country);
  const [pinCode, setPinCode] = useState(User.pinCode);
  const [phoneNo, setPhoneNo] = useState(User.phoneNo);

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
          <Text>{User.name}</Text>
        </Card>
        <Card>
          <TextInput
            placeholder="Enter phone number here"
            value={phoneNo.toString()}
            onChangeText={handleInputPhoneNo}
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
            value={pinCode.toString()}
            onChangeText={handleInputPincode}
          />
        </Card>
        <Button
          title="Delete"
          color="error"
          buttonStyle={styles.delete_button}
          titleStyle={{ fontWeight: 'bold' }}
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
