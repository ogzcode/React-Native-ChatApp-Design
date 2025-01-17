import { NavigationContainer } from "@react-navigation/native";

import { getItem } from "../services/storage";

import TabNavigator from "./TabNavigator";
import StackNavigator from "./StackNavigator";
import { useEffect, useState } from "react";


const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await getItem('token');
      setIsLoggedIn(!!token);
    };
    checkLogin();
  }, []);

  
  return (
    <NavigationContainer>
        {isLoggedIn ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
};


export default Navigation;