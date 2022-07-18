import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';
import MoviesList from '@app/components/MoviesList';
import FormSearch from '@app/components/FormSearch';
import useGetPopularMovies from '@app/hooks/useGetPopularMovies';
import Loading from '@app/components/Loading';

function Home(props: ScreenProps<MainNavigationParamsList, 'Home'>) {
  const {
    search,
    loading,
    popularMovies,
    handleChangeInput,
    handleSearchMovie,
    handleGetpPopularMovies,
  } = useGetPopularMovies();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FormSearch
        search={search}
        handleChangeInput={handleChangeInput}
        handleSearchMovie={handleSearchMovie}
      />
      {loading ? (
        <Loading />
      ) : (
        <MoviesList
          movies={popularMovies}
          handlGetMore={handleGetpPopularMovies}
        />
      )}
    </SafeAreaView>
  );
}

export default Home;
