import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./style";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  //State chứa value của ô nào sẽ đổi màu khi focus
  const [focusStates, setFocusStates] = useState({
    username: false,
    email: false,
    password: false,
    rePassword: false,
  });

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isRePasswordVisible, setRePasswordVisible] = useState(false);

  // thay thế onchange
  const handleInputChange = (input, setInput) => {
    setInput(input);
  };

  const handleFocus = (inputName) => {
    setFocusStates({ ...focusStates, [inputName]: true });
  };

  const handleBlur = (inputName) => {
    setFocusStates({ ...focusStates, [inputName]: false });
  };


  // Màu sắc của onFocus và not onFocus
  const getFocusColor = (inputName) => {
    return focusStates[inputName] ? '#52D4D0' : '#ccc';
  };




  //Password Part


  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!isRePasswordVisible);
  };

  const getPasswordIconName = () => {
    return isPasswordVisible ? 'eye-outline' : 'eye-off-outline';
  };

  const getRePasswordIconName = () => {
    return isRePasswordVisible ? 'eye-outline' : 'eye-off-outline';
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Image
          source={require("../../assets/AvaProfile.png")}
          resizeMode="stretch"
          style={styles.images}
        />

        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>Create an new account</Text>
      </View>
      <View style={styles.registerForm}>

        {/* User */}
        <View
          style={[styles.textInputContainer, { borderColor: getFocusColor('username') }]}
        >
          <Ionicons
            name="person-outline"
            size={35}
            style={[styles.icon, { color: getFocusColor('username') }]}
          />
          <TextInput
            style={styles.input}
            placeholder="User Name"
            onFocus={() => handleFocus('username')}
            onBlur={() => handleBlur('username')}
            onChangeText={text => handleInputChange(text, setUsername)}
          />
        </View>

        {/* Email */}
        <View
          style={[styles.textInputContainer, { borderColor: getFocusColor('email') }]}
        >
          <Ionicons
            name="mail-outline"
            size={35}
            style={[styles.icon, { color: getFocusColor('email') }]}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            onChangeText={text => handleInputChange(text, setEmail)}
          />
        </View>

        {/* Password */}
        <View style={[styles.textInputContainer, { borderColor: getFocusColor('password') }]}>
          <Ionicons
            name="lock-closed-outline"
            size={35}
            style={[styles.icon, { color: getFocusColor('password') }]}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
            value={password}
            onChangeText={(text) => handleInputChange(text, setPassword)}
          />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={togglePasswordVisibility}
          >
            <Ionicons
              name={getPasswordIconName()}
              style={[styles.iconPassword, { color: getFocusColor('password') }]}
            />
          </TouchableOpacity>
        </View>

        {/* rePassword */}
        <View style={[styles.textInputContainer, { borderColor: getFocusColor('rePassword') }]}>
          <Ionicons
            name="lock-closed-outline"
            size={35}
            style={[styles.icon, { color: getFocusColor('rePassword') }]}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!isRePasswordVisible}
            onFocus={() => handleFocus('rePassword')}
            onBlur={() => handleBlur('rePassword')}
            value={rePassword}
            onChangeText={(text) => handleInputChange(text, setRePassword)}
          />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={toggleRePasswordVisibility}
          >
            <Ionicons
              name={getRePasswordIconName()}
              style={[styles.iconPassword, { color: getFocusColor('rePassword') }]}
            />
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={{ fontSize: 12, color: "#9098B1" }}>Have a account? </Text>
          <TouchableOpacity>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
