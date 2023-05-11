import { Project } from "../components"
import { projects } from "../constants"

const Projects = () => {

    return (
        <div className="w-full flex flex-col 3xl:flex-row 3xl:flex-1 px-10 h-screen" id="projects-section">
            {projects.map((item, index) => (
                <Project 
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    image={item.image}
                    techStack={item.techStack}
                    link={item.link}
                />
            ))}
        </div>
    )
}

export default Projects