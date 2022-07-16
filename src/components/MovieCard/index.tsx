import React from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface MovieCardProps {
  movie: MovieCardType;
}

const MovieCard = (props: MovieCardType) => {
  const navigation = useNavigation<NavigationProp<MainNavigationParamsList>>();
  const handleGoToMovie = () => {
    navigation.navigate('Details', {
      id: props.id,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={handleGoToMovie}>
      <View style={styles.card}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${props.poster_path}`,
            }}
            style={styles.image}
          />
          <Text style={styles.number}>{`${props.vote_average * 10} `}%</Text>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.overview}>{props.overview}</Text>
          <Text style={styles.releaseDate}>{props.release_date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
