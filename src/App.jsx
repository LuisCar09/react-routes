import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import Home from './components/paginas/Home'
import Projects from "./components/paginas/Projects";
import Resume from "./components/paginas/Resume";
import './styles/styles.css'

const infoElements = [
    {
    name:'Home',
    link : '/',
    id:crypto.randomUUID(),
    openApart : ''
    },
    {
        name:'Projects',
        link : '/projects',
        id:crypto.randomUUID(),
        openApart : ''
    },
    {
        name:'Resume',
        link : '/resume',
        id:crypto.randomUUID(),
        openApart : ''
    }
]



const App = () => {
    return (
        
        <Router>
            <Header infoElementsList ={infoElements} element={<Header />}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>

            <Footer />
        
        </Router>

    )
}

export default App;