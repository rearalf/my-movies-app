import React from 'react';
import SignInScreen from '@app/screens/SignIn';
import SplashScreen from '@app/screens/Splash';
import MainNavigator from './MainNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
}
