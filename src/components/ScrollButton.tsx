import { useState } from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi';


import { CustomButton } from '.';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        }
        else if (scrolled <= 300) {
            setVisible(false);
        }
    };


    window.addEventListener("scroll",toggleVisible);

    return (
        <div>
            {visible && (
                <div className='fixed flex flex-col bottom-1 px-2 items-center justify-center' onScroll={toggleVisible}>
                    <CustomButton name={<FiLinkedin className="fill-white h-full w-full" />} alt="LinkedIn" styles="border my-2 p-3 w-[40px] h-[40px] rounded-full hover:opacity-50 text-[30px] flex" />
                    <CustomButton name={<FiGithub className="h-full w-full fill-white" />} styles="border my-2 p-3 w-[40px] h-[40px] rounded-full hover:opacity-50" />
                </div>
            )}
        </div>
    )
}

export default ScrollButton