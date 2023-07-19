import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button, Card, Divider, Icon, Skeleton, Text } from '@rneui/themed';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

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

  useEffect(() => {
    login();
    getOrderHistory();
  }, []);

  return (
    <View>
      {loading ? (
        <View>
          <Card>
            <Skeleton height={200} />
          </Card>
          <Card>
            <Skeleton height={200} />
          </Card>
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
});

export default History;
