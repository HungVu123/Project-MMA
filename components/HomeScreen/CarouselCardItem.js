import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const CarouselCardItem = ({ item }) => {
  return (
    <>
      <Image source={item.img} style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 5,
    // maxHeight: height * 0.2,
    // minHeight: height * 0.12,
  },
});

export default CarouselCardItem;
