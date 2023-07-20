import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import styles from './style';
import axios from 'axios';
export default function DetailScreen(prop) {
  const [data, setData] = useState(null);
  const [review, setReview] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setData(prop.route.params);
        setReview(prop.route.params['reviews']);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {console.log(review)}
        {data ? (
          <ScrollView style={styles.scrollview}>
            <View style={styles.containImage}>
              <Image
                source={{ uri: data.images[0].url }}
                style={styles.image}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.containHeaderLike}>
              <View style={styles.containHeader}>
                <Text style={styles.header}>{data.name}</Text>
              </View>
              <TouchableOpacity style={styles.containButtonLike}>
                <Image
                  style={styles.buttonLike}
                  source={require('../../assets/liked.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containRating}>
              {[...Array(Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/start.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              {[...Array(5 - Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/unstart.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.price}>{data.price}$</Text>
            <Text style={styles.desc}>Description: </Text>
            <Text style={styles.descDetail}>{data.des}</Text>
            <View style={styles.containHeaderReview}>
              <Text style={styles.headerReview}>Review Product</Text>
              <TouchableOpacity style={styles.clickHeaderMore}>
                <Text style={styles.headerMore}>See More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containRating}>
              {[...Array(Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/start.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              {[...Array(5 - Math.round(data.ratings))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require('../../assets/unstart.png')}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              <Text>{data.ratings}</Text>
              {review.length > 0 ? (
                <Text> ({review.length} review)</Text>
              ) : (
                <Text> (0 review)</Text>
              )}
            </View>
            {review.length > 0 ? (
              <View style={styles.containDetailRating}>
                <View style={styles.containHeaderDetailRating}>
                  <View style={styles.containAvaRating}>
                    <Image
                      source={{ uri: review[0].avatarUrl }}
                      resizeMode="stretch"
                      style={styles.avaRating}
                    />
                  </View>
                  <View style={styles.containNameAndRating}>
                    <Text style={styles.containNameRating}>
                      {review[0].name}
                    </Text>
                    <View style={styles.containRating}>
                      {[...Array(Math.round(review[0].rating))].map(
                        (_, index) => (
                          <TouchableOpacity key={index}>
                            <Image
                              source={require('../../assets/start.png')}
                              style={styles.rating}
                            />
                          </TouchableOpacity>
                        )
                      )}
                      {[...Array(5 - Math.round(review[0].rating))].map(
                        (_, index) => (
                          <TouchableOpacity key={index}>
                            <Image
                             source={require('../../assets/unstart.png')}
                             style={styles.rating}
                           />
                          </TouchableOpacity>
                        )
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.containDescRating}>
                  <Text style={styles.detailRating}>{review[0].comment}</Text>
                  <Text style={styles.detailRating}>
                    {moment(review[0].createReviewAt).format(
                      'DD-MM-YY HH:mm:ss'
                    )}
                  </Text>
                </View>
              </View>
            ) : (
              <Text></Text>
            )}
            <TouchableOpacity style={styles.containButtonCart}>
              <Text style={styles.buttonCart}>Add to cart</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <Text>Loading</Text>
        )}
      </SafeAreaView>
    </View>
  );
}
