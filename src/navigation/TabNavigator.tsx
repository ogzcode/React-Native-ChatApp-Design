import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Chats from "../screen/main/chats";
import People from "../screen/main/people";
import Settings from "../screen/main/settings";

import { MessageCircleMore, Settings2, Users } from "lucide-react-native";
import { useTheme } from "../theme/useTheme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator 
      initialRouteName="Settings"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.border,
        tabBarStyle: {
          height: 60,
          paddingTop: 12,
          backgroundColor: theme.colors.background,
          elevation: 0, // Android için gölgeyi kaldırır
          shadowOpacity: 0, // iOS için gölgeyi kaldırır
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.secondary,
      }}
    >
      <Tab.Screen 
        name="Chats" 
        component={Chats} 
        options={{ 
          tabBarIcon: ({ color, size }) => <MessageCircleMore color={color} size={24} />,
        }} 
      />
      <Tab.Screen 
        name="People" 
        component={People} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Users color={color} size={24} />,
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Settings2 color={color} size={24} />,
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;