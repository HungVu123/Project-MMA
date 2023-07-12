import { Button, Card, Divider, Icon, Image, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

const OrderDetail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <Icon
              name="check-circle"
              type="material"
              size={30}
              color="#52D4D0"
            />
            <Text style={{ color: '#9098B1' }}>Packing</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon
              name="check-circle"
              type="material"
              size={30}
              color="#52D4D0"
            />
            <Text style={{ color: '#9098B1' }}>Shipping</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon
              name="check-circle"
              type="material"
              size={30}
              color="#52D4D0"
            />
            <Text style={{ color: '#9098B1' }}>Arriving</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon
              name="check-circle"
              type="material"
              size={30}
              color="#9098B1"
            />
            <Text style={{ color: '#9098B1' }}>Success</Text>
          </View>
        </View>
        <Text style={styles.title}>Product</Text>
        <Card containerStyle={styles.card_container}>
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
                <Text style={styles.product_title}>Nike Air Force 1</Text>
                <Icon
                  style={styles.icon}
                  name="favorite-border"
                  type="material"
                  color="#9098B1"
                />
              </View>
              <Text style={styles.product_price}>$244,99</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={styles.card_container}>
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
                <Text style={styles.product_title}>Nike Air Force 1</Text>
                <Icon
                  style={styles.icon}
                  name="favorite-border"
                  type="material"
                  color="#9098B1"
                />
              </View>
              <Text style={styles.product_price}>$244,99</Text>
            </View>
          </View>
        </Card>
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
            <Text style={{}}>August 1,2023</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Shipping</Text>
            <Text style={{}}>POS Regular</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Order No.</Text>
            <Text style={{}}>00014819231923</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Total Price</Text>
            <Text style={{ flex: 0.6 }}>
              243/2/44 Chu Văn An, p.12, q. Bình Thạnh
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
            <Text style={{}}>$599</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Shipping</Text>
            <Text style={{}}>$40</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text style={{ color: '#9098B1' }}>Import charges</Text>
            <Text style={{}}>$128</Text>
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
            <Text style={styles.product_price}>$787</Text>
          </View>
        </Card>
        <Button
          title="Notify Me"
          buttonStyle={styles.checkout_button}
          titleStyle={{ fontWeight: 'bold' }}
        />
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
