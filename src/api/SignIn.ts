import { API_SING } from '@env';

async function SignInAPI(email: string, password: string) {
  const response = await fetch(API_SING, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const json: {
    token: string;
    error?: string;
  } = await response.json();
  return json;
}

export default SignInAPI;
