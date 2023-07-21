

import axios from "axios";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    TouchableOpacity
} from "react-native";

export default function AddReview({ route }) {
    const orderID = route.params.data;
    console.log(orderID);
    const [data, setData] = useState([]);
    const [comment, setComment] = useState('');
    const [error, setError] = useState('')

    const [isFocusedComment, setIsFocusedComment] = useState(false);

    const handleFocusComment = () => {
        setIsFocusedComment(true);
    };

    const handleAddReview = async () => {

        if (comment.length === 0) {
            setError('This field is required.');
            return;
        }

        setData({
            productId: orderID,
            comment: comment,
            rating: rating
        })

        try {
            await axios.put(
                'http://192.168.1.5:4000/api/v1/review', data
            );
            console.log('success');

        } catch (error) {
            console.log('Fail', error);
            setData();
        }
    }

    //Rating
    const [rating, setRating] = useState(0);

    const handleRatingPress = (value) => {
        setRating(value);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => handleRatingPress(i)}>
                    {i <= rating ? (
                        <Image
                            source={require("../../assets/start.png")}
                        />) : (
                        <Image
                            source={require("../../assets/unstart.png")}
                        />)}

                </TouchableOpacity>
            );
        }
        return stars;
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please write Overall level of satisfaction with your shipping/Delivery Service </Text>

            <View style={styles.star}>{renderStars()}</View>

            <Text style={styles.title}>Write Your Review</Text>
            <View
                style={[
                    styles.textInputContainer,
                    isFocusedComment && styles.focusedContainer,
                ]}
            >

                <TextInput
                    multiline={true}
                    style={styles.input}
                    placeholder="Your Review"
                    onFocus={handleFocusComment}
                    onChangeText={setComment}
                />

            </View>
            {error.length > 0 && <Text style={styles.error}>{error}</Text>}
            <View style={{ marginHorizontal: 10, justifyContent: 'center' }}>
                <Button title='Add review' onPress={handleAddReview}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginLeft: 16,
        marginTop: 16,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    textInputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginVertical: 5,

    },
    input: {
        flex: 1,
    },
    buttonSubmit: {
        marginTop: 10,
        marginVertical: 100
    },
    star: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginLeft: 11,
        marginBottom: 20
    }
});