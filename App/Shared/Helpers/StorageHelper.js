import AsyncStorage from '@react-native-community/async-storage';

export const setItem = (key, value) => {
  return AsyncStorage.setItem(key, value);
}

export const getItem = async (key) => {
  return await AsyncStorage.getItem(key);
}

export const removeItem = (key) => {
  return AsyncStorage.removeItem(key);
}

export const clearAll = () => {
  return AsyncStorage.clear();
}