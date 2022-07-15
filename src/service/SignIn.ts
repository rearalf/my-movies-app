async function SignInService(email: string, password: string) {
  const response = await fetch('https://reqres.in/api/login', {
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

export default SignInService;
