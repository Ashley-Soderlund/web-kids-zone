import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Header3 from "./Header3";
import Animal from "../images/ani.svg";

const Animals = () => {
    return (
        <>
            <Header3/>
            <Nav/>
            <div className="space">
                <img className="ani" src={Animal}/>
            </div>
            <Footer/>
        </>
    ); 
}; 

export default Animals; 