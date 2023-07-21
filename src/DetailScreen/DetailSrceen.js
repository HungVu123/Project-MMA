import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import moment from 'moment';
import styles from './style';
import axios from 'axios';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  loadStorage,
  loadUserInfo,
  removeAllStorage,
  removeFromStorage,
  saveToStorage,
  saveUserInfo,
} from '../../utils/AsyncStorageUtils';
import { G } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';
export default function DetailScreen(prop) {
  const [data, setData] = useState(null);
  const [review, setReview] = useState([]);
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const [cartList, setCartList] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        setData(prop.route.params);
        setReview(prop.route.params['reviews']);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  // const login = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://192.168.1.15:4000/api/v1/login',
  //       {
  //         email: 'vonglaucac123@gmail.com',
  //         password: 'vonglaucac123',
  //       }
  //     );
  //     setUserName(response.data.user.name);
  //     await saveUserInfo(response.data.user);
  //     await loadUserInfo();
  //   } catch (e) {
  //     console.log('error at login:' + e);
  //   }
  // };
  const loadCart = async (name) => {
    const storedCart = await loadStorage('cart', name);
    console.log(name);
    setCartList(storedCart);
  };

  //xử lí bỏ hàng vào cart
  const handleAddToCart = (name, item) => {
    Alert.alert('Confirmation', 'Do you want to add this?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          item.quantity = 1;
          console.log('name:' + name);
          console.log(item);
          await saveToStorage('cart', name, item);
          loadCart(name);
        },
      },
    ]);
  };
  const handleRemoveFromCart = (name, item) => {
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
          loadCart(name);
        },
      },
    ]);
  };
  useEffect(() => {
    loadCart(userInformation?.user?.name);
  }, [userInformation?.user?.name]);

  useFocusEffect(
    React.useCallback(() => {
      loadCart(userInformation?.user?.name);
    }, [])
  );

  // load user information từ asycn storage
  const [userInformation, setUserInformation] = useState([]);

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
            const data = JSON.parse(userInformationString);
            loadCart(data.user.name);
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
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.navbar}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.goBackIcon}
              source={require('../../assets/goBack.png')}
              resizeMode="stretch"
            />
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Back</Text>
          </TouchableOpacity>
        </View>
        {data ? (
          <ScrollView style={styles.scrollview}>
            <View style={styles.containImage}>
              <Image
                source={{ uri: data.images[0].url }}
                style={styles.image}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.containHeaderLike}>
              <View style={styles.containHeader}>
                <Text style={styles.header}>{data.name}</Text>
              </View>
              <TouchableOpacity style={styles.containButtonLike}>
                <Image
                  style={styles.buttonLike}
                  source={require('../../assets/liked.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containRating}>
              {[...Array(Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/start.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              {[...Array(5 - Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/unstart.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.price}>{data.price}$</Text>
            <Text style={styles.desc}>Description: </Text>
            <Text style={styles.descDetail}>{data.des}</Text>
            <View style={styles.containHeaderReview}>
              <Text style={styles.headerReview}>Review Product</Text>
              {review.length > 0 ? (
                <TouchableOpacity
                  style={styles.clickHeaderMore}
                  onPress={() => {
                    prop.navigation.navigate('ReviewScreen', review);
                  }}
                >
                  <Text style={styles.headerMore}>See More</Text>
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>
            <View style={styles.containRating}>
              {[...Array(Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/start.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              {[...Array(5 - Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/unstart.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              <Text>{data.ratings}</Text>
              {review.length > 0 ? (
                <Text> ({review.length} review)</Text>
              ) : (
                <Text> (0 review)</Text>
              )}
            </View>
            {review.length > 0 ? (
              <View style={styles.containDetailRating}>
                <View style={styles.containHeaderDetailRating}>
                  <View style={styles.containAvaRating}>
                    <Image
                      source={{ uri: review[0].avatarUrl }}
                      resizeMode="stretch"
                      style={styles.avaRating}
                    />
                  </View>
                  <View style={styles.containNameAndRating}>
                    <Text style={styles.containNameRating}>
                      {review[0].name}
                    </Text>
                    <View style={styles.containRating}>
                      {[...Array(Math.round(review[0].rating))].map(
                        (_, index) => (
                          <TouchableOpacity key={index}>
                            <Image
                              source={require('../../assets/start.png')}
                              style={styles.rating}
                            />
                          </TouchableOpacity>
                        )
                      )}
                      {[...Array(5 - Math.round(review[0].rating))].map(
                        (_, index) => (
                          <TouchableOpacity key={index}>
                            <Image
                              source={require('../../assets/unstart.png')}
                              style={styles.rating}
                            />
                          </TouchableOpacity>
                        )
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.containDescRating}>
                  <Text style={styles.detailRating}>{review[0].comment}</Text>
                  <Text style={styles.detailRating}>
                    {moment(review[0].createReviewAt).format(
                      'DD-MM-YY HH:mm:ss'
                    )}
                  </Text>
                </View>
              </View>
            ) : (
              <Text></Text>
            )}
            {/* nút bỏ vào cart */}
            <TouchableOpacity
              style={styles.containButtonCart}
              onPress={() => {
                if (
                  userInformation &&
                  userInformation.user &&
                  userInformation.user.name
                ) {
                  if (
                    cartList &&
                    !cartList.some((cart) => cart._id === data._id)
                  ) {
                    handleAddToCart(userInformation?.user?.name, data);
                  } else {
                    handleRemoveFromCart(userInformation?.user?.name, data);
                  }
                } else {
                  navigation.navigate('Login');
                }
              }}
            >
              <Text style={styles.buttonCart}>
                {cartList && cartList.some((cart) => cart._id === data._id)
                  ? 'Remove From Cart'
                  : 'Add To Cart'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                title="Remove all cart"
                onPress={() => removeAllStorage()}
              />
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <Text>Loading</Text>
        )}
      </SafeAreaView>
    </View>
  );
}
