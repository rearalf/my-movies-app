import React, { useEffect, useState } from 'react';
import styles from './styles';
import MoviesList from '@app/components/MoviesList';
import { ScreenProps } from '@app/@types/navigation';
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import useGetPopularMovies from '@app/hooks/useGetPopularMovies';

function Home() {
  const { popularMovies, handleGetpPopularMovies } = useGetPopularMovies();
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F4EFF3',
      }}>
      <View style={styles.formSearch}>
        <TextInput placeholder="Email" style={styles.inputSearch} />
        <TouchableOpacity style={styles.buttonSearch}>
          <Image
            style={styles.iconButton}
            source={require('@app/assets/icons/search-button.png')}
          />
        </TouchableOpacity>
      </View>
      <MoviesList movies={popularMovies} />
    </SafeAreaView>
  );
}

export default Home;
