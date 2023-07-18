import { Button, Card, Divider, Icon, Image, Text } from '@rneui/themed';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

const OrderDetail = ({ route }) => {
  const order = route.params.order;
  const [userName, setUserName] = useState();

  const login = async () => {
    try {
      const response = await axios.post('http://10.86.4.48:4000/api/v1/login', {
        email: 'vonglaucac123@gmail.com',
        password: 'vonglaucac123',
      });
      setUserName(response.data.user.name);
    } catch (err) {
      console.log('error at login:' + err);
    }
  };

  const handleAdd = async (name, productId) => {
    Alert.alert('Confirmation', 'Do you want to add this?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          await addToFavorites(data);
          loadFavorites();
        },
      },
    ]);
  };

  const itemsPrice = order.orderItems
    .map(function (a) {
      return a.price * a.quantity;
    })
    .reduce((partialSum, a) => partialSum + a, 0);

  const totalPrice = itemsPrice + order.taxPrice + order.shippingPrice;

  useEffect(() => {
    login();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Product</Text>
        {order.orderItems.map((item, i) => (
          <Card containerStyle={styles.card_container} key={i}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../CartScreen/image/air-force-1.jpg')}
                style={styles.img}
              />
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flex: 1,
                    flexDirection: 'row',
                  }}
                >
                  <Text style={styles.product_title}>{item.name}</Text>
                  <Icon
                    style={styles.icon}
                    name="favorite-border"
                    type="material"
                    color="#9098B1"
                  />
                </View>
                <Text style={styles.product_quantity}>x{item.quantity}</Text>
                <Text style={styles.product_price}>
                  ${item.quantity * item.price}
                </Text>
              </View>
            </View>
          </Card>
        ))}
        <Text style={styles.title}>Shipping Details</Text>
        <Card containerStyle={styles.card_container}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Date Shipping</Text>
            <Text style={{}}>
              {moment(order.createdAt).format('MMMM Do, YYYY')}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Status</Text>
            <Text style={{}}>{order.orderStatus}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Order No.</Text>
            <Text style={{}}>
              {moment(order.createdAt).format('DDMMYY')}
              {order.shippingInfo.address.replace(/[^A-Z]/g, '')}
              {order.totalPrice}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Address</Text>
            <Text style={{ flex: 0.6 }}>{order.shippingInfo.address}</Text>
          </View>
        </Card>
        <Text style={styles.title}>Payment Details</Text>
        <Card containerStyle={styles.card_container}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Items (2)</Text>
            <Text style={{}}>${itemsPrice}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Shipping</Text>
            <Text style={{}}>${order.shippingPrice}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Tax charges</Text>
            <Text style={{}}>${order.taxPrice}</Text>
          </View>
          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Total Price</Text>
            <Text style={styles.product_price}>${totalPrice}</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
  product_quantity: {
    fontWeight: 'bold',
    marginLeft: 12,
    fontSize: 14,
    marginBottom: 10,
  },
  img: {
    height: 72,
    width: 72,
  },
  product_title: {
    marginLeft: 12,
    fontWeight: 'bold',
    color: '#192a56',
  },
  product_price: {
    marginLeft: 12,
    fontWeight: 'bold',
    color: '#52D4D0',
  },
  card_container: {
    borderRadius: 5,
    border: 1,
  },
  icon: {
    marginRight: 8,
  },
  checkout_button: {
    margin: 16,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#52D4D0',
  },
});

export default OrderDetail;
