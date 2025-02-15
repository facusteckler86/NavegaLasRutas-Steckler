import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './componentes/Home/HomePage';
import MainPage from './componentes/modulos/MainPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
  );
};

export default App;
