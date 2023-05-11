import { ProjectDesc } from "."

const Project = ({name, desc, image, techStack, index}: any) => {
    return (
        <section className="my-5 border h-max duration-100" key={index}>
            <div className="flex items-center justify-start flex-wrap">
                <img src={image} alt="thumbnail" className="w-[200px] aspect-[3/2] border" />
                <h4 className="font-[700] text-[1.5rem] pl-5">{name}</h4>
                <p>{techStack}</p>
            </div>
            <ProjectDesc 
                text={desc}
            />
        </section>
    )
}

export default Project