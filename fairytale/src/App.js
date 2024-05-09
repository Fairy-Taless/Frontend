import './App.css';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Profile from './pages/Login/Profile';
import Fairy from './pages/Fairy/Fairy';
import ConvertFairy from './pages/Fairy/ConvertFairy';
import ConvertFairy2 from './pages/Fairy/ConvertFairy2';
import { DataProvider } from './pages/DataContext/DataContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Fairy" element={<Fairy />} />
            <Route path="ConvertFairy" element={<ConvertFairy />} />
            <Route path="ConvertFairy2" element={<ConvertFairy2 />} />
          </Routes>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
