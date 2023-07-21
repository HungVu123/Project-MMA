import { useNavigation } from '@react-navigation/native';
import { Icon, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Card');
        }}
      >
        <ListItem>
          <Icon name="credit-card" type="feather" color="#40BFFF" />
          <ListItem.Content>
            <ListItem.Title style={styles.listitem_title}>
              Credit Card Or Debit
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Pressable>
      <ListItem>
        <Icon name="paypal" type="font-awesome" color="#40BFFF" />
        <ListItem.Content>
          <ListItem.Title style={styles.listitem_title}>Paypal</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Icon name="account-balance" type="material" color="#40BFFF" />
        <ListItem.Content>
          <ListItem.Title style={styles.listitem_title}>
            Bank Transfer
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  listitem_title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Payment;
