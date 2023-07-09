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
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';

const HomeScreen = () => {
  const [search, onChangeSearch] = useState('');
  const isCarousel = React.useRef(null);

  //   const [sliderWidth, setSliderWidth] = useState(
  //     Dimensions.get('window').width + 80
  //   );
  //   const ITEM_WIDTH = Math.round(sliderWidth * 0.7);

  //   const isCarousel = React.useRef(null);

  //   useEffect(() => {
  //     const updateSliderWidth = () => {
  //       setSliderWidth(Dimensions.get('window').width + 80);
  //     };

  //     Dimensions.addEventListener('change', updateSliderWidth);

  //     return () => {
  //       Dimensions.removeEventListener('change', updateSliderWidth);
  //     };
  //   }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* -------------- search box --------------*/}
      <View style={styles.searchBoxContainer}>
        <Ionicons name="search-outline" size={25} style={styles.iconSearch} />
        <TextInput style={styles.searchBox} placeholder="Search Product" />
        <View style={styles.iconContainer}>
          <Ionicons name="heart-outline" size={35} style={styles.iconHeart} />
          <Ionicons
            name="notifications-outline"
            size={35}
            style={styles.iconNoti}
          />
        </View>
      </View>
      {/* <Image source={require('../../img/chim_sao.png')} /> */}
      {/* -------------- carousel -------------- */}
      {/* <View>
        <Carousel
          layout="stack"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={({ item }) => <CarouselCardItem item={item} />}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View> */}
      {/* -------------- category -------------- */}
      <View style={styles.categoryTextContainer}>
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
          <TouchableHighlight underlayColor="gray" activeOpacity={0.8}>
            <View style={styles.cateContainer}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="logo-twitter" style={styles.categoryIcon} />
              </View>
              <Text style={styles.categoryText}>Chim cảnh nước ngoài</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>

      {/* -------------- item card -------------- */}
      <View style={styles.categoryTextContainer}>
        <Text style={styles.textLeft}>Flash Sale</Text>
        <Text style={styles.textRight}>See More</Text>
      </View>
      <View style={styles.allItemsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity underlayColor="transparent" activeOpacity={0.4}>
            <View style={styles.cardContainer}>
              <View style={styles.itemImageContainer}>
                <Image
                  source={require('../../img/chich_choe.png')}
                  style={styles.itemImage}
                />
              </View>
              <Text numberOfLines={2} style={styles.itemName}>
                Chim chích chòe
              </Text>
              <Text style={styles.itemPrice}>$200</Text>
              {/* <Text style={styles.initPrice}>Chim cảnh</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity underlayColor="transparent" activeOpacity={0.4}>
            <View style={styles.cardContainer}>
              <View style={styles.itemImageContainer}>
                <Image
                  source={require('../../img/chich_choe.png')}
                  style={styles.itemImage}
                />
              </View>
              <Text numberOfLines={2} style={styles.itemName}>
                Chim cảnh ajsdjas dajnsdasljdaksjdlkajskasjldk
              </Text>
              <Text style={styles.itemPrice}>$200</Text>
              {/* <Text style={styles.initPrice}>Chim cảnh</Text> */}
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// data
const data = [
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
