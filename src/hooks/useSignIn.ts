import SignInAPI from '@app/api/SignIn';
import storage from '@app/utils/StorageMMKV';
import { useState } from 'react';
/* 
"email": "eve.holt@reqres.in",
"password": "cityslicka"
*/
function useSignIn(navigation: () => void) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
    error: false,
    success: false,
  });
  const handleChangeInputs = (value: string, name: string) =>
    setForm({
      ...form,
      [name]: value,
    });
  const hanleSignIn = async () => {
    try {
      if (form.email === '') {
        setForm({
          ...form,
          passwordError: false,
          emailError: true,
        });
        throw 'Email is empty.';
      }
      if (form.password === '') {
        console.log(form.password)
        setForm({
          ...form,
          emailError: false,
          passwordError: true,
        });
        throw 'Password is empty.';
      }
      const result = await SignInAPI(form.email, form.password);
      if (result.error !== undefined) {
        setForm({
          ...form,
          emailError: false,
          passwordError: false,
          error: true,
          email: '',
          password: '',
        });
        throw 'An error occurred with the credentials';
      } else {
        setForm({
          email: '',
          password: '',
          emailError: false,
          passwordError: false,
          error: false,
          success: false,
        });
        storage.set('token', result.token);
        const token = storage.getString('token');
        if (token) navigation();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    form,
    setForm,
    hanleSignIn,
    handleChangeInputs,
  };
}

export default useSignIn;
