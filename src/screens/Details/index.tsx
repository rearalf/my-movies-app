import React from 'react';
import styles from './styles';
import { ScreenProps } from '@app/@types/navigation';
import useGetDetails from '@app/hooks/useGetDetails';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MovieCard from '@app/components/MovieCard';
import scale from '@app/utils/Scale';
import VoteAverage from '@app/components/VoteAverage';

interface DetailsScreenProps
  extends ScreenProps<MainNavigationParamsList, 'Details'> {}

export default function Details(props: DetailsScreenProps) {
  const { movie, similar } = useGetDetails(props.route.params.id);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => props.navigation.goBack()}>
          <Image
            style={styles.goBackIcon}
            source={require('@app/assets/icons/go-back.png')}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
          }}
          style={styles.image}
        />
        <VoteAverage voteAverage={movie ? movie.vote_average : 0} />
        <Text style={styles.title}>{movie?.title}</Text>
        <View style={styles.moreDetails}>
          <Text style={styles.releaseDate}>
            {movie && movie.release_date} (
            {movie && movie.production_countries[0].iso_3166_1}){' - '}
            {movie && movie.genres.map(item => item.name).join(', ')}
          </Text>
        </View>
        <View style={styles.viewOverview}>
          <Text style={styles.titleOverview}>Overview</Text>
          <Text style={styles.overview}>{movie && movie.overview}</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            marginHorizontal: scale(28),
          }}>
          {similar.map(item => (
            <MovieCard movie={item} key={item.id} horizontal={true} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
