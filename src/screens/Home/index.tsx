import { View, Text } from 'react-native';
import React from 'react';
import { ScreenProps } from '@app/@types/navigation';

interface HomeScreenProps
  extends ScreenProps<MainNavigationParamsList, 'Home'> {}

export default function Home(props: HomeScreenProps) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
