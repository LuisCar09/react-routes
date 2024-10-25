import {studies, experiences} from '../../data/resume.js'
import TitleH2 from "../utils/H2"
import ImageComponent from "../utils/Image"
import ParagraphComponent from "../utils/Paragraph"
import Card from '../cards/Card.jsx'
const Resume = () => {
    
    const allInformation = [...studies,...experiences].flat()

    return (
        <main>
         
        {allInformation.map(info => {
            const {title,institution,date,company} = info
            return(
                <>
                <TitleH2 nameTitle={title} />
                <ParagraphComponent titleDescription={!institution ? company : institution} description={date} />
                </>
            )
        })}
        </main>
    )
}

export default Resume