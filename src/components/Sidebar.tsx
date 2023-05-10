import { FiGithub, FiMail, FiLinkedin, FiFileText } from "react-icons/fi"

import { navItems } from '../constants'
import "./index.css"

const Sidebar = () => {

    return (
        <div className='hidden sm:block sidebar-container'>
            <div className='sidebar-top-container'>
                <h1 className='header-name'>Plode Vanichaka</h1>
                <h4 className='header-desc'>Web3 & Full-Stack Developer</h4>
                <p className='header-passion'>Building the future of the web with passion and technology.</p>
            </div>
            <div className='sidebar-table-content'>
                {navItems.map((item, index) => (
                    <div className='sidebar-table-content-container' key={index}>
                        <div className='sidebar-table-content-line' />
                        <li className='list-none'>
                            {item.name}
                        </li>
                    </div>
                ))}
            </div>
            <div className='social-container'>
                <FiGithub className="social-icons" />
                <FiLinkedin className="linkedin-icon" />
                <FiMail className="social-icons" />
                <FiFileText className="social-icons" />
            </div>
        </div>
  )
}

export default Sidebar