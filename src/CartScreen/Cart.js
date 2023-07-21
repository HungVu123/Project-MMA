import { useNavigation } from '@react-navigation/native';
import { Card, Text, Button, Divider, Dialog } from '@rneui/themed';
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

const Cart = () => {
  return (
    <StripeProvider publishableKey="pk_test_51N3lRlKQsuyUyXdEOMD6DWi5atJQLH8nCBieGzyvP6bTZTEbJ0GcofARTMpBY3TxX1sihaj65WktWp263nB6HBvP00UI0kwySz">
      <StripeTest />
    </StripeProvider>
  );
};

const StripeTest = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const textInputRef = useRef();
  const [visible1, setVisible1] = useState(false);
  const toggleDialog = () => {
    setVisible1(!visible1);
  };
  // const [Id, setId] = useState(user.shippingInfos[0]._id);
  // const [index, setIndex] = useState(0);
  // const handleCheckboxChange = (index) => {
  //   setIndex(index);
  //   setId(user.shippingInfos[index]._id);
  // };

  const data = [
    {
      product: '1',
      name: 'name1',
      price: 1,
      image: require('./image/air-force-1.jpg'),
      stock: 1,
      quantity: number,
    },
    {
      product: '2',
      name: 'name2',
      price: 2,
      image: require('./image/air-force-1.jpg'),
      stock: 1,
      quantity: number,
    },
  ];

  const User = {
    name: 'John1',
    phoneNo: 932951234124,
    address: '1/4d Xuan Thoi Thuong',
  };

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
    }
  };

  const deleteCartItems = () => {
    console.log('deleteCartItem');
  };

  const proceedToShipping = () => {
    navigation.navigate('Ship To');
  };

  const totalPrice =
    data.reduce((acc, item) => acc + item.quantity * item.price, 0) + 20 + 25;
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

  // const shippingInfo = {
  //   address: user.shippingInfos[index].address,
  //   city: user.shippingInfos[index].city,
  //   state: user.shippingInfos[index].state,
  //   pinCode: user.shippingInfos[index].pinCode,
  //   country: user.shippingInfos[index].country,
  //   phoneNo: user.shippingInfos[index].phoneNo,
  // };

  // const order = {
  //   shippingInfo,
  //   orderItems: cartItems,
  //   itemsPrice: subtotal,
  //   taxPrice: tax,
  //   shippingPrice: shippingCharges,
  //   totalPrice: totalPrice,
  // };

  // const createOrder = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       'http://192.168.0.102:4000/api/v1/order/new',
  //       order
  //     );
  //   } catch (error) {
  //     Alert.alert('Error', error.response.data.message, [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       { text: 'OK', onPress: () => console.log('OK Pressed') },
  //     ]);
  //   }
  // }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        textInputRef.current.blur();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleConfirmation = async () => {
    if (key) {
      const { paymentIntent, error } = await confirmPayment(key, {
        paymentMethodType: 'Card',
        billingDetails: {
          email: 'John@email.com',
        },
      });

      if (!error) {
        Alert.alert('Received payment', `Billed for ${paymentIntent?.amount}`);
      } else {
        Alert.alert('Error', error.message);
      }
      await navigation.navigate('Success Payment');
    }
  };

  return (
    <ScrollView>
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
                {User.name} |{' '}
                <Text style={styles.container_subtitles}>
                  ( +{User.phoneNo})
                </Text>
              </Text>
              <Text style={styles.container_subtitles}>{User.address}</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {data &&
          data.map((item, index) => (
            <Card containerStyle={styles.card_container} key={index}>
              <CartItemCard
                item={item}
                deleteCartItems={deleteCartItems}
                increaseQuantity={increase}
                decreaseQuantity={decrease}
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
              Total ({data.length} {data.length <= 1 ? 'Item' : 'Items'})
            </Text>
            <Text style={{}}>{`$${data.reduce(
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
            <Text style={{}}>$20</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Tax</Text>
            <Text style={{}}>$25</Text>
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
            <Text style={styles.product_price}>
              {`$${
                data.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                ) +
                20 +
                25
              }`}
            </Text>
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
            <Text style={styles.cardHolder}>BUI DUC UY DUNG</Text>
          </Card>
          <Dialog.Actions>
            <Dialog.Button
              title="Confirm Payment"
              onPress={handleConfirmation}
            />
          </Dialog.Actions>
        </Dialog>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
