import { useNavigation } from "@react-navigation/native";
import { Card, Icon, Text } from "@rneui/themed";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const ChooseCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Success Payment");
      }}
    >
      <Card containerStyle={styles.container}>
        <Icon
          containerStyle={styles.cardLogo}
          name="cc-mastercard"
          type="font-awesome"
          color="white"
        />
        <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
        <Text style={styles.cardHolder}>BUI DUC UY DUNG</Text>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Valid Thru</Text>
          <Text style={styles.cardExpiration}>12/23</Text>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#52D4D0",
    color: "white",
  },
  card: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    height: 200,
  },
  cardLogo: {
    marginBottom: 30,
    alignItems: "flex-start",
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "white",
    textAlign: "center",
  },
  cardHolder: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  cardRow: {
    flexDirection: "row",
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  cardExpiration: {
    fontSize: 14,
    color: "white",
    marginLeft: 10,
  },
});

export default ChooseCard;
