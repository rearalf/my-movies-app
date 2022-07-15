import React from 'react';
import SearchScreen from '@app/screens/Search';
import HomeNavegator from './HomeNavegation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavegator"
      screenOptions={{
        tabBarStyle: {},
      }}>
      <Tab.Screen
        name="HomeNavegator"
        component={HomeNavegator}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@app/assets/icons/home.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('@app/assets/icons/search.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
