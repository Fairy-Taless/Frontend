import './App.css';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Profile from './pages/Login/Profile';
import Fairy from './pages/Fairy/Fairy';
import ConvertFairy from './pages/Fairy/ConvertFairy';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Fairy" element={<Fairy />} />
          <Route path="ConvertFairy" element={<ConvertFairy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
