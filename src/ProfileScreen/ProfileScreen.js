import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './style';
import axios from 'axios';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logout } from './api';
export default function ProfileScreen() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // useEffect(() => {
  //   async function fetchData() {
  //     console.log('=========================');
  //     try {
  //       const token =
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFjNDA2N2E3NzU5ODhhM2ExNWExZSIsImlhdCI6MTY4OTYxMzQ3MywiZXhwIjoxNjkwMDQ1NDczfQ.86ahRKEdQGGQVo41hshJzOx_FpLzp-W5zxNhfbgB-0Y';
  //       axios.defaults.headers.common['Cookie'] = `token=${token}`;
  //       const res = await axios.get('http://192.168.1.68:4000/api/v1/me');
  //       console.log(res['data']['user']);
  //       setData(res['data']['user']);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchData();
  //   console.log('Data    ', data);
  // }, []);

  // useEffect(() => {
  //   console.log('Data: ', data);
  // }, [data]);

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.success === true) {
        try {
          console.log('user inf');
          await AsyncStorage.removeItem('userInformation');
          setUserInformation([]);
          console.log('Data removed successfully!');
        } catch (error) {
          console.log('Error removing data:', error);
        }
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // load user information từ asycn storage
  const navigation = useNavigation();
  const [userInformation, setUserInformation] = useState([]);

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        try {
          const userInformationString = await AsyncStorage.getItem(
            'userInformation'
          );
          if (userInformationString) {
            // Parse the JSON string back to an object
            setUserInformation(JSON.parse(userInformationString));
            console.log(
              'User information history retrieved successfully:',
              userInformation.token
            );
          } else {
            console.log('User information history not found.', userInformation);
          }
        } catch (error) {
          console.log('Error retrieving data:', error);
        }
      };
      getData();
    }, [])
  );
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        {userInformation.token ? (
          <ScrollView style={styles.scrollview}>
            <View style={styles.header}>
              <View style={styles.containImageAva}>
                <Image
                  source={{ uri: userInformation.user.avatar.url }}
                  resizeMode="stretch"
                  style={styles.imageAva}
                />
              </View>
              <View style={styles.containName}>
                <Text style={styles.name}>{userInformation.user.name}</Text>
                <Text style={styles.nameMail}>
                  {userInformation.user.email}
                </Text>
              </View>
            </View>
            <View style={styles.containProfile}>
              <View style={styles.containItem}>
                <View style={styles.containIcon}>
                  <Image
                    source={require('../../assets/GenderIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconItemHeight}
                  />
                </View>
                <View style={styles.containHeaderItem}>
                  <Text style={styles.headerItem}>Gender</Text>
                </View>
                <View style={styles.containContentItem}>
                  <Text style={styles.contentItem}>Male</Text>
                </View>
                <TouchableOpacity style={styles.containIcon}>
                  <Image
                    source={require('../../assets/UpdateIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconUpdate}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containItem}>
                <View style={styles.containIcon}>
                  <Image
                    source={require('../../assets/BirthdayIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconItemWidth}
                  />
                </View>
                <View style={styles.containHeaderItem}>
                  <Text style={styles.headerItem}>Birthday</Text>
                </View>
                <View style={styles.containContentItem}>
                  <Text style={styles.contentItem}>12-12-2000</Text>
                </View>
                <TouchableOpacity style={styles.containIcon}>
                  <Image
                    source={require('../../assets/UpdateIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconUpdate}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containItem}>
                <View style={styles.containIcon}>
                  <Image
                    source={require('../../assets/MailIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconItemWidth}
                  />
                </View>
                <View style={styles.containHeaderItem}>
                  <Text style={styles.headerItem}>Email</Text>
                </View>
                <View style={styles.containContentItem}>
                  <Text style={styles.contentItem}>
                    {userInformation.user.email}
                  </Text>
                </View>
                <TouchableOpacity style={styles.containIcon}>
                  <Image
                    source={require('../../assets/UpdateIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconUpdate}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containItem}>
                <View style={styles.containIcon}>
                  <Image
                    source={require('../../assets/PhoneIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconItemHeight}
                  />
                </View>
                <View style={styles.containHeaderItem}>
                  <Text style={styles.headerItem}>Phone Number</Text>
                </View>
                <View style={styles.containContentItem}>
                  <Text style={styles.contentItem}>(307) 555-0133</Text>
                </View>
                <TouchableOpacity style={styles.containIcon}>
                  <Image
                    source={require('../../assets/UpdateIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconUpdate}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containItem}>
                <View style={styles.containIcon}>
                  <Image
                    source={require('../../assets/PasswordIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconItemWidth}
                  />
                </View>
                <View style={styles.containHeaderItem}>
                  <Text style={styles.headerItem}>Change Password</Text>
                </View>
                <View style={styles.containContentItem}>
                  <Text style={styles.contentItem}>***********</Text>
                </View>
                <TouchableOpacity style={styles.containIcon}>
                  <Image
                    source={require('../../assets/UpdateIcon.png')}
                    resizeMode="stretch"
                    style={styles.iconUpdate}
                  />
                </TouchableOpacity>
              </View>
              {/* logiut */}
              <TouchableOpacity
                style={styles.containItem}
                onPress={handleLogout}
              >
                <View style={styles.containIcon}>
                  <Ionicons
                    name="log-out-outline"
                    size={30}
                    style={{ color: '#40BFFF' }}
                  />
                </View>
                <View style={styles.containHeaderItem}>
                  <Text style={styles.headerItem}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.content_nouser}>
            <Text style={styles.title_nouser}>Please login to continue</Text>
            <Button
              buttonStyle={styles.button_nouser}
              title="Login"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
