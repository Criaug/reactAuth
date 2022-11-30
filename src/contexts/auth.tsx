import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  authenticated?: boolean;
  loading?: boolean;
  user?: {} | null;
  login?: (username: string, password: string) => void;
  logout?: () => void;
};

export const AuthContext = createContext<Props | null>(null);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dadosLogin = localStorage.getItem('user');
    if (dadosLogin) {
      setUser(JSON.parse(dadosLogin));
    }

    setLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    const dadosLogin = {
      id: '123',
      username,
    };

    localStorage.setItem('user', JSON.stringify(dadosLogin));

    if (password === 'teste') {
      setUser(dadosLogin);
      navigate('/');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser({ id: '' });
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: user.id == '' ? false : true,
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
