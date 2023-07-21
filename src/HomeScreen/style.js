import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  searchBox: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 50,
    borderColor: '#bdc3c7',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  iconHeart: {
    flex: 1,
    color: '#bdc3c7',
  },
  iconNoti: {
    color: '#bdc3c7',
  },
  iconSearch: {
    position: 'absolute',
    left: 15,
    color: '#40BFFF',
  },

  // category
  categoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRight: {
    color: '#40BFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLeft: {
    color: '#192a56',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingVertical: 12,
  },
  categoryIconContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 100,
    padding: 20,
    borderColor: '#bdc3c7',
    marginHorizontal: 5,
  },
  categoryIcon: {
    fontSize: 25,
    color: '#40BFFF',
  },
  categoryText: {
    paddingTop: 10,
    color: '#95a5a6',
    fontWeight: '500',
    textAlign: 'center',
  },
  cateContainer: {
    maxWidth: width * 0.2,
  },

  // item sale (card)
  saleTextContainer: {
    // marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allItemsContainer: {
    paddingVertical: 12,
  },
  cardContainer: {
    height: height * 0.25,
    width: width * 0.35,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#bdc3c7',
    marginRight: 20,
    paddingVertical: 10,
  },
  itemImageContainer: {
    height: height * 0.13,
  },
  itemImage: {
    resizeMode: 'cover',
    height: height * 0.13,
    width: width * 0.29,
    borderRadius: 5,
  },
  itemName: {
    color: '#192a56',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  itemPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
  },
  initPrice: {
    fontSize: 12,
    paddingTop: 5,
    textDecorationLine: 'line-through',
  },

  // carousel
  carouselContainer: {
    marginTop: 20,
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  carouselImage: {
    height: '100%',
    resizeMode: 'stretch',
    width: width * 0.95,
  },

  // search result
  searchResulContainer: {
    paddingVertical: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardSearchResultContainer: {
    height: height * 0.25,
    width: width * 0.35,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#bdc3c7',
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default styles;
