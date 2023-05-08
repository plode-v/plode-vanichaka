import { useState } from "react"
import { Transition } from "@headlessui/react"

import { navItems, colors } from '../constants'
import { FiMenu } from "react-icons/fi"

// const Navbar = () => {

//     const [toggle, setToggle] = useState(false);

//     const handleToggle = () => {
//         if (window.innerWidth < 768) {
//             setToggle(!toggle);
//         }
//     }


//     const handleScroll = () => {
//         scroll({top: 0});
//     }

//     return (
//         <header className={`bg-[${colors.darkBlue}] bg-opacity-[95%] backdrop-blur py-4 fixed top-0 w-full`}>
//             <div className="flex flex-wrap items-center justify-between px-5 xl:mx-auto max-w-full w-full">
//                 <h1 className="font-epilogue text-white font-bold text-[20px] sm:text-[36px] cursor-pointer"><a onClick={handleScroll}>Plode</a></h1>

//                 <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer text-white" onClick={handleToggle} />

//                 <nav className={`${toggle ? "block text-black" : "hidden"} lg:flex lg:items-center lg:w-auto w-full items-center text-center`}>
//                     <ul className="lg:flex lg:justify-between gap-6 font-epilogue font-normal">
//                         {navItems.map((item, index) => (
//                             <a href={`#${item.sectionName}`} key={index}>
//                                 <li className={`${toggle && "p-1 bg-white rounded-lg"} list-none block mt-1 hover:opacity-50 duration-[80ms] text-[18px]`} onClick={() => {
//                                     if (toggle) {
//                                         handleToggle();
//                                     }
//                                 }}>{item.name}</li>
//                             </a>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`bg-[${colors.darkBlue}] py-3 px-5 sm:py-4 sm:px-12 font-epilogue`}>
                <div className="flex items-center justify-between">
                    <h1 className={`text-[24px] sm:text-[32px] font-bold flex-1 cursor-default text-[${colors.white}]`}>Plode</h1>

                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="focus:outline-none"
                            onClick={toggleNavbar}
                        >
                            <FiMenu className="h-6 w-6" />
                        </button>
                    </div>

                    {navItems.map((item, index) => (
                        <div className="hidden lg:flex font-epilogue font-semibold text-[18px] px-3" key={index}>
                            <a href={`${item.sectionName}`} className={`hover:scale-105 duration-100 text-[${colors.white}]`}>{item.name}</a>
                        </div>
                    ))}
                </div>
            </nav>
            <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform origin-top-right"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150 transform origin-top-right"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="absolute top-0 right-0">
                        {navItems.map((item, index) => (
                            <a href={`#${item.sectionName}`} onClick={toggleNavbar} className="block py-1 px-3" key={index}>
                                <div className="z-10 flex lg:hidden bg-white rounded-lg shadow-lg w-[20vw] py-2 h-max justify-center">
                                    <span className="font-medium text-black text-[12px]">{item.name}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                </Transition>
        </>
    )
}

export default Navbar