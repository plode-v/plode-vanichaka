import { Project } from "../components"
import { projects } from "../constants"

const Projects = () => {

    return (
        <div className="w-full grid grid-cols-1 3xl:grid-cols-2 gap-4 lg:px-10 md:grid-cols-2 lg:grid-cols-1" id="projects-section">
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