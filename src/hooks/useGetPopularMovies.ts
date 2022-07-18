import { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import getPopularMovies from '@app/api/getPopularMovie';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SearchMovieContext from '@app/context/SearchMovieContext';

function useGetPopularMovies() {
  const { setSearchMovieTab } = useContext(SearchMovieContext);
  const navigation = useNavigation<NavigationProp<MainNavigationParamsList>>();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<
    ListMoviesResult['results']
  >([]);
  const handleChangeInput = (value: string) => setSearch(value);
  const handleGetpPopularMovies = async () => {
    try {
      const result = await getPopularMovies(page);
      if (result.success === false) {
        setLoading(false);
        throw 'Something went wrong.';
      } else {
        if (result.total_pages > page) setPage(page + 1);
        setLoading(false);
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
      setLoading(true);
      await handleGetpPopularMovies();
    })();
  }, []);
  return {
    search,
    loading,
    popularMovies,
    handleChangeInput,
    handleSearchMovie,
    handleGetpPopularMovies,
  };
}
export default useGetPopularMovies;
