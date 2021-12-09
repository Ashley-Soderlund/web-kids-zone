import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Header3 from "./Header3";
import Shape from "../images/shap.svg";

const Shapes = () => {
    return (
        <>
            <Header3/>
            <Nav/>
            <img className= "shapes" src= {Shape}/>
            <Footer/>
        </>
    ); 
}; 

export default Shapes; 