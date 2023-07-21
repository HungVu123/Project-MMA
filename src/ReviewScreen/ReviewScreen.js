import React, { useState, useEffect } from "react";
import {
  View,

  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Card, Divider, Icon, Image, Text } from '@rneui/themed';
import moment from "moment";

import axios from "axios";

import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
export default function ReviewScreen({ route }) {
  const data = route.params.data;
  const navigation = useNavigation();
  console.log(data);
  // const [order, setOrder] = useState(data)
  // const coppyData = [...data];
  // const filterData = filter > 0 ? coppyData.filter((item) => Math.round(item.rating)=== filter) : coppyData;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Review Product</Text>
      {data && data.map((item, i) => (

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

              </View>
              <Text style={styles.product_quantity}>x{item.quantity}</Text>
              <Text style={styles.product_price}>
                ${item.quantity * item.price}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ReviewDetail', {
                  orderId: item.product
                });
              }}
              key={i}
            >
              <Text style={styles.buttonReview}>Review</Text>
            </TouchableOpacity>
          </View>
        </Card>

      ))}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
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
  buttonReview: {
    borderRadius: 20,
  }
});