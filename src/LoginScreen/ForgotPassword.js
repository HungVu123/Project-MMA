import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { forgotPassword } from './api';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const handleFocusMail = () => {
    setIsFocusedMail(true);
  };

  const handleBlurMail = () => {
    setIsFocusedMail(false);
  };

  const handleForgotPassword = async () => {
    try {
      const response = await forgotPassword(email);
      console.log('response', response.success);
      if (response.success === true) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textInputContainer,
          isFocusedMail && styles.focusedContainer,
        ]}
      >
        <Ionicons
          name="mail-outline"
          size={35}
          style={[styles.icon, isFocusedMail && styles.focusedIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          onFocus={handleFocusMail}
          onBlur={handleBlurMail}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    color: '#888',
  },
  input: {
    flex: 1,
  },
  focusedContainer: {
    borderColor: '#52D4D0',
  },
  focusedIcon: {
    color: '#52D4D0',
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#52D4D0',
    paddingVertical: 14,
    borderRadius: 5,
    width: width * 0.93,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ForgotPassword;
