import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./components/Cart";
import History from "./components/History";
import { Icon } from "@rneui/themed";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Cart">
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Your Cart",
            tabBarIcon: ({ color, size }) => (
              <Icon
                type="feather"
                name="shopping-cart"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            title: "Order",
            tabBarIcon: ({ color, size }) => (
              <Icon
                type="feather"
                name="shopping-bag"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
