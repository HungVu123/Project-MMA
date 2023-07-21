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
import Cart from './src/CartScreen/Cart';
import History from './src/OrderScreen/History';
import ShipTo from './src/CartScreen/ShipTo';
import Payment from './src/CartScreen/Payment';
import ChooseCard from './src/CartScreen/ChooseCard';
import Success from './src/CartScreen/Success';
import OrderDetail from './src/OrderScreen/OrderDetail';
import ForgotPassword from './src/LoginScreen/ForgotPassword';
import Register from './src/LoginScreen/Register';
import ReviewScreen from './src/ReviewScreen/ReviewScreen';
import FavoriteScreen from './src/FavoriteScreen/Favoritescreen';
import ChooseReview from './src/ReviewScreen/ReviewDetail';
import ReviewDetail from './src/ReviewScreen/ReviewDetail';
import AddReview from './src/ReviewScreen/AddReview';

const CartAndHistory = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
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
  );
};

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return <Stack.Navigator initialRouteName={LoginScreen}></Stack.Navigator>;
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
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReviewScreen"
          component={ReviewScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ReviewDetail"
          component={ReviewDetail}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="AddReview"
          component={AddReview}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Order Detail" component={OrderDetail} />
        <Stack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{ headerTitleAlign: 'center', title: 'Wishlist' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitleAlign: 'center' }}
        />
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
