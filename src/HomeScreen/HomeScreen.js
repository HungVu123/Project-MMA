import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';
import {
  fetchProductBirds,
  fetchProductCages,
  fetchProductSuplements,
  searchProduct,
} from './api';
import { Icon } from '@rneui/themed';

const HomeScreen = ({ navigation }) => {
  const isCarousel = React.useRef(null);
  const SLIDER_WIDTH = Dimensions.get('window').width * 0.95;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
  const [index, setIndex] = React.useState(0);

  const moveToFavorite = () => {
    navigation.navigate('Favorite');
  };

  // fetchProductBirds

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductBirds();
        setProducts(data.products);
        // console.log('data: ', data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // fetchProductCages

  const [listCages, setListCages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductCages();
        setListCages(data.products);
        // console.log('data: ', data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // fetchProductSuplements

  const [listSuplements, setListSuplementss] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductSuplements();
        setListSuplementss(data.products);
        // console.log('data: ', data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // searchProducts
  const [search, onChangeSearch] = useState('');
  const [listSearch, setListSearch] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchProduct(search);
        setListSearch(data.products);
        // console.log('data: ', data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  const handleFocusSearch = () => {
    setIsSearching(true);
  };

  const handleBlurSearch = () => {
    if (search.trim() === '') {
      setIsSearching(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          {/* -------------- search box --------------*/}
          <View style={styles.searchBoxContainer}>
            <Ionicons
              name="search-outline"
              size={25}
              style={styles.iconSearch}
            />
            <TextInput
              style={styles.searchBox}
              placeholder="Search Product"
              onChangeText={onChangeSearch}
              value={search}
              onFocus={handleFocusSearch}
              onBlur={handleBlurSearch}
            />
            <TouchableOpacity onPress={() => moveToFavorite()}>
              <Icon
                name="favorite-border"
                type="material"
                size={35}
                style={styles.iconHeart}
              />
            </TouchableOpacity>
          </View>
          {isSearching ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.searchResulContainer}>
                {listSearch.map((item) => (
                  <TouchableOpacity
                    underlayColor="transparent"
                    activeOpacity={0.4}
                  >
                    <View
                      style={styles.cardSearchResultContainer}
                      key={item._id}
                    >
                      <View style={styles.itemImageContainer}>
                        {item.images.map((img) => (
                          <Image
                            source={{ uri: img.url }}
                            style={styles.itemImage}
                          />
                        ))}
                      </View>
                      <Text numberOfLines={2} style={styles.itemName}>
                        {item.name}
                      </Text>
                      <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* -------------- carousel -------------- */}

              <View style={styles.carouselContainer}>
                <Carousel
                  data={carouselImage}
                  renderItem={CarouselCardItem}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={SLIDER_WIDTH}
                  autoplay={true}
                  autoplayInterval={3000}
                  ref={isCarousel}
                  onSnapToItem={(index) => setIndex(index)}
                  loop
                />
                <Pagination
                  dotsLength={carouselImage.length}
                  activeDotIndex={index}
                  carouselRef={isCarousel}
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: '#40BFFF',
                  }}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  tappableDots={true}
                />
              </View>

              {/* -------------- category -------------- */}
              {/* <View style={styles.categoryTextContainer}>
          <Text style={styles.textLeft}>Category</Text>
          <Text style={styles.textRight}>More Category</Text>
        </View>
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity underlayColor="transparent" activeOpacity={0.4}>
              <View style={styles.cateContainer}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons name="logo-twitter" style={styles.categoryIcon} />
                </View>
                <Text style={styles.categoryText}>Chim cảnh trong nước</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View> */}

              {/* -------------- item card birds -------------- */}
              <View style={styles.saleTextContainer}>
                <Text style={styles.textLeft}>Birds</Text>
                <Text style={styles.textRight}>See More</Text>
              </View>
              <View style={styles.allItemsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {products.slice(0, 5).map((product) => (
                    <TouchableOpacity
                      underlayColor="transparent"
                      activeOpacity={0.4}
                      onPress={() =>
                        navigation.navigate('DetailScreen', product)
                      }
                    >
                      <View style={styles.cardContainer} key={product._id}>
                        <View style={styles.itemImageContainer}>
                          {product.images.map((img) => (
                            <Image
                              source={{ uri: img.url }}
                              style={styles.itemImage}
                            />
                          ))}
                        </View>
                        <Text numberOfLines={2} style={styles.itemName}>
                          {product.name}
                        </Text>
                        <Text style={styles.itemPrice}>${product.price}</Text>
                        {/* <Text style={styles.initPrice}>Chim cảnh</Text> */}
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* -------------- item card cages -------------- */}

              <View style={styles.saleTextContainer}>
                <Text style={styles.textLeft}>Cages</Text>
                <Text style={styles.textRight}>See More</Text>
              </View>
              <View style={styles.allItemsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {listCages.slice(0, 5).map((cage) => (
                    <TouchableOpacity
                      underlayColor="transparent"
                      activeOpacity={0.4}
                      onPress={() => navigation.navigate('DetailScreen', cage)}
                    >
                      <View style={styles.cardContainer} key={cage._id}>
                        <View style={styles.itemImageContainer}>
                          {cage.images.map((img) => (
                            <Image
                              source={{ uri: img.url }}
                              style={styles.itemImage}
                            />
                          ))}
                        </View>
                        <Text numberOfLines={2} style={styles.itemName}>
                          {cage.name}
                        </Text>
                        <Text style={styles.itemPrice}>${cage.price}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* -------------- item card Supplements -------------- */}

              <View style={styles.saleTextContainer}>
                <Text style={styles.textLeft}>Cages</Text>
                <Text style={styles.textRight}>See More</Text>
              </View>
              <View style={styles.allItemsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {listSuplements.slice(0, 5).map((sup) => (
                    <TouchableOpacity
                      underlayColor="transparent"
                      activeOpacity={0.4}
                      onPress={() => navigation.navigate('DetailScreen', sup)}
                    >
                      <View style={styles.cardContainer} key={sup._id}>
                        <View style={styles.itemImageContainer}>
                          {sup.images.map((img) => (
                            <Image
                              source={{ uri: img.url }}
                              style={styles.itemImage}
                            />
                          ))}
                        </View>
                        <Text numberOfLines={2} style={styles.itemName}>
                          {sup.name}
                        </Text>
                        <Text style={styles.itemPrice}>${sup.price}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

// data
const carouselImage = [
  {
    title: 'Aenean leo',
    img: require('../../img/lake.jpg'),
  },
  {
    title: 'In turpis',
    img: require('../../img/sunset.jpg'),
  },
  {
    title: 'Lorem Ipsum',
    img: require('../../img/hoa_mi.png'),
  },
];

export default HomeScreen;
