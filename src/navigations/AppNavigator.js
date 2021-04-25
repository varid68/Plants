
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'screens/SplashScreen'
import WalkthroughScreen from 'screens/Walkthrough'
import CheckoutScreen from 'screens/Checkout/CheckoutScreen'
import DetailScreen from 'screens/Detail/DetailScreen'
import HomeScreen from 'screens/Home/HomeScreen'


const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  )
}

export default App