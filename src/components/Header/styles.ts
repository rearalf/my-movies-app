import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: scale(8),
  },
  logo: {
    width: scale(150),
    height: scale(30),
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: scale(24),
    height: scale(22),
    resizeMode: 'contain',
    marginHorizontal: scale(8),
  },
});

export default styles;
