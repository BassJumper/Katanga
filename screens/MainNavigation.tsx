console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']
import 'react-native-gesture-handler'
import React from "react"
import Login from "../screens/Login"
import Main from "../screens/Main"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import useAuthContext from "../hooks/useAuthContext"
import IonIcons from "react-native-vector-icons/Ionicons"

const Stack = createStackNavigator()
const MainStackTab = createBottomTabNavigator()

export default function MainNavigation() {

  const {
    state,
  } = useAuthContext()

  function MainStackScreen() {
    return (
      <MainStackTab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName
            if(route.name === "Trolley") {
              iconName = "ios-cart"
            } else if (route.name === "List") {
              iconName = "ios-list"
            } else if (route.name === "Payments") {
              iconName = "ios-card"
            } else if (route.name === "Tutorial") {
              iconName = "ios-information-circle"
            }
            return <IonIcons name={iconName} size={25} color={color} />
          }
        })} tabBarOptions={{
          style: {
            backgroundColor: "#222325"
          },
          activeTintColor: "white"
        }}>
          <MainStackTab.Screen name="Trolley" component={Main} />
          <MainStackTab.Screen name="List" component={Main} />
          <MainStackTab.Screen name="Payments" component={Main} />
          <MainStackTab.Screen name="Tutorial" component={Main} />
      </MainStackTab.Navigator>
    )
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#222325',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: 'bold',
            },
            }}>
            {state.accessToken == "" ? (
                <Stack.Screen name="Login" component={Login} />
            ) : (
                <Stack.Screen name="ASDA SCAN &amp; GO (KATANGA)" component={MainStackScreen} />
            )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}




       