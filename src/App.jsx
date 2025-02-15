import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/homePage';
//import MainPage from './components/modulos/MainPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/main" element={<mainPage />} /> 
        </Routes>
      </Router>
  );
};

export default App;
