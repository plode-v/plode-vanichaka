import { useState } from "react";

interface ProjectProps {
    text: string;
}

const Project = ({text}: ProjectProps) => {
    
    const [showFullText, setShowFullText] = useState(false);

    const handleClick = () => {
        setShowFullText(!showFullText);
    }

    const renderContent = () => {
        if (showFullText) {
            return text;
        } else {
            return text.slice(0, 200) + "...";
        }
    };


    return (
        <p className={`${showFullText && "flex flex-wrap py-10"} px-5 py-3 text-[#9BA4B5]`}>{renderContent()}
            {!showFullText ? (
                <button onClick={handleClick} className="text-blue-500 hover:underline">Read More</button>
            ) : (
                <button onClick={handleClick} className="text-blue-500 hover:underline">Collapse</button>
            )}
        </p>
    )
}

export default Project