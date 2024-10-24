import {studies, experiences} from '../../data/resume.js'
import TitleH2 from "../utils/H2"
import ImageComponent from "../utils/Image"
import ParagraphComponent from "../utils/Paragraph"
import Card from '../cards/Card.jsx'
const Resume = () => {
    const allInformation = studies.map(item => {
        const experiencesInfor = experiences.find(exp => exp.id === item.id)
        return {
            ...item,
            ...experiencesInfor
        }
    })
    console.log(allInformation);
    
    return (
        <main>
         {allInformation.map(infor => <Card key={infor.id} projectName={infor.title} institution={infor.institution} titleDescription={'Estudios'} dateTitle={'Date'}  projectDescription={infor.company} date={infor.date} /> )}
        </main>
    )
}

export default Resume