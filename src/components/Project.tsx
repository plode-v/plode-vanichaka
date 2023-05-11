const Project = ({image, desc, name, techStack}: any) => {
    return (
        <div className="border">
            <div>
                <img src={image} alt="thumbnail" className="h-[150px] aspect-[3/2]" />
            </div>
        </div>
    )
}

export default Project