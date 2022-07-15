import React, { useState } from 'react';
import scale from '@app/utils/Scale';
import storage from '@app/utils/StorageMMKV';
import SignInService from '@app/service/SignIn';
import { ScreenProps } from '@app/@types/navigation';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import useSignIn from '@app/hooks/useSignIn';

const SignInScreen = (
  props: ScreenProps<RootNavigatorParamsList, 'SignIn'>,
) => {
  const navigation = () => props.navigation.navigate('Main');
  const { form, hanleSignIn, handleChangeInputs } = useSignIn(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subTitle}>Wellcome back you've been missed!</Text>
      <View style={styles.formSignIn}>
        <TextInput
          placeholder="Email"
          style={[styles.input, form.emailError ? styles.inputError : null]}
          value={form.email}
          onChangeText={e => handleChangeInputs(e, 'email')}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={[
            styles.input,
            form.passwordError ? styles.inputError : null,
            { marginBottom: scale(18) },
          ]}
          onChangeText={e => handleChangeInputs(e, 'password')}
        />
        <View style={styles.messageForm}>
          <Text
            style={[
              styles.message,
              form.error && { opacity: 1, color: '#EA4335' },
              form.success && { opacity: 1, color: '#34A853' },
            ]}>
            {form.success ? 'Correct credentials' : 'Wrong credentials'}
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkForgot}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonLogIn} onPress={hanleSignIn}>
          <Text style={styles.buttonLogInText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.separator}>
          <View style={styles.separatorGrayLine} />
          <Text style={styles.separatorText}>Or continue with</Text>
          <View style={styles.separatorGrayLine} />
        </View>

        <View style={styles.iconList}>
          <TouchableOpacity style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={require('@app/assets/icons/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={require('@app/assets/icons/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={require('@app/assets/icons/google.png')}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionSignUp}>
          Not a member?{' '}
          <Text
            style={{
              color: '#3797EF',
            }}>
            Register now
          </Text>
        </Text>
      </View>
    </View>
  );
};

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

export default SignInScreen;
