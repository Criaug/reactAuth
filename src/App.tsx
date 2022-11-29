import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
