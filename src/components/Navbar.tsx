import { FiGithub, FiMail, FiLinkedin, FiFileText } from "react-icons/fi"
import { motion } from "framer-motion"

import { navItems, motionItem } from '../constants'
import "./index.css"

const Navbar = () => {
	return (
		<motion.nav variants={motionItem} className="lg:h-full bg-transparent text-[#f1f6f9] pt-[5vh] lg:pt-[15vh] lg:fixed flex flex-col lg:w-1/3">
			<div className="lg:pl-[25%] items-start">
				<motion.h1 variants={motionItem} className="3xl:text-[56px] lg:text-[46px] text-[30px] font-[700] leading-tight"><a href="/">Plode Vanichaka</a></motion.h1>
				<motion.h4 variants={motionItem} className="lg:pb-[20px] text-[20px] text-[#f1f6f9]">Web3 & Full-Stack Developer</motion.h4>
				<motion.p  variants={motionItem}className="text-[#9ba4b5] text-[12px] lg:text-[16px] py-3">Building the future of the web with passion and technology</motion.p>
			</div>
			<div className="pt-[80px] lg:pl-[25%] hidden lg:block">
				{navItems.map((item, index) => (
					<div className="flex items-center cursor-pointer w-max text-[#9ba4b5] hover:text-[#f1f6f9] duration-150 hover:translate-x-3" key={index}>
						<div className="w-[30px] bg-[#9ba4b5] h-[2px] mr-[10px]" />
						<li className="list-none text-[18px]">
							<a href={`#${item.sectionName}`}>{item.name}</a>
						</li>
					</div>
				))}
			</div>
			<motion.div className="flex items-center justify-start gap-3 lg:gap-6 lg:text-[32px] text-[20px] lg:h-[50vh] h-[5vh] w-full lg:pl-[25%]">
				<motion.a variants={motionItem} href="https://www.github.com/plode-v" target="_blank">
					<FiGithub className="social-icons" />
				</motion.a>
				<motion.a variants={motionItem} href="https://www.linkedin.com/in/plode-vanichaka" target="_blank">
					<FiLinkedin className="linkedin-icon" />
				</motion.a>
				<motion.a variants={motionItem} href="mailto:vanichaka.plode@gmail.com" target="_blank">
					<FiMail className="social-icons" />
				</motion.a>
				<motion.a variants={motionItem} href="" target="_blank">
					<FiFileText className="social-icons" />
				</motion.a>
			</motion.div>
		</motion.nav>
	)
}

export default Navbar