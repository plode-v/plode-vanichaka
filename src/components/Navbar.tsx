import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"

import { navItems } from '../constants'
import { FiMenu } from "react-icons/fi"

const Navbar = () => {

	const [showNav, setShowNav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [scrollData, setScrollData] = useState({
		y: 0,
		lastY: 0
	})

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrollData(prevState => {
				return {
					y: window.scrollY,
					lastY: prevState.y
				}
			})
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll)
		
		
	},[])

	useEffect(() => {
		if (scrollData.lastY < scrollData.y) {
			setShowNav(true)
		} else {
			setShowNav(false);
		}
		
	}, [scrollData])
	



	return (
		<>
			<Transition
				show={isOpen}
				enter="transition ease-out duration-200 transform origin-top-right"
				enterFrom="opacity-0 scale-95 translate-x-full"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-150 transform origin-top-right"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95 translate-x-full"
			>
				<div className="fixed right-0 h-screen bg-[#F1F6F9] pt-20 sm:hidden">
					<p className="text-black absolute top-2 right-4 font-epilogue text-[14px]" onClick={toggleNavbar}>close</p>
					{navItems.map((item, index) => (
						<a href={`#${item.sectionName}`} onClick={toggleNavbar} className="block py-1 px-8" key={index}>
							<div className="flex lg:hidden rounded-lg w-[55vw] py-2 h-max justify-center">
								<span className="font-medium text-black text-[20px]">{item.name}</span>
							</div>
						</a>
					))}
				</div>

			</Transition>
			<nav className={`bg-[#212A3E] py-3 px-5 sm:py-4 sm:px-12 font-epilogue sticky top-0 transition-transform ease ${showNav && "-translate-y-full"}`}>
				<div className="flex items-center justify-between">
						<h1 className="text-[24px] sm:text-[32px] font-bold flex-1 cursor-default text-#F1F6F9]">
							<a href="/">Plode</a>
						</h1>

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
							<a href={`#${item.sectionName}`} className="hover:opacity-50 duration-100 text-[#F1F6F9]">{item.name}</a>
						</div>
					))}
				</div>
 
			</nav>
		</>
	)
}

export default Navbar