import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Card,
  Icon,
  Image,
  Text,
  Button,
  Divider,
  Dialog,
} from '@rneui/themed';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { View } from 'react-native';
import CartItemCard from './CartItemCard';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {
  CardField,
  StripeProvider,
  confirmPayment,
  initPaymentSheet,
} from '@stripe/stripe-react-native';
import {
  loadStorage,
  removeFromStorage,
  saveToStorage,
} from '../../utils/AsyncStorageUtils';

const Cart = () => {
  return (
    <StripeProvider publishableKey="pk_test_51N3lRlKQsuyUyXdEOMD6DWi5atJQLH8nCBieGzyvP6bTZTEbJ0GcofARTMpBY3TxX1sihaj65WktWp263nB6HBvP00UI0kwySz">
      <StripeTest />
    </StripeProvider>
  );
};

const StripeTest = ({ route }) => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const [visible1, setVisible1] = useState(false);
  const toggleDialog = () => {
    setVisible1(!visible1);
  };
  const [user, setUser] = useState();
  const [Id, setId] = useState(user?.shippingInfos[0]?._id);
  const [index, setIndex] = useState(0);
  const handleCheckboxChange = (index) => {
    setIndex(index);
    setId(user?.shippingInfos[index]?._id);
  };

  const receivedData = route?.params.data1 || 0;
  console.log(receivedData);

  const [cart, setCart] = useState([]);
  console.log(cart);

  const login = async () => {
    try {
      const response = await axios.post(
        'http://192.168.0.102:4000/api/v1/login',
        {
          email: 'vonglaucac123@gmail.com',
          password: 'vonglaucac123',
        }
      );
      setUser(response.data.user);
    } catch (e) {
      console.log('error at login:' + e);
    }
  };

  const increase = async (name, item) => {
    await setNumber(number + 1);
    await removeFromStorage('cart', name, item);
    item.quantity = number;
    await saveToStorage('cart', name, item);
    loadCart(user?.name);
  };

  const decrease = async (name, item) => {
    if (number > 0) {
      await setNumber(number - 1);
      await removeFromStorage('cart', name, item);
      item.quantity = number;
      await saveToStorage('cart', name, item);
      loadCart(user?.name);
    } else {
      Alert.alert('Confirmation', 'Do you want to remove this?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await removeFromStorage('cart', name, item);
            loadCart(user?.name);
          },
        },
      ]);
    }
  };

  const deleteCartItems = (name, item) => {
    Alert.alert('Confirmation', 'Do you want to remove this?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          await removeFromStorage('cart', name, item);
          loadCart(user?.name);
        },
      },
    ]);
  };

  const loadCart = async (name) => {
    const storedCart = await loadStorage('cart', name);
    await setCart(storedCart);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadCart(user?.name);
    }, [])
  );

  console.log(cart);
  const proceedToShipping = () => {
    navigation.navigate('Ship To');
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal > 1000 ? 0 : 50;
  const tax = subtotal * 0.2;
  const totalPrice = subtotal + tax + shippingCharges;
  const paymentData = {
    amount: Math.round(totalPrice * 100),
  };
  const [key, setKey] = useState('');
  const fetchData = async () => {
    try {
      const { data } = await axios.post(
        'http://192.168.0.102:4000/api/v1/payment/process',
        paymentData
      );

      const client_secret = await data.client_secret;
      setKey(client_secret);
      initPaymentSheet({ paymentIntentClientSecret: key });
    } catch (error) {
      console.error('Error', error.response.data.message);
    }
  };

  const shippingInfo = {
    address: user?.shippingInfos[index].address,
    city: user?.shippingInfos[index].city,
    state: user?.shippingInfos[index].state,
    pinCode: user?.shippingInfos[index].pinCode,
    country: user?.shippingInfos[index].country,
    phoneNo: user?.shippingInfos[index].phoneNo,
  };

  const orderItems = cart.map((item) => ({
    product: item._id,
    name: `${item.name}`,
    price: item.price,
    image: `${item.images[0].url}`,
    quantity: item.quantity,
  }));

  const order = {
    shippingInfo,
    orderItems: orderItems,
    itemsPrice: subtotal,
    taxPrice: tax,
    shippingPrice: shippingCharges,
    totalPrice: totalPrice,
  };

  useEffect(() => {
    fetchData();
    login();
  }, []);

  useEffect(() => {
    loadCart(user?.name);
  }, [user?.name]);

  const handleConfirmation = async () => {
    if (key) {
      const { paymentIntent, error } = await confirmPayment(key, {
        paymentMethodType: 'Card',
        billingDetails: {
          email: 'John@email.com',
        },
      });
      if (!error) {
        await Alert.alert(
          'Received payment',
          `Billed for ${paymentIntent?.amount}`
        );
        order.paymentInfo = {
          id: paymentIntent.id,
          status: paymentIntent.status,
        };
        try {
          const { data } = await axios.post(
            'http://192.168.0.102:4000/api/v1/order/new',
            order
          );
        } catch (error) {
          Alert.alert('Error', error.response.data.message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
      } else {
        Alert.alert('Error', error.message);
      }
    }
    await navigation.navigate('Success Payment');
  };

  return (
    <ScrollView>
      {cart.length === 0 ? (
        <Card style={styles.container_cart}>
          <TextInput style={styles.container_title}>Nothing in Cart</TextInput>
        </Card>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={proceedToShipping}>
            <Card>
              <View>
                <Text style={styles.container_title}>
                  <Entypo
                    name="location"
                    style={{
                      fontSize: 15,
                    }}
                  />{' '}
                  Delivery Address
                </Text>
                <Text style={styles.container_name}>
                  {user?.name} |{' '}
                  <Text style={styles.container_subtitles}>
                    ( +{user?.shippingInfos[index]?.phoneNo})
                  </Text>
                </Text>
                <Text style={styles.container_subtitles}>
                  {user?.shippingInfos[index]?.address},{' '}
                  {user?.shippingInfos[index]?.city},{' '}
                  {user?.shippingInfos[index]?.state},{' '}
                  {user?.shippingInfos[index]?.country}
                </Text>
              </View>
            </Card>
          </TouchableOpacity>

          {cart?.map((item, index) => (
            <Card containerStyle={styles.card_container} key={index}>
              <CartItemCard
                item={item}
                deleteCartItems={() => deleteCartItems(user?.name, item)}
                increaseQuantity={() => increase(user?.name, item)}
                decreaseQuantity={() => decrease(user?.name, item)}
              />
            </Card>
          ))}
          <Card containerStyle={styles.card_container}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 16,
              }}
            >
              <Text style={{ color: '#9098B1' }}>
                Total ({cart?.length} {cart?.length <= 1 ? 'Item' : 'Items'})
              </Text>
              <Text style={{}}>{`$${cart?.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 16,
              }}
            >
              <Text style={{ color: '#9098B1' }}>Shipping</Text>
              <Text style={{}}>${shippingCharges}</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 16,
              }}
            >
              <Text style={{ color: '#9098B1' }}>Tax</Text>
              <Text style={{}}>${tax}</Text>
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
              <Text style={styles.product_price}>{`$${totalPrice}`}</Text>
            </View>
          </Card>
          <Button
            title="Check Out"
            onPress={toggleDialog}
            buttonStyle={styles.checkout_button}
          />
          <Dialog isVisible={visible1} onBackdropPress={toggleDialog}>
            <Dialog.Title title="Enter Your Card" />
            <Card containerStyle={styles.container1}>
              <CardField
                postalCodeEnabled={false}
                placeholder={{
                  number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                  backgroundColor: '#52D4D0',
                  textColor: '#FFFFFF',
                }}
                style={{
                  width: '100%',
                  height: 20,
                  marginVertical: 10,
                }}
                onCardChange={(cardDetails) => {
                  console.log('cardDetails', cardDetails);
                }}
                onFocus={(focusedField) => {
                  console.log('focusField', focusedField);
                }}
              />
              <Text style={styles.cardHolder}>{user?.name}</Text>
            </Card>
            <Dialog.Actions>
              <Dialog.Button
                title="Confirm Payment"
                onPress={handleConfirmation}
              />
            </Dialog.Actions>
          </Dialog>
        </View>
      )}

      {/* : (
        <View style={styles.content_nouser}>
          <Text style={styles.title_nouser}>Please login to continue</Text>
          <Button
            buttonStyle={styles.button_nouser}
            title="Login"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container_cart: {
    flex: 1,
    justifyContent: 'center', // Aligns items along the primary axis (vertically in this case)
    alignItems: 'center',
  },
  container: {
    flex: 1,
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
  input: {
    width: 40,
    height: 24,
    textAlign: 'center',
    backgroundColor: '#EBF0FF',
    padding: 2,
    fontSize: 12,
    color: '#223263',
  },
  button: {
    width: 40,
    height: 24,
    padding: 0,
    margin: 0,
    borderRadius: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  checkout_button: {
    margin: 16,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#52D4D0',
  },

  container_title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  container_name: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5,
  },
  container_subtitles: {
    color: '#9098B1',
    fontSize: 12,
  },
  edit_button: {
    height: 57,
    width: 77,
    borderRadius: 5,
    backgroundColor: '#52D4D0',
  },
  remove_button: { backgroundColor: 'white', marginLeft: 15 },
  container1: {
    borderRadius: 10,
    backgroundColor: '#52D4D0',
    color: 'white',
    width: '100%',
    marginLeft: 0,
  },
  cardHolder: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Cart;
