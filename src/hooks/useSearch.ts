import searchMovies from '@app/api/searchMovies';
import SearchMovieContext from '@app/context/SearchMovieContext';
import { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

function useSearch(searchMovie: string) {
  const { searchMovieTab, setSearchMovieTab } = useContext(SearchMovieContext);
  const [search, setSearch] = useState('');
  const [foundMovies, setFoundMovies] = useState<ListMoviesResult['results']>(
    [],
  );
  const handleChangeInput = (value: string) => setSearch(value);
  const handleSearchMovie = async (searchMovie?: string) => {
    try {
      console.log('loading');
      if (search === '' && !searchMovieTab.searchMovieState) {
        Alert.alert('Form is empty.');
        throw 'Search is empty';
      }
      const whatsSearch = searchMovieTab.searchMovieState
        ? searchMovie || search
        : search;
      const result = await searchMovies(whatsSearch);
      setSearchMovieTab({
        searchMovie: '',
        searchMovieState: false,
      });
      if (result.success === false) {
        Alert.alert('Something went wrong.');
        throw 'Something went wrong.';
      } else {
        setFoundMovies(result.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (searchMovieTab.searchMovieState) {
      setSearch(searchMovieTab.searchMovie);
      handleSearchMovie(searchMovieTab.searchMovie);
    }
  }, [searchMovieTab]);

  return {
    search,
    foundMovies,
    handleChangeInput,
    handleSearchMovie,
  };
}

export default useSearch;
