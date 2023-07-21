import React, { useEffect, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { loadStorage, removeFromStorage } from '../../utils/AsyncStorageUtils';
import { Button, Card, Icon, Image, Skeleton, Text } from '@rneui/themed';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const FavoriteScreen = () => {
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

  const loadFavorites = async (name) => {
    try {
      const storedFavorites = await loadStorage('favorites', name);
      setFavList(storedFavorites);
      setLoading(false);
    } catch (e) {
      console.log('error at load favorites:' + e);
      setLoading(true);
    }
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

  const [favList, setFavList] = useState([{}]);
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    loadFavorites(userName);
  }, [userName]);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites(userName);
    }, [])
  );

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
    <ScrollView>
      {loading ? (
        <Text>loading</Text>
      ) : favList ? (
        favList.map((item, i) => (
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
                  <TouchableOpacity
                    onPress={() => handleRemove(userName, item)}
                  >
                    <Icon
                      style={styles.icon}
                      name="favorite"
                      type="material"
                      color="#52D4D0"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.product_price}>${item.price}</Text>
              </View>
            </View>
          </Card>
        ))
      ) : (
        <Text>error</Text>
      )}
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

export default FavoriteScreen;
