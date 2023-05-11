import { FiGithub, FiMail, FiLinkedin, FiFileText } from "react-icons/fi"

import { navItems } from '../constants'
import "./index.css"

const Navbar = () => {
    return (
        <nav className='h-full bg-transparent text-[#F1F6F9] pt-[15vh] fixed flex flex-col w-1/3'>
            <div className='w-max pl-[100px] flex flex-col'>
                <h1 className='text-[56px] font-[700] leading-tight w-max'><a href="">Plode Vanichaka</a></h1>
                <h4 className='pb-[20px] w-max text-[20px] text-[#f1f6f9]'>Web3 & Full-Stack Developer</h4>
                <p className='w-max text-[#9ba4b5]'>Building the future of the web with passion and technology.</p>
            </div>
            <div className='pt-[80px] pl-[100px]'>
                {navItems.map((item, index) =>(
                    <div className="flex items-center cursor-pointer w-max text-[#9ba4b5] hover:text-[#f1f6f9]" key={index}>
                        <div className="w-[30px] bg-[#9ba4b5] h-[2px] mr-[10px]" />
                        <li className="list-none">
                            <a href={`#${item.sectionName}`}>{item.name}</a>
                        </li>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-start gap-5 text-[24px] h-[50vh] w-full pl-[100px]'>
                <a href="https://github.com/plode-v" target="_blank">
                    <FiGithub className="social-icons" />
                </a>
                <a href="https://www.linkedin.com/in/plode-vanichaka" target="_blank">
                    <FiLinkedin className="linkedin-icon" />
                </a>
                <a href="mailto:vanichaka.plode@gmail.com">
                    <FiMail className="social-icons" />
                </a>
                <a href="" target="_blank">
                    <FiFileText className="social-icons" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar