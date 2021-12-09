import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Header3 from "./Header3";
import ABC from "../images/abc.svg"

const Places = () => {
    return (
        <>
            <Header3/>
            <Nav/>
            <img className="abc" src={ABC}/>
            <Footer/>
        </>
    ); 
}; 

export default Places;