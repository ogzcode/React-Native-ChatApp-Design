import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screen/auth/Login';
import OtpControl from '../screen/auth/OtpControl';
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpControl" component={OtpControl} />
    </Stack.Navigator>
  );
}
