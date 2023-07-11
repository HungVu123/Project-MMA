import { useNavigation } from "@react-navigation/native";
import { Card, Icon, Image, Text, Button, Divider } from "@rneui/themed";
import React, { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, TextInput } from "react-native";
import { View } from "react-native";

const Cart = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const textInputRef = useRef();

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

  const proceedToShipping = () => {
    navigation.navigate("Ship To");
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        textInputRef.current.blur();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card_container}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./image/air-force-1.jpg")}
            style={styles.img}
          />
          <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <Text style={styles.product_title}>Nike Air Force 1</Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  style={styles.icon}
                  name="favorite-border"
                  type="material"
                  color="#9098B1"
                />
                <Icon
                  style={styles.icon}
                  name="delete-outline"
                  type="material"
                  color="#9098B1"
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row",
                marginTop: 25,
              }}
            >
              <Text style={styles.product_price}>$244,99</Text>
              <View style={{ flexDirection: "row" }}>
                <Button
                  buttonStyle={styles.button}
                  type="solid"
                  onPress={decrease}
                >
                  <Icon name="remove" color="#9098B1" />
                </Button>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={number.toString()}
                  ref={textInputRef}
                />
                <Button
                  buttonStyle={styles.button}
                  type="solid"
                  onPress={increase}
                >
                  <Icon name="add" color="#9098B1" />
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={styles.card_container}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./image/air-force-1.jpg")}
            style={styles.img}
          />
          <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <Text style={styles.product_title}>Nike Air Force 1</Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  style={styles.icon}
                  name="favorite-border"
                  type="material"
                  color="#9098B1"
                />
                <Icon
                  style={styles.icon}
                  name="delete-outline"
                  type="material"
                  color="#9098B1"
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row",
                marginTop: 25,
              }}
            >
              <Text style={styles.product_price}>$244,99</Text>
              <View style={{ flexDirection: "row" }}>
                <Button
                  buttonStyle={styles.button}
                  type="solid"
                  onPress={decrease}
                >
                  <Icon name="remove" color="#9098B1" />
                </Button>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={number.toString()}
                  ref={textInputRef}
                />
                <Button
                  buttonStyle={styles.button}
                  type="solid"
                  onPress={increase}
                >
                  <Icon name="add" color="#9098B1" />
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={styles.coupon_container}>
        <View style={styles.coupon_box}>
          <TextInput
            style={styles.coupon_input}
            placeholder="Enter Coupon Code"
            ref={textInputRef}
          />
          <Button
            title="Apply"
            buttonStyle={styles.coupon_button}
            type="solid"
          />
        </View>
      </Card>
      <Card containerStyle={styles.card_container}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 16,
          }}
        >
          <Text style={{ color: "#9098B1" }}>Items (2)</Text>
          <Text style={{}}>$599</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 16,
          }}
        >
          <Text style={{ color: "#9098B1" }}>Shipping</Text>
          <Text style={{}}>$40</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 16,
          }}
        >
          <Text style={{ color: "#9098B1" }}>Import charges</Text>
          <Text style={{}}>$128</Text>
        </View>
        <Divider />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Total Price</Text>
          <Text style={styles.product_price}>$787</Text>
        </View>
      </Card>
      <Button
        title="Check Out"
        buttonStyle={styles.checkout_button}
        titleStyle={{ fontWeight: "bold" }}
        onPress={proceedToShipping}
      />
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
    fontWeight: "bold",
    color: "#192a56",
  },
  product_price: {
    marginLeft: 12,
    fontWeight: "bold",
    color: "#52D4D0",
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
    textAlign: "center",
    backgroundColor: "#EBF0FF",
    padding: 2,
    fontSize: 12,
    color: "#223263",
  },
  button: {
    width: 40,
    height: 24,
    padding: 0,
    margin: 0,
    borderRadius: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EBF0FF",
  },
  coupon_container: {
    borderRadius: 5,
    border: 1,
    padding: 0,
  },
  coupon_box: {
    flexDirection: "row",
    borderRadius: 5,
  },
  coupon_input: {
    backgroundColor: "white",
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
    backgroundColor: "#52D4D0",
  },
  checkout_button: {
    margin: 16,
    height: 57,
    borderRadius: 5,
    backgroundColor: "#52D4D0",
  },
});

export default Cart;
