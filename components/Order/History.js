import { Button, Card, Divider, Icon, Text } from "@rneui/themed";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const History = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("Order Detail");
        }}
      >
        <Card containerStyle={styles.card_container}>
          <View style={styles.container}>
            <Text style={styles.container_title}>HDSIE456</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.container_subtitles}>Order at: </Text>
              <Text style={styles.container_subtitles}>August 1,2023</Text>
            </View>
            <Divider style={{ marginBottom: 16 }} />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.container_subtitles}>Order Status</Text>
              <Text>Shipping</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.container_subtitles}>Items</Text>
              <Text>2 Items purchasing</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.container_subtitles}>Price</Text>
              <Text style={styles.container_price}>$245,99 </Text>
            </View>
          </View>
        </Card>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Order Detail");
        }}
      >
        <Card containerStyle={styles.card_container}>
          <View style={styles.container}>
            <Text style={styles.container_title}>HDSIE456</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.container_subtitles}>Order at: </Text>
              <Text style={styles.container_subtitles}>August 1,2023</Text>
            </View>
            <Divider style={{ marginBottom: 16 }} />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.container_subtitles}>Order Status</Text>
              <Text>Shipping</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.container_subtitles}>Items</Text>
              <Text>2 Items purchasing</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.container_subtitles}>Price</Text>
              <Text style={styles.container_price}>$245,99 </Text>
            </View>
          </View>
        </Card>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 5,
    active: {
      borderRadius: 5,
      borderColor: "#52D4D0",
    },
  },
  container: { margin: 24 },
  container_title: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 16,
  },
  container_subtitles: {
    color: "#9098B1",
    marginBottom: 16,
    fontSize: 12,
  },
  container_price: {
    fontWeight: "bold",
    color: "#40BFFF",
  },
});

export default History;
