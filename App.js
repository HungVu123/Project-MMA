import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./components/Cart/Cart";
import History from "./components/History";
import { Button, Icon } from "@rneui/themed";
import ShipTo from "./components/Cart/ShipTo";
import Payment from "./components/Cart/Payment";
import ChooseCard from "./components/Cart/ChooseCard";
import Success from "./components/Cart/Success";

const CartAndHistory = () => {
  const Tab = createBottomTabNavigator();
  return (
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
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart&History">
        <Stack.Screen
          name="Cart&History"
          component={CartAndHistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ship To"
          component={ShipTo}
          options={{
            title: "Ship To",
            headerRight: () => (
              <Button buttonStyle={{ backgroundColor: "white" }}>
                <Icon name="plus" type="feather" color="#52D4D0" />
              </Button>
            ),
          }}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen
          name="Choose Card"
          component={ChooseCard}
          options={{
            headerRight: () => (
              <Button buttonStyle={{ backgroundColor: "white" }}>
                <Icon name="plus" type="feather" color="#52D4D0" />
              </Button>
            ),
          }}
        />
        <Stack.Screen
          name="Success Payment"
          component={Success}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
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
