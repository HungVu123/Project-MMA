import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { register } from './api';

const Register = () => {
  const navigation = useNavigation();

  //   name
  const [name, setName] = useState('');
  const [isFocusedName, setIsFocusedName] = useState(false);
  const handleFocusName = () => {
    setIsFocusedName(true);
  };

  const handleBlurName = () => {
    setIsFocusedName(false);
  };

  //   email
  const [email, setEmail] = useState('');
  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const handleFocusMail = () => {
    setIsFocusedMail(true);
  };

  const handleBlurMail = () => {
    setIsFocusedMail(false);
  };

  //   password
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const handleFocusPass = () => {
    setIsFocusedPass(true);
  };

  const handleBlurPass = () => {
    setIsFocusedPass(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //   passowrd again
  const [isFocusedPassAgain, setIsFocusedPassAgain] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const [passwordAgain, setPasswordAgain] = useState('');
  const handleFocusPassAgain = () => {
    setIsFocusedPassAgain(true);
  };

  const handleBlurPassAgain = () => {
    setIsFocusedPassAgain(false);
  };

  const toggleShowPasswordAgain = () => {
    setShowPasswordAgain(!showPasswordAgain);
  };

  //   check password and password again
  const handleRegister = async () => {
    if (password !== passwordAgain) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    } else if (password.length && passwordAgain.length < 8) {
      Alert.alert('Error', 'Password should be greater than 8 characters');
      return;
    } else if (!name || !email || !password || !passwordAgain) {
      Alert.alert('Error', 'Please enter all fields');
      return;
    }
    try {
      const response = await register(name, email, password);
      console.log('response', response.success);
      if (response.success === true) {
        Alert.alert(
          'Registration Successful',
          'Your registration was successful.',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Login'),
            },
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* name */}
      <View
        style={[
          styles.textInputContainer,
          isFocusedName && styles.focusedContainer,
        ]}
      >
        <Ionicons
          name="person-outline"
          size={35}
          style={[styles.icon, isFocusedName && styles.focusedIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onFocus={handleFocusName}
          onBlur={handleBlurName}
          onChangeText={setName}
        />
      </View>

      {/* email */}
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

      {/* password */}
      <View
        style={[
          styles.textInputContainer,
          isFocusedPass && styles.focusedContainer,
        ]}
      >
        <Ionicons
          name="lock-closed-outline"
          size={35}
          style={[styles.icon, isFocusedPass && styles.focusedIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onFocus={handleFocusPass}
          onBlur={handleBlurPass}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={toggleShowPassword}
        >
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            style={[
              styles.showPasswordIcon,
              isFocusedPass && styles.focusedIcon,
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* password again */}
      <View
        style={[
          styles.textInputContainer,
          isFocusedPassAgain && styles.focusedContainer,
        ]}
      >
        <Ionicons
          name="lock-closed-outline"
          size={35}
          style={[styles.icon, isFocusedPassAgain && styles.focusedIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Password Again"
          secureTextEntry={!showPasswordAgain}
          onFocus={handleFocusPassAgain}
          onBlur={handleBlurPassAgain}
          onChangeText={setPasswordAgain}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={toggleShowPasswordAgain}
        >
          <Ionicons
            name={showPasswordAgain ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            style={[
              styles.showPasswordIcon,
              isFocusedPassAgain && styles.focusedIcon,
            ]}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
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

export default Register;
