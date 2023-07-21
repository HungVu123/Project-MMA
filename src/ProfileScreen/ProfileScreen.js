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
export default function ProfileScreen() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      console.log('=========================');
      try {
        // axios.defaults.headers.common['Cookie'] = `${token}`;
        const res = await axios.get('http://192.168.2.20:4000/api/v1/me');
        console.log(data.avatar.url);
        setData(res['data']['user']);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    console.log('Data    ', data);
  }, []);

  useEffect(() => {
    console.log('Data: ', data);
  }, [data]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        {data ? (
          <ScrollView style={styles.scrollview}>
            <View style={styles.header}>
              <View style={styles.containImageAva}>
                <Image
                  source={{ uri: data.avatar.url }}
                  resizeMode="stretch"
                  style={styles.imageAva}
                />
              </View>
              <View style={styles.containName}>
                <Text style={styles.name}>{data.name}</Text>
              </View>
            </View>
            <View style={styles.containProfile}>
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
                  <Text style={styles.contentItem}>{data.email}</Text>
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
                  <Text style={styles.contentItem}>{data.shippingInfos[0].phoneNo}</Text>
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
            </View>
          </ScrollView>
        ) : (
          <Text>Loading</Text>
        )}
      </SafeAreaView>
    </View>
  );
}
