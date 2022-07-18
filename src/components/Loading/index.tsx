import { View, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" style={styles.spinner} color="#aeaeae" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});

export default Loading;
