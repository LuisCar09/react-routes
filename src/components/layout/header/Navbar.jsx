import { Link } from "react-router-dom";
import UnOrderedList from './UnorderList'

const Navbar = ({elementsList}) => {
    
    
    return (
        <nav>
            <UnOrderedList list ={elementsList} />
        </nav>
    )
}

export default Navbar