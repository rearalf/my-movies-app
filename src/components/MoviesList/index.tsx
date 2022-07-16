import React from 'react';
import MovieCardProps from '../MovieCard';
import { FlatList } from 'react-native';
import scale from '@app/utils/Scale';

interface MoviesListProps {
  movies: PopularMoviesResult['results'];
}

export default function MoviesList(props: MoviesListProps) {
  return (
    <FlatList
      data={props.movies}
      showsVerticalScrollIndicator={false}
      keyExtractor={movie => String(movie.id)}
      renderItem={({ item }) => <MovieCardProps {...item} />}
      style={{
        marginHorizontal: scale(28),
      }}
    />
  );
}
