import { Project } from "../components"
import { projects } from "../constants"

const Projects = () => {

    return (
        <div className="w-full flex flex-col px-10 h-screen" id="projects-section">
            {projects.map((item, index) => (
                <Project 
                    key={index}
                    name={item.name}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}

export default Projects