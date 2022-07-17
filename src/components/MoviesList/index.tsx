import React from 'react';
import MovieCard from '../MovieCard';
import { FlatList } from 'react-native';
import scale from '@app/utils/Scale';

interface MoviesListProps {
  movies: ListMoviesResult['results'];
}

export default function MoviesList(props: MoviesListProps) {
  return (
    <FlatList
      data={props.movies}
      showsVerticalScrollIndicator={false}
      keyExtractor={movie => String(movie.id)}
      renderItem={({ item }) => <MovieCard movie={item} horizontal={false} />}
      style={{
        marginHorizontal: scale(28),
      }}
    />
  );
}
