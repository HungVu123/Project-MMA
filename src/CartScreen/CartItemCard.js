import { View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { Icon, Image, Text, Button } from '@rneui/themed';

const CartItemCard = ({
  item,
  deleteCartItems,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [iconColor, setIconColor] = useState('#9098B1');
  const textInputRef = useRef();

  const changeIconColor = () => {
    const newColor = iconColor === '#9098B1' ? 'red' : '#9098B1';
    setIconColor(newColor);
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: item.images[0].url }} style={styles.img} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <Text style={styles.product_title}>{item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            {/* <TouchableHighlight onPress={changeIconColor}>
              <Icon
                style={styles.icon}
                name="favorite"
                type="material"
                color={iconColor}
              />
            </TouchableHighlight> */}
            <TouchableHighlight onPress={deleteCartItems}>
              <Icon
                style={styles.icon}
                name="delete-outline"
                type="material"
                color="#9098B1"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
            marginTop: 25,
          }}
        >
          <Text style={styles.product_price}>${item.price}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Button
              buttonStyle={styles.button}
              type="solid"
              onPress={decreaseQuantity}
            >
              <Icon name="remove" color="#9098B1" />
            </Button>
            <TextInput
              style={styles.input}
              value={item?.quantity?.toString()}
              ref={textInputRef}
            />
            <Button
              buttonStyle={styles.button}
              type="solid"
              onPress={increaseQuantity}
            >
              <Icon name="add" color="#9098B1" />
            </Button>
          </View>
        </View>
      </View>
    </View>
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
    width: 50,
    height: 24,
    padding: 0,
    margin: 0,
    borderRadius: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  coupon_container: {
    borderRadius: 5,
    border: 1,
    padding: 0,
  },
  coupon_box: {
    flexDirection: 'row',
    borderRadius: 5,
  },
  coupon_input: {
    backgroundColor: 'white',
    width: 275,
    height: 56,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 16,
  },
  coupon_button: {
    height: 56,
    width: 87,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor: '#52D4D0',
  },
  checkout_button: {
    margin: 16,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#52D4D0',
  },
});
export default CartItemCard;
