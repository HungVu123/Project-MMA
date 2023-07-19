import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dataCarousel from './dataCarousel';
import styles from './style';

export default function DetailScreen() {
  const [currentPage, setCurrentPage] = useState(0);

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get('window').width
  );
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(Dimensions.get('window').width);
      setWindowHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', handleWindowResize);

    return () => {
      Dimensions.removeEventListener('change', handleWindowResize);
    };
  }, []);
  const renderCaroulsel = ({ item }) => {
    return (
      <View style={styles.containImage}>
        <Image source={item.image} style={styles.image} resizeMode="stretch" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView style={styles.scrollview}>
          <View style={styles.containCarousel}>
            <FlatList
              data={dataCarousel}
              renderItem={renderCaroulsel}
              style={[styles.carousel, { width: windowWidth }]}
              horizontal
              pagingEnabled
              snapToAlignment="start"
              onScroll={(event) => {
                const { contentOffset, layoutMeasurement } = event.nativeEvent;
                const currentPage = Math.floor(
                  contentOffset.x / layoutMeasurement.width
                );
                setCurrentPage(currentPage);
              }}
            />
          </View>
          <View style={styles.containHeaderLike}>
            <View style={styles.containHeader}>
              <Text style={styles.header}>Chim Sơn Ca</Text>
            </View>
            <TouchableOpacity style={styles.containButtonLike}>
              <Image
                style={styles.buttonLike}
                source={require('../../assets/liked.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containRating}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/start.png')}
                style={styles.rating}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/start.png')}
                style={styles.rating}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/start.png')}
                style={styles.rating}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/start.png')}
                style={styles.rating}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/start.png')}
                style={styles.rating}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$30</Text>
          <Text style={styles.desc}>Description: </Text>
          <Text style={styles.descDetail}>
            Là một trong các loại chim sâu ở Việt Nam nên chim Sơn Ca có thân
            hình nhỏ bé, chỉ to ngang một nắm tay của người lớn. Chim thường có
            màu lông đa sắc, vàng ở trên đầu, nâu, đen ở thân trên và có màu
            trắng ở phần bụng. Tùy vào đặc điểm khí hậu của mỗi vùng miền mà
            lông của chim Sơn Ca sẽ có sự khác biệt đôi chút. Nếu như ở Huế lông
            chim có màu vàng hơn bình thường và có hình vảy cả trên trán thì Sơn
            Ca Đà Nẵng lại có vân khía ở trán.
          </Text>
          <TouchableOpacity style={styles.containButtonCart}>
            <Text style={styles.buttonCart}>Add to cart</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
