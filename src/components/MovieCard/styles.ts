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
  image: {
    width: '100%',
    height: scale(400),
    borderRadius: scale(10),
  },
  number: {
    position: 'absolute',
    right: scale(10),
    top: scale(10),
    color: '#373242',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: '#F4EFF3',
    padding: scale(10),
    borderRadius: scale(4),
  },
  title: {
    color: '#373242',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginBottom: scale(10),
  },
  overview: {
    fontSize: scale(12),
  },
  releaseDate: {
    position: 'absolute',
    top: scale(350),
    left: scale(10),
    color: '#373242',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: '#F4EFF3',
    padding: scale(10),
    borderRadius: scale(4),
  },
});

export default styles;
