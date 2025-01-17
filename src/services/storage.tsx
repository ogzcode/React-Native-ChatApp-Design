import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getItem = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const removeItem = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const clear = async () => {
  await AsyncStorage.clear();
};


