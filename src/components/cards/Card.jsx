import { Link } from "react-router-dom"
import TitleH2 from "../utils/H2"
import ImageComponent from "../utils/Image"
import ParagraphComponent from "../utils/Paragraph"

const Card = ({projectName,urlImg,projectDescription,urlProject,institution,date,titleDescription,dateTitle}) => {
    return (
        <div>
            {projectName && <TitleH2 name={projectName} />}
            {urlImg && <ImageComponent urlImage={urlImg} altName={projectName} />}
            {institution && <ParagraphComponent titleDescription={titleDescription} description={institution} />}
            {date && <ParagraphComponent titleDescription={dateTitle} description={date} />}
            {projectDescription && <ParagraphComponent description={projectDescription} titleDescription={'Description'} />}
            {urlProject && <Link to={`${urlProject}`}> {projectName} </Link>}
            
            
        </div>
    )
}

export default Card