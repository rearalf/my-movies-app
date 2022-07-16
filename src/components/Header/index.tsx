import React from 'react';
import styles from './styles';
import storage from '@app/utils/StorageMMKV';
import { Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  const handleSigningOut = () => {
    storage.delete('token');
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('@app/assets/images/logo-title.png')}
      />
      <View style={styles.iconContainer}>
        <Pressable onPress={handleSigningOut}>
          <Image
            style={styles.icon}
            source={require('@app/assets/icons/log-out.png')}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;
