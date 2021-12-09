import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header2 from "./Header3";
import Nav from "./nav";
import Place from "../images/place.svg";

const Places = () => {
    return (
        <>
            <Header2/>
            <Nav/>
            <img className="place" src= {Place}/>
            <Footer/>
        </>
    ); 
}; 

export default Places; 