import "../../../src/App.css";

const HomePage = () => {
    
    
    return (
        <div className="home-Page">
            <h1 className="homeTitle">Panaderia Doña Pepa.</h1>
            <button className="enter-button" onClick={() => window.location.href = "/main"}>
                Bienvenidos
            </button>
        </div>
    );
}

export default HomePage;