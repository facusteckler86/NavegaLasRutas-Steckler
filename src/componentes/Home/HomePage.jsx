

const HomePage = () =>{

    return(
        <div className="homePage">
             <h1>Panaderia Doña Pepa.</h1>
             <button className="enter-button" onClick={() => window.location.href = "/mainPage"}>
                Bienvenidos</button>
        </div>
    )
}

export default HomePage;