import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formSearch: {
    width: '100%',
    paddingHorizontal: scale(28),
    marginBottom: scale(20),
    marginTop: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSearch: {
    backgroundColor: '#FFFFFF',
    paddingVertical: scale(13.5),
    paddingHorizontal: scale(15),
    borderRadius: scale(10),
    width: '75%',
  },
  buttonSearch: {
    backgroundColor: '#79CCB2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    paddingVertical: scale(13.5),
    paddingHorizontal: scale(15),
    width: '20%',
  },
  iconButton: { width: scale(20), height: scale(20) },
});

export default styles;
