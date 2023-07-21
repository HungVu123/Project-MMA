import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { login } from './api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [isFocusedMail, setIsFocusedMail] = useState(false);

  const handleFocusMail = () => {
    setIsFocusedMail(true);
  };

  const handleBlurMail = () => {
    setIsFocusedMail(false);
  };

  //   focus password
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  const handleFocusPass = () => {
    setIsFocusedPass(true);
  };

  const handleBlurPass = () => {
    setIsFocusedPass(false);
  };

  // post login
  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log('response', response);
      if (response.success === true) {
        try {
          // Convert the object to a JSON string
          const userInformationString = JSON.stringify(response);

          // Save the JSON string in AsyncStorage
          await AsyncStorage.setItem('userInformation', userInformationString);
          console.log('Data saved successfully!', response);
        } catch (error) {
          console.log('Error saving data:', error);
        }
        navigation.navigate('Home');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Error', 'Invalid Email or Password');
      } else {
        console.error('Error fetching product data:', error);
      }
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const hangleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.constainer}>
      <Text style={{ fontSize: 20, color: '#192a56', fontWeight: 'bold' }}>
        Welcome to our project
      </Text>
      <Text style={{ paddingVertical: 20, color: '#bdc3c7', fontWeight: 800 }}>
        Sign in to continue
      </Text>
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

      <View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.text}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={{ fontSize: 18 }}>Don't have a account? </Text>
        <TouchableOpacity onPress={hangleRegister}>
          <Text style={styles.text}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
