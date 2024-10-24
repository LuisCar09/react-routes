import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Header = ({infoElementsList}) => {
 
    return(
        <>
             <Navbar elementsList={infoElementsList} /> 
        </>
    )
}

export default Header