import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Card, Divider, Skeleton, Text, Button } from '@rneui/themed';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const History = () => {
  const navigation = useNavigation();
  const login = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.15:4000/api/v1/login',
        {
          email: 'vonglaucac123@gmail.com',
          password: 'vonglaucac123',
        }
      );
      setUserName(response.data.user.name);
    } catch (e) {
      console.log('error at login:' + e);
    }
  };

  const getOrderHistory = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.15:4000/api/v1/orders/me'
      );
      setOrderList(response.data.orders);
      setLoading(false);
    } catch (error) {
      console.log('failed the get order list');
      console.log('error at get orders:' + error);
      setLoading(true);
    }
  };

  const [orderList, setOrderList] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getOrderHistory();
  }, [userInformation]);

  // load user information từ asycn storage
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
            setUserInformation([]);
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
    <SafeAreaView>
      <View>
        {!userInformation.token ? (
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
        ) : orderList ? (
          orderList.map((order, i) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Order Detail', {
                  order: order,
                  username: userName,
                });
              }}
              key={i}
            >
              <Card containerStyle={styles.card_container}>
                <View style={styles.container}>
                  <Text style={styles.container_title}>
                    {moment(order.createdAt).format('DDMMYY')}
                    {order.shippingInfo.address.replace(/[^A-Z]/g, '')}
                    {order.totalPrice}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.container_subtitles}>Order at: </Text>
                    <Text style={styles.container_subtitles}>
                      {moment(order.createdAt).format('MMMM Do, YYYY')}
                    </Text>
                  </View>
                  <Divider style={{ marginBottom: 16 }} />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={styles.container_subtitles}>Order Status</Text>
                    <Text>{order.orderStatus}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={styles.container_subtitles}>Items</Text>
                    <Text>{order.orderItems.length} Items purchasing</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={styles.container_subtitles}>Price</Text>
                    <Text style={styles.container_price}>
                      ${order.totalPrice}
                    </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          ))
        ) : (
          <Text>failed to get lists</Text>
        )}
        {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Order Detail');
        }}
      >
        <Card containerStyle={styles.card_container}>
          <View style={styles.container}>
            <Text style={styles.container_title}>HDSIE456</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.container_subtitles}>Order at: </Text>
              <Text style={styles.container_subtitles}>August 1,2023</Text>
            </View>
            <Divider style={{ marginBottom: 16 }} />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.container_subtitles}>Order Status</Text>
              <Text>Shipping</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.container_subtitles}>Items</Text>
              <Text>2 Items purchasing</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.container_subtitles}>Price</Text>
              <Text style={styles.container_price}>$245,99 </Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>*/}
      </View>
    </SafeAreaView>
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
  container: { margin: 24 },
  container_title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 16,
  },
  container_subtitles: {
    color: '#9098B1',
    marginBottom: 16,
    fontSize: 12,
  },
  container_price: {
    fontWeight: 'bold',
    color: '#52D4D0',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content_nouser: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title_nouser: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  subTitle_nouser: {
    color: '#9098B1',
  },
  button_nouser: {
    margin: 20,
    width: 343,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#52D4D0',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content_nouser: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title_nouser: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  subTitle_nouser: {
    color: '#9098B1',
  },
  button_nouser: {
    margin: 20,
    width: 343,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
    margin: 20,
  },
});

export default History;
