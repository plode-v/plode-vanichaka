import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { navItems, colors } from '../constants'
import { FiMenu } from "react-icons/fi"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleScroll = () => {
        scroll({top: 0});
    }

    return (
        <header className={`bg-[${colors.darkBlue}] bg-opacity-[95%] backdrop-blur py-4 fixed top-0 w-full`}>
            <div className="flex flex-wrap items-center justify-between px-5 xl:mx-auto max-w-full w-full">
                <h1 className="font-epilogue text-white font-bold text-[36px] cursor-pointer"><a onClick={handleScroll}>Plode</a></h1>

                <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer text-white" onClick={handleToggle} />

                <nav className={`${toggle ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full items-center text-center`}>
                    <ul className="lg:flex lg:justify-between gap-6 font-epilogue text-white font-normal">
                        {navItems.map((item, index) => (
                            <li className="list-none block mt-1 hover:opacity-50 duration-[80ms] text-[18px]" key={index}>
                                <a href={`#${item.sectionName}`} onClick={handleToggle}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar