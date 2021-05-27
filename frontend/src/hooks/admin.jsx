import { createContext, useState, useContext } from 'react';


const AdminContext = createContext();

const AdminProvider = ({ children }) => {

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
    <AdminContext.Provider value={{ logged, signIn, signOut }}>
      { children } 
    </AdminContext.Provider>
  )

}

function useAdmin() {
  const context = useContext(AdminContext);

  return context;
}

export { AdminProvider, useAdmin };