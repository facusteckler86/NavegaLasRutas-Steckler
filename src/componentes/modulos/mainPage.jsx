import "../../../src/App.css";
import Productos from "./Productos";

const MainPage = () => {
  return (
    <div className="home-Page">
      <h1 className="homeTitle">Panaderia Doña Pepa</h1>

      <>
        <Productos />
      </>
    </div>
  );
};

export default MainPage;
