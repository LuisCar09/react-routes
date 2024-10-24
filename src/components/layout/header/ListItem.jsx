import { Link } from "react-router-dom"

const ListItem = ({name,link,openApart = '_blank'}) => {
    return (
       <>
         <li>
            <Link to={`${link}`} target={openApart ? '_blank' : ''} >{name}</Link>
        </li>
       </>
    )
}
export default ListItem