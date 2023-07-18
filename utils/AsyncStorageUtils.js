import AsyncStorage from '@react-native-async-storage/async-storage';
// import EventEmitter from "./EventEmitter";

export const loadFavoriteProducts = async (userName) => {
  try {
    const favoritesString = await AsyncStorage.getItem('favorites');
    const favorites = JSON.parse(favoritesString) || {};
    return favorites[userId] || [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

export const removeFromFavorites = async (userName, productId) => {
  try {
    const storedFavorites = await AsyncStorage.getItem('favorites');
    let favoritesData = [];
    if (storedFavorites !== null) {
      favoritesData = JSON.parse(storedFavorites[userName]);
    }
    const updatedFavorites = favoritesData[userName].filter(
      (fav) => fav.id !== data.id
    );
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.log('Error removing item from favorites:', error);
  }
};

export const removeAllFavorites = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Clear Successfully');
    l;
  } catch (error) {
    console.log('Error clearing AsyncStorage:', error);
  }
};

export const saveFavoriteProduct = async (userName, productId) => {
  try {
    // Get the current favorites from AsyncStorage
    const favoritesString = await AsyncStorage.getItem('favorites');
    const favorites = JSON.parse(favoritesString) || {};

    // Add the product ID to the user's favorites
    if (!favorites[userName]) {
      favorites[userName] = [];
    }
    if (!favorites[userName].includes(productId)) {
      favorites[userName].push(productId);
    }

    // Save the updated favorites back to AsyncStorage
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};
