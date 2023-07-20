import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  navbar:{
    height: "8%",
    borderBottomWidth: 0.5,
    borderColor: "#e7ecfa",
    justifyContent: "center"
  },
  goBackIcon: {
    height: 18,
    width: 10,
    marginHorizontal: 20
  },
  flatList: {
    height: "85%",
    width: "100%",
  },
  scrollView: {
    height: "10%",
  },
  containRatingFilter: {
    flexDirection: "row",
    height: "72%",
    width: windowWidth*0.18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#9098B1",
    marginHorizontal: 10
  },
  ratingFilter: {
    marginLeft: 5,
  },
  containDetailRating: {
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    height: windowHeight * 0.2,
    backgroundColor: "#f7f9ff",
  },

  containHeaderDetailRating: {
    height: "40%",
    flexDirection: "row",
  },
  containAvaRating: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  avaRating: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  containNameAndRating: {
    height: "100%",
    width: "75%",
  },
  containNameRating: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containRating: {
    width: "100%",
    height: windowHeight * 0.03,
    paddingLeft: 20,
    flexDirection: "row",
  },
  rating: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  containDescRating: {
    width: "100%",
    height: "60%",
  },
  detailRating: {
    marginHorizontal: 20,
    color: "#9098B1",
    marginBottom: 10,
  },
});
export default styles;
