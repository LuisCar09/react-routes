// <!-- ( id, name, image, description, url) -->
// <div>
// <h2>nombre del projecto</h2>
// <img src="" alt="project image">
// <p><span>Description:</span></p>
// <a href="">URL DEL PROJECTO</a>
// </div>
import projectsArray from '../../data/projects.js'
import Card from '../cards/Card.jsx';
const Projects = () => {
    
    
    return (
        <main>
        {projectsArray.map(item => {
            const {id,name,image,description,url} = item
            return(
                <Card key={id} projectName={name} urlImg={image} projectDescription={description} urlProject={url}  />
            )
        })}
        </main>
    )
}

export default Projects