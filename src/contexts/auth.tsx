import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  authenticated: boolean;
  user: {};
  login: (username: string, password: string) => void;
  logout: () => void;
  children?: JSX.Element;
};

export const AuthContext = createContext<Props | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
  });
  const login = (username: string, password: string) => {
    if (password === 'teste') {
      setUser({ id: '123' });
      navigate('/');
    }
  };

  const logout = () => {
    setUser({ id: '' });
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: user.id == '' ? false : true,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
