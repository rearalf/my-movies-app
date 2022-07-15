import React from 'react';
import LottieView from 'lottie-react-native';
import { ScreenProps } from '@app/@types/navigation';
import { StyleSheet, Text, View } from 'react-native';
import storage from '@app/utils/StorageMMKV';

export default function Splash(
  props: ScreenProps<RootNavigatorParamsList, 'Splash'>,
) {
  const token = storage.getString('token');
  return (
    <View style={styles.splash}>
      <LottieView
        source={require('@app/assets/animations/logo.json')}
        autoPlay
        loop={false}
        style={styles.logo}
        onAnimationFinish={() =>
          props.navigation.navigate(token ? 'Main' : 'SignIn')
        }
      />
      <LottieView
        source={require('@app/assets/animations/logo-title')}
        autoPlay
        loop={false}
        style={styles.logoTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alighItems: 'center',
    margin: 0,
    backgroundColor: '#022C54',
  },
  logo: {
    bottom: 50,
  },
  logoTitle: {
    top: 50,
  },
});
