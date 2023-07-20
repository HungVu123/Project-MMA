import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadStorage = async (list, userName) => {
  try {
    const storedData = await AsyncStorage.getItem(list);
    const storage = JSON.parse(storedData) || {};
    return storage[userName] || [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

export const removeFromStorage = async (list, userName, product) => {
  try {
    const stored = await AsyncStorage.getItem(list);
    let storedData = [];
    if (stored !== null) {
      storedData = JSON.parse(stored);
    }
    const updatedStorage = storedData[userName].filter(
      (data) => data._id !== product._id
    );
    storedData[userName] = updatedStorage;
    await AsyncStorage.setItem(list, JSON.stringify(storedData));
  } catch (error) {
    console.log('Error removing item from favorites:', error);
  }
};

export const removeAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Clear Successfully');
    l;
  } catch (error) {
    console.log('Error clearing AsyncStorage:', error);
  }
};

export const saveToStorage = async (list, userName, product) => {
  try {
    // Get the current favorites from AsyncStorage
    const storedString = await AsyncStorage.getItem(list);
    const storage = JSON.parse(storedString) || {};

    // Add the product ID to the user's favorites
    if (!storage[userName]) {
      storage[userName] = [];
    }
    if (!storage[userName].includes(product)) {
      storage[userName].push(product);
    }

    // Save the updated favorites back to AsyncStorage
    await AsyncStorage.setItem('favorites', JSON.stringify(storage));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};