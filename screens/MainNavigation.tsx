console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
import 'react-native-gesture-handler';
import React from "react"
import Login from "../screens/Login"
import Main from "../screens/Main"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuthContext from "../hooks/useAuthContext";

const Stack = createStackNavigator();

export default function MainNavigation() {

  const {
    state,
  } = useAuthContext();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#222325',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            }}>
            {state.accessToken == "" ? (
                <Stack.Screen name="Login" component={Login} />
            ) : (
                <Stack.Screen name="Main" component={Main} />
            )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}




       