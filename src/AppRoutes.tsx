import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import { AuthProvider, AuthContext } from './contexts/auth.jsx';
import { useContext } from 'react';

const AppRoutes = () => {
  const Private = ({ children }: { children: JSX.Element }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to={'/login'}></Navigate>;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Private>
                <Home></Home>
              </Private>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
