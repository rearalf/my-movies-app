import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';
import MoviesList from '@app/components/MoviesList';
import FormSearch from '@app/components/FormSearch';
import useGetPopularMovies from '@app/hooks/useGetPopularMovies';

function Home(props: ScreenProps<MainNavigationParamsList, 'Home'>) {
  const { search, popularMovies, handleChangeInput, handleSearchMovie } =
    useGetPopularMovies();
  return (
    <SafeAreaView>
      <FormSearch
        search={search}
        handleChangeInput={handleChangeInput}
        handleSearchMovie={handleSearchMovie}
      />
      <MoviesList movies={popularMovies} />
    </SafeAreaView>
  );
}

export default Home;
