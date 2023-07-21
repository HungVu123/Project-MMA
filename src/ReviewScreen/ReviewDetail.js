
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
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
export default function ReviewDetail({ route }) {
    const orderID = route.params.orderId;
    console.log(orderID);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(0);
    const navigation = useNavigation();
    const getReview = async () => {
        try {
            const response = await axios.get(
                `http://192.168.1.5:4000/api/v1/reviews?productId=${orderID}`
            );
            console.log('success');
            setData(response.data.reviews)
            console.log(response.data.reviews);
        } catch (error) {
            console.log('Fail');
            setData();
        }
    }


    useEffect(() => {
        getReview()
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

    const handleAddReview = () => {
        navigation.navigate('AddReview', { data: orderID });
    };



    return (
        <View style={styles.container}>
            {data.length > 0 ? (
                <SafeAreaView>
                    <View style={styles.navbar}>
                        <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "700" }}>
                            Total {data.length}  Review{data.length > 1 ? "s" : ""}
                        </Text>
                        <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>
                            <Button title='Add review' onPress={handleAddReview}></Button>
                        </View>
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
                        <TouchableOpacity style={styles.containRatingFilter} onPress={() => setFilter(4)}>
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
                        data={filter > 0 ? data.filter((item) => Math.round(item.rating) === filter) : data}
                        renderItem={(review) => handleReviews(review)}
                        keyExtractor={(_, index) => index}
                        style={styles.flatList}
                    />
                </SafeAreaView>
            ) : (
                <View style={{ marginHorizontal: 20, height: '90%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 40, marginBottom: 10 }}>No Review</Text>
                    <Button title='Add review' onPress={handleAddReview}></Button>
                </View>
            )}



        </View >
    );
}