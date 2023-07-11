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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';

const HomeScreen = () => {
  const [search, onChangeSearch] = useState('');
  const isCarousel = React.useRef(null);
  const SLIDER_WIDTH = Dimensions.get('window').width * 0.95;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
  const [index, setIndex] = React.useState(0);

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* -------------- carousel -------------- */}
        {/* <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            // onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <Image
              source={require('../../img/lake.jpg')}
              style={styles.carouselImage}
            />
            <Image
              source={require('../../img/sunset.jpg')}
              style={styles.carouselImage}
            />
          </ScrollView>
        </View> */}

        <View style={styles.carouselContainer}>
          <Carousel
            data={data}
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
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: '#52D4D0',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>

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
        <View style={styles.saleTextContainer}>
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
      </ScrollView>
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
