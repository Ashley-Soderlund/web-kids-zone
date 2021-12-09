import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Header3 from "./Header3";
import Counting from "../images/count.svg";

const Count = () => {
    return (
        <>
            <Header3/>
            <Nav/>
            <img className="counts" src={Counting}/>
            <Footer/>
        </>
    ); 
}; 

export default Count; 