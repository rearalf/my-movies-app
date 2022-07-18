import React from 'react';
import { ScreenProps } from '@app/@types/navigation';
import useSignIn from '@app/hooks/useSignIn';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

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
          value={form.password}
          onChangeText={e => handleChangeInputs(e, 'password')}
          style={[
            styles.input,
            styles.lastInput,
            form.passwordError ? styles.inputError : null,
          ]}
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

export default SignInScreen;
