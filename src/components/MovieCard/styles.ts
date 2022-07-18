import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    marginBottom: scale(24),
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    paddingVertical: scale(16),
    backgroundColor: '#FFF',
  },
  cardHorizontal: {
    width: scale(320),
    marginRight: scale(20),
  },
  image: {
    width: '100%',
    height: scale(450),
    borderRadius: scale(10),
  },
  imageHorizontal: {
    width: scale(300),
  },
  contentTitle: {
    marginVertical: scale(18),
  },
  title: {
    color: '#373242',
    fontSize: scale(22),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: scale(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  overview: {
    fontSize: scale(14),
    paddingHorizontal: scale(14),
  },
});

export default styles;
