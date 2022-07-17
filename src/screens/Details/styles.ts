import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  image: {
    paddingTop: scale(20),
    height: scale(550),
    marginBottom: scale(16),
  },
  number: {
    position: 'absolute',
    right: scale(15),
    top: scale(15),
    color: '#373242',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: '#F4EFF3',
    padding: scale(10),
    borderRadius: scale(4),
  },
  title: {
    color: '#373242',
    fontSize: scale(24),
    fontWeight: 'bold',
    paddingTop: 10,
    marginBottom: scale(10),
    paddingHorizontal: scale(28),
    textAlign: 'center',
  },
  moreDetails: {
    paddingHorizontal: scale(28),
    marginBottom: scale(16),
  },
  releaseDate: {
    textAlign: 'center',
    color: '#373242',
    fontSize: scale(14),
  },
  viewOverview: {
    paddingHorizontal: scale(28),
    marginBottom: scale(16),
  },
  titleOverview: {
    color: '#373242',
    fontSize: scale(18),
    fontWeight: '600',
    marginBottom: scale(6),
  },
  overview: {
    fontSize: scale(14),
    color: '#373242',
  },
});

export default styles;
