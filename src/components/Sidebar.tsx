import { FiGithub, FiMail, FiLinkedin, FiFileText } from "react-icons/fi"

import { navItems } from '../constants'
import "./index.css"

const Sidebar = () => {

    return (
        <div className='w-1/4 h-screen fixed pt-[15vh]'>
            <div className='bg-transparent text-[#F1F6F9] text-left w-full'>
                <h1 className='text-[56px] font-[700] leading-tight w-max'>Plode Vanichaka</h1>
                <h4 className='pb-[20px] w-max font-[20px] text-[#F1F6F9]'>Web3 & Full-Stack Developer</h4>
                <p className='w-max text-[#9BA4B5]'>Building the future of the web with passion and technology.</p>
            </div>
            <div className='pt-[80px]'>
                {navItems.map((item, index) => (
                    <div className='flex items-center cursor-pointer w-max text-[#9BA4B5] hover:text-[#F1F6F9]' key={index}>
                        <div className='w-[30px] bg-[#9BA4B5] h-[2px] mr-[10px]' />
                        <li className='list-none'>
                            {item.name}
                        </li>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-start gap-5 text-[24px] h-[50vh] w-full'>
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
        </div>
  )
}

export default Sidebar