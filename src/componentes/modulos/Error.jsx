import "../../../src/App.css"
import {Link} from "react-router-dom";

const Error = () =>{

    return(
        <>
            <div className="error">
                <img src="../../assets/images/3793096.jpg" alt="error 404" />
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default Error;