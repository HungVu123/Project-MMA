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
  containCarousel: {
    width: windowWidth,
    height: 352,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    width: '100%',
    height: '100%',
  },
  containImage: {
    width: windowWidth,
    height: '100%',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: windowWidth,
  },
  containHeaderLike: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containHeader: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
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
    width: '100%',
    height: '5%',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  rating: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  price: {
    fontSize: 25,
    marginLeft: 20,
    color: '#40BFFF',
    fontWeight: '600',
  },
  desc: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: '600',
  },
  descDetail: {
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#9098B1',
  },
  containButtonCart: {
    width: '90%',
    height: '10%',
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
});
export default styles;
