import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import HomeScreen from './HomeScreen/HomeScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import DetailScreen from './DetailScreen/DetailSrceen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import Cart from './CartScreen/Cart';
import History from './OrderScreen/History';
import ShipTo from './CartScreen/ShipTo';
import Payment from './CartScreen/Payment';
import ChooseCard from './CartScreen/ChooseCard';
import Success from './CartScreen/Success';
import OrderDetail from './OrderScreen/OrderDetail';

const CartAndHistory = () => {
  const Stack = createNativeStackNavigator();

  return (
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
          title: 'Ship To',
          headerRight: () => (
            <Button buttonStyle={{ backgroundColor: 'white' }}>
              <Icon name="plus" type="feather" color="#40BFFF" />
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
            <Button buttonStyle={{ backgroundColor: 'white' }}>
              <Icon name="plus" type="feather" color="#40BFFF" />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="Success Payment"
        component={Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Order Detail" component={OrderDetail} />
    </Stack.Navigator>
  );
};

export default function RootComponents() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon type="feather" name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
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
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon type="feather" name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
