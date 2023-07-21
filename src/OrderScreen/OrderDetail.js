import { Card, Divider, Icon, Image, Text } from '@rneui/themed';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  loadStorage,
  removeAllStorage,
  removeFromStorage,
  saveToStorage,
} from '../../utils/AsyncStorageUtils';
import { useFocusEffect } from '@react-navigation/native';

const OrderDetail = ({ route }) => {
  const order = route.params.order;
  const userName = route.params.username;
  const [favList, setFavList] = useState();

  const itemsPrice = order.orderItems
    .map(function (a) {
      return a.price * a.quantity;
    })
    .reduce((partialSum, a) => partialSum + a, 0);

  const totalPrice = itemsPrice + order.taxPrice + order.shippingPrice;

  const handleAdd = (name, item) => {
    Alert.alert('Confirmation', 'Do you want to add this?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          await saveToStorage('favorites', name, item);
          loadFavorites(userName);
        },
      },
    ]);
  };

  const handleRemove = (name, item) => {
    Alert.alert('Confirmation', 'Do you want to remove this?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          await removeFromStorage('favorites', name, item);
          loadFavorites(userName);
        },
      },
    ]);
  };

  const handleRemoveAllFromFavorites = async () => {
    await removeAllStorage();
    setFavList();
  };

  const loadFavorites = async (name) => {
    const storedFavorites = await loadStorage('favorites', name);
    setFavList(storedFavorites);
  };

  useEffect(() => {
    loadFavorites(userName);
  }, [userName]);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites(userName);
    }, [])
  );

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
                  {favList && favList.some((fav) => fav._id === item._id) ? (
                    <TouchableOpacity
                      onPress={() => handleRemove(userName, item)}
                    >
                      <Icon
                        style={styles.icon}
                        name="favorite"
                        type="material"
                        color="#40BFFF"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handleAdd(userName, item)}>
                      <Icon
                        style={styles.icon}
                        name="favorite-border"
                        type="material"
                        color="#9098B1"
                      />
                    </TouchableOpacity>
                  )}
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
            <Text style={{ flex: 0, textAlign: 'right' }}>
              {order.shippingInfo.address}
            </Text>
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
    color: '#40BFFF',
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
    backgroundColor: '#40BFFF',
  },
});

export default OrderDetail;
