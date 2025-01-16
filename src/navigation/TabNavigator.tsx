import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Test from "../screen/Test";

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Test">
        <Tab.Screen name="Test" component={Test} />
    </Tab.Navigator>
  );
};

export default TabNavigator;