import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const CarouselCardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 8,
    height: height * 0.25,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 20,
    maxHeight: height * 0.2,
    minHeight: height * 0.12,
  },
});

export default CarouselCardItem;
