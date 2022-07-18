import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentvoteAverage: {
    position: 'absolute',
    right: scale(10),
    top: scale(10),
    backgroundColor: '#081c22',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50 / 2),
    borderWidth: scale(2.5),
  },
  contentvoteAverage50: {
    borderColor: '#db2360',
    backgroundColor: '#480829',
  },
  contentvoteAverage60: {
    borderColor: '#d2d531',
    backgroundColor: '#423d0f',
  },
  contentvoteAverage70: {
    borderColor: '#21d07a',
    backgroundColor: '#081c22',
  },
  voteAverage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  voteAverage50: {
    color: '#db2360',
  },
  voteAverage60: {
    color: '#d2d531',
  },
  voteAverage70: {
    color: '#21d07a',
  },
});

export default styles;
