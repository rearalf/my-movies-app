import React from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface MovieCardProps {
  movie: MovieCardType;
  horizontal: boolean;
}

const MovieCard = (props: MovieCardProps) => {
  const navigation = useNavigation<NavigationProp<MainNavigationParamsList>>();
  const handleGoToMovie = () => {
    navigation.navigate('Details', {
      id: props.movie.id,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={handleGoToMovie} key={props.movie.id}>
      <View style={[styles.card, props.horizontal && styles.cardHorizontal]}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`,
            }}
            style={[styles.image, props.horizontal && styles.imageHorizontal]}
          />
          <Text style={styles.number}>
            {`${Math.round(props.movie.vote_average * 10)} `}%
          </Text>
          <Text style={styles.title}>{props.movie.title}</Text>
          <Text style={styles.overview}>{props.movie.overview}</Text>
          <Text style={styles.releaseDate}>{props.movie.release_date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
