import { useNavigation } from '@react-navigation/native';
import { Button, Card, Divider, Skeleton, Text } from '@rneui/themed';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const History = () => {
  const navigation = useNavigation();
  // const login = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://192.168.1.5:4000/api/v1/login',
  //       {
  //         email: 'vonglaucac123@gmail.com',
  //         password: 'vonglaucac123',
  //       }
  //     );
  //     setUserName(response.data.user.name);
  //   } catch (e) {
  //     console.log('error at login:' + e);
  //   }
  // };

  const getOrderHistory = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.5:4000/api/v1/orders/me'
      );
      setOrderList(response.data.orders);
      setLoading(false);
    } catch (error) {
      console.log('failed the get order list');
      console.log('error at get orders:' + error);
      setLoading(false);

      //fake data
      setOrderList([
        {
          shippingInfo: {
            address: "Xuan Thoi Thuong",
            city: "hcm",
            state: "10",
            country: "BB",
            pinCode: 123,
            phoneNo: 1234567890
          },
          paymentInfo: {
            id: "pi_3N520tKQsuyUyXdE1FXdAEYg",
            status: "succeeded"
          },
          _id: "6457530d08d0f6229926e6fd",
          orderItems: [
            {
              name: "Peanut Butter 600g",
              price: 80,
              quantity: 5,
              image: "../assets/images/vegetable/product/1.png",
              product: "643bb2f3f2234bb688a56c9c",
              _id: "6457530d08d0f6229926e6fe"
            },
            {
              name: "1",
              price: 180,
              quantity: 3,
              image: "../assets/images/vegetable/product/2.png",
              product: "643fa2f1eb52a0fb65a9d6c0",
              _id: "6457530d08d0f6229926e6ff"
            }
          ],
          user: "644b7f650b750a332e5ca7e2",
          paidAt: "2023-05-07T07:28:13.468Z",
          itemPrice: 0,
          taxPrice: 124,
          shippingPrice: 200,
          totalPrice: 944,
          orderStatus: "Delivered",
          createdAt: "2023-05-07T07:28:13.505Z",
          __v: 0,
          deliveryAt: "2023-05-13T09:14:19.793Z"
        },
        {
          shippingInfo: {
            address: "Xuan Thoi Thuong",
            city: "hcm",
            state: "10",
            country: "BB",
            pinCode: 123,
            phoneNo: 1234567890
          },
          paymentInfo: {
            id: "pi_3NUu8lKQsuyUyXdE1qgt09JC",
            status: "succeeded"
          },
          _id: "64b56a043d1ae31305f24027",
          orderItems: [
            {
              name: "Toucan",
              price: 500,
              quantity: 1,
              image: "https://res.cloudinary.com/dfusvbvhg/image/upload/v1689074358/products/hwjpahhte8lt9i9zkjwx.jpg",
              product: "64ad3ab5342961feeccd56c5",
              _id: "64b56a043d1ae31305f24028"
            },
            {
              name: "Aracari",
              price: 400,
              quantity: 3,
              image: "https://res.cloudinary.com/dfusvbvhg/image/upload/v1689074635/products/aoksbspwapbivtyoohaf.jpg",
              product: "64ad3bca342961feeccd56db",
              _id: "64b56a043d1ae31305f24029"
            },
            {
              name: "Humming",
              price: 123,
              quantity: 5,
              image: "https://res.cloudinary.com/dfusvbvhg/image/upload/v1689075026/products/ldvl5hppuangoy8ojnhw.jpg",
              product: "64ad3d51342961feeccd574a",
              _id: "64b56a043d1ae31305f2402a"
            }
          ],
          user: "644b7f650b750a332e5ca7e2",
          paidAt: "2023-07-17T16:19:16.771Z",
          itemPrice: 0,
          taxPrice: 463,
          shippingPrice: 0,
          totalPrice: 2778,
          orderStatus: "Processing",
          createdAt: "2023-07-17T16:19:16.810Z",
          __v: 0
        }
      ]);

    }
  };

  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('hung');
  const [user, setUser] = useState();

  useEffect(() => {
    // login();
    getOrderHistory();
  }, []);

  if (!user) {
    return (
      <View style={styles.container_nouser}>
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
      </View>
    );
  }

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
                  Address: {order.shippingInfo.address}
                </Text>
                <Text style={styles.container_title}>
                  Total Price: {order.totalPrice}
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
});

export default History;
