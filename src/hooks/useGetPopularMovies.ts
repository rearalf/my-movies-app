import getPopularMovies from '@app/api/getPopularMovie';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

function useGetPopularMovies() {
  const [popularMovies, setPopularMovies] = useState<
    PopularMoviesResult['results']
  >([]);
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
  useEffect(() => {
    (async () => {
      await handleGetpPopularMovies();
    })();
  }, []);
  return {
    popularMovies,
    handleGetpPopularMovies,
  };
}
export default useGetPopularMovies;
