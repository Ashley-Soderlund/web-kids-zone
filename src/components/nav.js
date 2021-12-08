import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className= "navcontainer">
                <div className = "navNames">
                <Link className="answer" to="/">
                    Home
                </Link>
                <Link className="answer" to="/places">
                    Places
                </Link>
                <Link className="answer" to="/shapes">
                    Shapes
                </Link>
                <Link className="answer" to="/count">
                    Count
                </Link>
                <Link className="answer" to="/abc">
                    ABCs
                </Link>
                <Link className="answer" to="/animals">
                    Animals
                </Link>
                </div>
            </div>
        </>
    ); 
}; 

export default Nav;