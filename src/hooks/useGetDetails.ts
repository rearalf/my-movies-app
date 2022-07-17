import getDetails from '@app/api/getDetails';
import getSimilar from '@app/api/getSimilar';
import { useScrollToTop } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

function useGetDetails(id: number) {
  const [movie, setMovie] = useState<MovieDetails>();
  const [similar, setSimilar] = useState<MovieCardType[]>([]);
  const handleGetDetails = async () => {
    try {
      const result = await getDetails(id);
      if (result.success === false) {
        throw 'Something went wrong.';
      } else {
        setMovie(result);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong.');
    }
  };
  const handleGetSimilar = async () => {
    try {
      const result = await getSimilar(id);
      if (result.success === false) {
        throw 'Something went wrong.';
      } else {
        const similarMovies = result.results.slice(0, 4);
        setSimilar(similarMovies);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong.');
    }
  };
  useEffect(() => {
    (async () => {
      await handleGetDetails();
      await handleGetSimilar();
    })();
  }, [id]);

  return {
    movie,
    similar,
  };
}

export default useGetDetails;
