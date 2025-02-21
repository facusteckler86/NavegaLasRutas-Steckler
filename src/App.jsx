import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./componentes/Home/HomePage";
import MainPage from "./componentes/modulos/mainPage";
import Error from "./componentes/modulos/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={< Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
