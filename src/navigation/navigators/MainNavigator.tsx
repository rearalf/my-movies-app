import React from 'react';
import SearchScreen from '@app/screens/Search';
import HomeNavegator from './HomeNavegation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Header from '@app/components/Header';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavegator"
      screenOptions={{
        tabBarShowLabel: false,
        header: () => <Header />,
      }}>
      <Tab.Screen
        name="HomeNavegator"
        component={HomeNavegator}
        options={{
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
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@app/assets/icons/search.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
