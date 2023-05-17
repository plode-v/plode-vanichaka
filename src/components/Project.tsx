import { ProjectDesc } from "."


interface ProjectProps {
    name: string;
    desc: string;
    image: string;
    techStack: string[];
    link: string;
}

const Project = ({name, desc, image, techStack, link}: ProjectProps) => {
    return (
        <section className="border h-max duration-100 rounded-[10px] z-20 w-full mt-10">
            <div className="flex justify-start flex-wrap object-contain flex-col">
                <img src={image} alt="thumbnail" className="w-full aspect-[3/2] border cursor-pointer rounded-t-[10px]" />
                <h4 className="font-[700] text-[1.5rem] pl-5 cursor-pointer pt-5"><a href={link}>{name}</a></h4>
                <div className="flex gap-3 flex-wrap items-center justify-start px-5 py-3">
                    {techStack.map((item, index) => (
                        <p className="text-[#9BA4B5] items-center leading-3" key={index}>{item}</p>
                    ))}
                </div>
            </div>
            <ProjectDesc 
                text={desc}
            />
        </section>
    )
}

export default Project