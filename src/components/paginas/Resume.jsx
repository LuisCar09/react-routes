import {studies, experiences} from '../../data/resume.js'
import TitleH2 from "../utils/H2"

import ParagraphComponent from "../utils/Paragraph"

const Resume = () => {
    
    const allInformation = [...studies,...experiences].flat()

    return (
        <main>
         
        {allInformation.map(info => {
            const {title,institution,date,company} = info
            return(
                <>
                {!institution ? <TitleH2 nameTitle={'Experience'} /> : <TitleH2 nameTitle={'Studies'} />}
                
                <TitleH2 nameTitle={title} />
                <ParagraphComponent titleDescription={!institution ? company : institution} description={date} />
                </>
            )
        })}
        </main>
    )
}

export default Resume