import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import storage from '@app/utils/StorageMMKV';
import { ScreenProps } from '@app/@types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface HomeScreenProps
  extends ScreenProps<MainNavigationParamsList, 'Home'> {}

export default function Home(props: HomeScreenProps) {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          storage.delete('token');
          navigation.navigate('SignIn');
        }}>
        <Text>Forgot password</Text>
      </TouchableOpacity>
    </View>
  );
}
