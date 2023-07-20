import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import styles from "./style";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
export default function ReviewScreen() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(0);
  useEffect(() => {
    async function fetchData() {
      console.log("=========================");
      try {
        const res = await axios.get(
          "http://192.168.1.68:4000/api/v1/product/64ad3ab5342961feeccd56c5"
        );
        console.log("Test   ", res["data"]["product"]["reviews"]);
        setData([
          {
            _id: "64b565e3487d4a0618fc9000",
            avatarUrl:
              "https://res.cloudinary.com/dfusvbvhg/image/upload/v1684104676/avatars/dwgrl2fvkk8ko4oxcfxr.png",
            comment:
              "Very beautiful bird. The colors Are very bright. Very good singing in the morning. Fly so high and far, ",
            createReviewAt: "2023-07-17T16:01:39.364Z",
            name: "Hungadmindz",
            rating: 4.5,
            user: "6431c4067a775988a3a15e56",
          },
          {
            _id: "64b565e3487d4a0618fc9229",
            avatarUrl:
              "https://res.cloudinary.com/dfusvbvhg/image/upload/v1684104676/avatars/dwgrl2fvkk8ko4oxcfxr.png",
            comment: "So goodddddddddddddddddddddddddddddd",
            createReviewAt: "2023-07-17T16:01:39.364Z",
            name: "Hungdeptrai",
            rating: 3.2,
            user: "6431c4067a775988a3a15a1e",
          },
          {
            _id: "64b565e3487d4a0618fc9229",
            avatarUrl:
              "https://res.cloudinary.com/dfusvbvhg/image/upload/v1684104676/avatars/dwgrl2fvkk8ko4oxcfxr.png",
            comment: "So good",
            createReviewAt: "2023-07-17T16:01:39.364Z",
            name: "Hungdeptrai",
            rating: 3.7,
            user: "6431c4067a775988a3a15a1e",
          },
          {
            _id: "64b565e3487d4a0618fc9229",
            avatarUrl:
              "https://res.cloudinary.com/dfusvbvhg/image/upload/v1684104676/avatars/dwgrl2fvkk8ko4oxcfxr.png",
            comment: "So good",
            createReviewAt: "2023-07-17T16:01:39.364Z",
            name: "Hungdeptrai",
            rating: 2.2,
            user: "6431c4067a775988a3a15a1e",
          },
          {
            _id: "64b565e3487d4a0618fc9229",
            avatarUrl:
              "https://res.cloudinary.com/dfusvbvhg/image/upload/v1684104676/avatars/dwgrl2fvkk8ko4oxcfxr.png",
            comment: "So good",
            createReviewAt: "2023-07-17T16:01:39.364Z",
            name: "Hungdeptrai",
            rating: 4.5,
            user: "6431c4067a775988a3a15a1e",
          },
        ]);
        setFilter(0);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  const handleReviews = (review) => {
    return (
      <View style={styles.containDetailRating}>
        <View style={styles.containHeaderDetailRating}>
          <View style={styles.containAvaRating}>
            <Image
              source={{ uri: review.item.avatarUrl }}
              resizeMode="stretch"
              style={styles.avaRating}
            />
          </View>
          <View style={styles.containNameAndRating}>
            <Text style={styles.containNameRating}>{review.item.name}</Text>
            <View style={styles.containRating}>
              {[...Array(Math.round(review.item.rating))].map((_, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={require("../../assets/start.png")}
                    style={styles.rating}
                  />
                </TouchableOpacity>
              ))}
              {[...Array(5 - Math.round(review.item.rating))].map(
                (_, index) => (
                  <TouchableOpacity key={index}>
                    <Image
                      source={require("../../assets/unstart.png")}
                      style={styles.rating}
                    />
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>
        </View>
        <View style={styles.containDescRating}>
          <Text style={styles.detailRating}>{review.item.comment}</Text>
          <Text style={styles.detailRating}>
            {moment(review.item.createReviewAt).format("DD-MM-YY HH:mm:ss")}
          </Text>
        </View>
      </View>
    );
  };
  const handleFilterReview = (rating) => {

  };
  // const coppyData = [...data];
  // const filterData = filter > 0 ? coppyData.filter((item) => Math.round(item.rating)=== filter) : coppyData;
  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <SafeAreaView>
          <StatusBar />
          <View style={styles.navbar}>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}>
              <Image
                style={styles.goBackIcon}
                source={require("../../assets/goBack.png")}
                resizeMode="stretch"
              />
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                {data.length} Review{data.length > 1 ? "s" : ""}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{ alignItems: "center" }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={[
                styles.containRatingFilter,
                { width: 100, marginLeft: 20 },
              ]}
              onPress={() => setFilter(0)}
            >
              <Text style={{ fontWeight: "700", color: "#40BFFF" }}>
                All Review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containRatingFilter} onPress={() => setFilter(5)}>
              <Image
                source={require("../../assets/start.png")}
                style={styles.rating}
              />
              <Text style={styles.ratingFilter}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containRatingFilter}onPress={()=>setFilter(4)}>
              <Image
                source={require("../../assets/start.png")}
                style={styles.rating}
              />
              <Text style={styles.ratingFilter}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containRatingFilter} onPress={() => setFilter(3)}>
              <Image
                source={require("../../assets/start.png")}
                style={styles.rating}
              />
              <Text style={styles.ratingFilter}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containRatingFilter} onPress={() => setFilter(2)}>
              <Image
                source={require("../../assets/start.png")}
                style={styles.rating}
              />
              <Text style={styles.ratingFilter}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containRatingFilter} onPress={() => setFilter(1)}>
              <Image
                source={require("../../assets/start.png")}
                style={styles.rating}
              />
              <Text style={styles.ratingFilter}>1</Text>
            </TouchableOpacity>
          </ScrollView>
          {/* {console.log(data.map((item) => Math.round(item.rating) ))} */}
              {/* {console.log(data.filter((item) => Math.round(item.rating) === 5))} */}
              {/* {console.log("dataaaaaaaaaaaaa",filterData)} */}
          <FlatList
            data={filter > 0 ? data.filter((item) => Math.round(item.rating)=== filter) : data}
            renderItem={(review) => handleReviews(review)}
            keyExtractor={(_, index) => index}
            style={styles.flatList}
          />
        </SafeAreaView>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}
