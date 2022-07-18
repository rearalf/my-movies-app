import React from 'react';
import MovieCard from '../MovieCard';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
} from 'react-native';
import scale from '@app/utils/Scale';
import Loading from '../Loading';

interface MoviesListProps {
  movies: ListMoviesResult['results'];
  handlGetMore: () => void;
}

export default function MoviesList(props: MoviesListProps) {
  return (
    <FlatList
      data={props.movies}
      showsVerticalScrollIndicator={false}
      keyExtractor={movie => String(movie.id)}
      renderItem={({ item }) => <MovieCard movie={item} horizontal={false} />}
      onEndReached={props.handlGetMore}
      onEndReachedThreshold={2}
      ListFooterComponent={<Loading />}
      style={{
        marginHorizontal: scale(28),
      }}
    />
  );
}
