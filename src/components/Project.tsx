import { ProjectDesc } from "."


interface ProjectProps {
    name: string;
    desc: string;
    image: string;
    techStack: string[];
    link: string;
}

const Project = ({name, desc, image, techStack, link}: ProjectProps) => {

    const handleClick = () => {
        window.open(link, "_blank")
    }


    return (
        <section className="border h-max duration-100 rounded-[10px] z-20 w-full mt-10">
            <div className="flex justify-start flex-wrap flex-col overflow-hidden rounded-t-[10px]">
                <img src={image} alt="thumbnail" className="w-full aspect-[16/9] cursor-pointer border rounded-t-[10px] hover:scale-105 duration-100 hover:brightness-100 brightness-75" onClick={handleClick} />
                <h4 className="font-[700] text-[1.5rem] pl-5 cursor-pointer pt-5"><a href={link} target="_blank">{name}</a></h4>
                <div className="flex gap-3 flex-wrap items-center justify-start px-5 py-3">
                    {techStack.map((item, index) => (
                        <span className="text-[#9BA4B5] lg:text-[14px] text-[12px] items-center leading-3 bg-[#1B262c] p-2 rounded-lg" key={index}>{item}</span>
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