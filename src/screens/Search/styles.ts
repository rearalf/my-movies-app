import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(28),
  },
  foundMovie: {
    marginBottom: scale(14),
  },
  foundMovieTitle: {
    fontWeight: 'bold',
    fontSize: scale(16),
  },
});

export default styles;
