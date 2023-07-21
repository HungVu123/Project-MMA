import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/HomeScreen/HomeScreen';
import LoginScreen from './src/LoginScreen/LoginScreen';
import DetailScreen from './src/DetailScreen/DetailSrceen';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';
import RegisterScreen from './src/RegisterScreen/RegisterScreen';
import Cart from './src/CartScreen/Cart';
import History from './src/OrderScreen/History';
import ShipTo from './src/CartScreen/ShipTo';
import Payment from './src/CartScreen/Payment';
import EditAddress from './src/CartScreen/EditAddress';
import AddNewAddress from './src/CartScreen/AddNewAddress';
import Success from './src/CartScreen/Success';
import OrderDetail from './src/OrderScreen/OrderDetail';

const CartAndHistory = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Cart" screenOptions={{}}>
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Your Cart',
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
          title: 'Order',
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
            title: 'Delivery Address List',
          }}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen
          name="AddNewAddress"
          component={AddNewAddress}
          options={{
            title: 'Add New Delivery Address',
          }}
        />
        <Stack.Screen
          name="EditAddress"
          component={EditAddress}
          options={{
            title: 'Edit Delivery Address',
          }}
        />
        <Stack.Screen
          name="Success Payment"
          component={Success}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Order Detail" component={OrderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
