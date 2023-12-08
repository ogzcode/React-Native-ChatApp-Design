import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import { auth } from "../services/firebaseConfig";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { View, ActivityIndicator } from "react-native";
import { getIsRegister } from "../services/token";
import { Pressable, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import HomeHeader from "./HomeHeader";

const Stack = createStackNavigator();

export default function Navigation() {
  const [user, setUser] = useState(null);
  const [isRegister, setIsRegisterState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const registerStatus = await getIsRegister();
      setIsRegisterState(registerStatus);

      const unsubscribe = auth.onAuthStateChanged((userData) => {
        if (userData) {
          setUser(userData);
        } else {
          setUser("");
        }
      });

      return () => {
        unsubscribe();
      };
    };

    fetchData();
  }, []);

  if (user === null && isRegister !== null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            header: () => <HomeHeader navigation={navigation} route={route} />,
          })}
        />
        ) : (
          <>
            {isRegister ? (
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            ) : (
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
