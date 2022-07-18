import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import HomeNavegator from './HomeNavegation';
import Header from '@app/components/Header';
import SearchNavegator from './SearchNavegation';
import storage from '@app/utils/StorageMMKV';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  useEffect(() => {
    const token = storage.getString('token');
    console.log('main: ', token);
    if (token === undefined) navigation.navigate('SignIn');
  }, []);

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
        name="SearchNavegator"
        component={SearchNavegator}
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
