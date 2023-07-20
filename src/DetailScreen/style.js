import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  scrollview: {
    height: '100%',
    width: '100%',
  },
  containImage: {
    width: windowWidth,
    height: windowHeight * 0.5,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: windowWidth,
  },
  containHeaderLike: {
    width: "100%",
    height: windowHeight * 0.05,
    paddingTop: windowHeight * 0.01,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containHeader: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
  containButtonLike: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLike: {
    height: 30,
    width: 30,
  },
  containRating: {
    width: "100%",
    height: windowHeight * 0.03,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  rating: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  price: {
    fontSize: 25,
    marginLeft: 20,
    color: "#40BFFF",
    fontWeight: "700",
  },
  desc: {
    height: windowHeight * 0.03,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "700",
  },
  descDetail: {
    marginHorizontal: 20,
    color: "#9098B1",
  },
  containButtonCart: {
    width: "90%",
    height: windowHeight * 0.05,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#40BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonCart: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  containHeaderReview: {
    width: "100%",
    height: windowHeight * 0.03,
    marginTop: windowHeight * 0.02,
    paddingLeft: 18,
    justifyContent: "space-between",
   
    flexDirection: "row",
  },
  headerReview: {
    width: "40%",
    fontSize: 18,
    fontWeight: "700",
  },
  clickHeaderMore: {
    width: "30%",
    paddingLeft: 20,
  },
  headerMore: {
    fontSize: 18,
    fontWeight: "700",
    color: "#40BFFF",
  },
  containDetailRating: {
    borderRadius: 20,
    marginHorizontal: 20,
    height: windowHeight * 0.20,
    backgroundColor: "#e7f0f2"
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
  containDescRating: {
    width: "100%",
    height: "60%",
  },
  detailRating: {
    marginHorizontal: 20,
    color: "#9098B1",
    marginBottom: 10
  },
});
export default styles;
