import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@beneficiarios:logged');

    return !!isLogged;
  });

  const signIn = (email, password) => {
    if(email === 'admin@yube.com' && password === '123456') {
      localStorage.setItem('@beneficiarios:logged', 'true');
      setLogged(true);
    } else {
      alert('Senha ou usuário inválidos');
    }
  }

  const signOut = () => {
    localStorage.removeItem('@beneficiarios:logged');
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      { children } 
    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };