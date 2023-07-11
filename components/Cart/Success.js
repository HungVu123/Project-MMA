import { Card, Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

const Success = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.message}>Your action was successful.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#52D4D0",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Success;
