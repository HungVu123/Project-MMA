import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import {
  fetchProductBirds,
  fetchProductCages,
  fetchProductSuplements,
} from './api';
import { useNavigation } from '@react-navigation/native';

const SeeMore = ({ route }) => {
  const { cate } = route.params;
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    if (cate === 'Birds') {
      const fetchData = async () => {
        try {
          const data = await fetchProductBirds();
          setProducts(data.products);
          console.log('data: ', data.products);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else if (cate === 'Cages') {
      const fetchData = async () => {
        try {
          const data = await fetchProductCages();
          setProducts(data.products);
          console.log('data: ', data.products);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else if (cate === 'Supplements') {
      const fetchData = async () => {
        try {
          const data = await fetchProductSuplements();
          setProducts(data.products);
          console.log('data: ', data.products);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, []);

  console.log(cate);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.searchResulContainer}>
        {products.map((product) => (
          <TouchableOpacity
            underlayColor="transparent"
            activeOpacity={0.4}
            onPress={() => navigation.navigate('DetailScreen', product)}
          >
            <View style={styles.cardSearchResultContainer} key={product._id}>
              <View style={styles.itemImageContainer}>
                {product.images.map((img) => (
                  <Image source={{ uri: img.url }} style={styles.itemImage} />
                ))}
              </View>
              <Text numberOfLines={2} style={styles.itemName}>
                {product.name}
              </Text>
              <Text style={styles.itemPrice}>${product.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SeeMore;
