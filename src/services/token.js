import AsyncStorage from "@react-native-async-storage/async-storage";

export const getIsRegister = async () => {
    try {
        const value = await AsyncStorage.getItem('isRegister')
        return value !== null ? JSON.parse(value) : null;
    } catch (e) {
        console.log(e);
    }
}

export const setIsRegister = async (value) => {
    try {
        await AsyncStorage.setItem('isRegister', JSON.stringify(value))
    } catch (e) {
        console.log(e);
    }
}
