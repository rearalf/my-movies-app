import { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import getPopularMovies from '@app/api/getPopularMovie';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SearchMovieContext from '@app/context/SearchMovieContext';

function useGetPopularMovies() {
  const { setSearchMovieTab } = useContext(SearchMovieContext);
  const navigation = useNavigation<NavigationProp<MainNavigationParamsList>>();
  const [search, setSearch] = useState('');
  const [popularMovies, setPopularMovies] = useState<
    ListMoviesResult['results']
  >([]);
  const handleChangeInput = (value: string) => setSearch(value);
  const handleGetpPopularMovies = async () => {
    try {
      const result = await getPopularMovies(1);
      if (result.success === false) {
        throw 'Something went wrong.';
      } else {
        setPopularMovies([...popularMovies, ...result.results]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong.');
    }
  };
  const handleSearchMovie = () => {
    setSearchMovieTab({
      searchMovie: search,
      searchMovieState: true,
    });
    navigation.navigate('SearchNavegator');
    setSearch('');
  };
  useEffect(() => {
    (async () => {
      await handleGetpPopularMovies();
    })();
  }, []);
  return {
    search,
    popularMovies,
    handleChangeInput,
    handleSearchMovie,
    handleGetpPopularMovies,
  };
}
export default useGetPopularMovies;
