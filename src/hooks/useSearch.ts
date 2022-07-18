import searchMovies from '@app/api/searchMovies';
import { useState } from 'react';
import { Alert } from 'react-native';

function useSearch() {
  const [search, setSearch] = useState('');
  const [foundMovies, setFoundMovies] = useState<ListMoviesResult['results']>(
    [],
  );
  const handleChangeInput = (value: string) => setSearch(value);
  const handleSearchMovie = async () => {
    try {
      if (search === '') {
        Alert.alert('Form is empty.');
        throw 'Search is empty';
      }
      const result = await searchMovies(search);
      if (result.success === false) {
        Alert.alert('Something went wrong.');
        throw 'Something went wrong.';
      } else {
        setFoundMovies([...result.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    search,
    foundMovies,
    handleChangeInput,
    handleSearchMovie,
  };
}

export default useSearch;
