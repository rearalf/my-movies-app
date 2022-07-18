import React from 'react';
import useSearch from '@app/hooks/useSearch';
import FormSearch from '@app/components/FormSearch';
import MoviesList from '@app/components/MoviesList';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

export default function Search() {
  const { search, foundMovies, handleChangeInput, handleSearchMovie } =
    useSearch();
  return (
    <SafeAreaView>
      <FormSearch
        search={search}
        handleChangeInput={handleChangeInput}
        handleSearchMovie={handleSearchMovie}
      />
      <View style={styles.container}>
        <View>
          {foundMovies.length > 0 && (
            <Text style={styles.foundMovie}>
              Found movies by name{' '}
              <Text style={styles.foundMovieTitle}>{search}</Text>
            </Text>
          )}
        </View>
      </View>
      <MoviesList movies={foundMovies} />
    </SafeAreaView>
  );
}
