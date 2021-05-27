import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  return (
    <form onSubmit={() => signIn(email, password)}>
        <h3>Entrar</h3>

        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>
  );
}

export default Login;