import scale from '@app/utils/Scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EFF3',
  },
  title: {
    fontSize: scale(32),
    fontWeight: '700',
    marginBottom: scale(16),
    color: '#373242',
  },
  subTitle: {
    fontSize: scale(24),
    paddingLeft: scale(52),
    paddingRight: scale(52),
    textAlign: 'center',
    marginBottom: scale(32),
    color: '#373242',
  },
  formSignIn: {
    width: '100%',
    paddingHorizontal: scale(28),
  },
  input: {
    width: '100%',
    paddingVertical: scale(13.5),
    paddingHorizontal: scale(15),
    marginBottom: scale(12),
    borderRadius: scale(10),
    backgroundColor: '#FFFFFF',
  },
  lastInput: { marginBottom: scale(18) },
  inputError: {
    borderColor: '#EA4335',
    borderWidth: scale(1),
  },
  messageForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  message: {
    opacity: 0,
    fontWeight: '600',
  },
  linkForgot: {
    fontWeight: '500',
    textAlign: 'right',
    marginBottom: scale(18),
    color: '#6A6576',
  },
  buttonLogIn: {
    backgroundColor: '#79CCB2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    paddingVertical: scale(14),
  },
  buttonLogInText: {
    color: '#FFF',
    fontSize: scale(14),
    fontWeight: '700',
  },
  separator: {
    marginTop: scale(40),
    marginBottom: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separatorText: {
    color: '#6A6576',
    fontWeight: '600',
    fontSize: scale(12),
    marginHorizontal: scale(28),
  },
  separatorGrayLine: {
    flex: 1,
    height: scale(1),
    backgroundColor: '#6A6576',
  },
  iconList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: scale(3),
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
    borderRadius: scale(10),
  },
  icon: {
    width: scale(40),
    height: scale(40),
    resizeMode: 'contain',
  },
  sectionSignUp: {
    textAlign: 'center',
    color: '#6A6576',
    marginTop: scale(41),
    fontSize: scale(12),
  },
});

export default styles;
