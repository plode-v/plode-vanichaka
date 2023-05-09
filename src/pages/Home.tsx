import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi"
import { HackerEffect, CustomButton } from "../components"

const Home = () => {

    return (
        <div className="h-[400px] sm:h-[70vh] bg-[#394867]">
            <div className="flex flex-col justify-start cursor-default pt-[10svh] sm:pt-[10vh] md:pt-[20vh] pl-[5%]">
                <HackerEffect 
                    text="Plode"
                    styles="leading-[50px] md:leading-[90px] uppercase font-bold font-epilogue md:text-[80px] text-[40px] text-[#F1F6F9] tracking-wider w-min cursor-pointer"
                />
                <HackerEffect 
                    text="Vanichaka"
                    styles="leading-[50px] md:leading-[90px] uppercase font-bold font-epilogue md:text-[80px] text-[40px] text-[#F1F6F9] tracking-wider w-min cursor-pointer"
                />
                <p className="sm:text-[24px] text-[14px] w-[80%] text-[#9BA4B5] tracking-wide font-epilogue">Building the future of the web with passion and technology.</p>
                <div className="flex items-center justify-between py-2 sm:py-4 w-[27vw] sm:w-[12vw]">
                    <CustomButton 
                        name={<FiGithub className="fill-[#F1F6F9] hover:scale-110 duration-100" />} 
                        styles="text-[24px] sm:text-[50px]"
                        link="https://github.com/plode-v"
                        alt="GitHub"
                    />
                    <CustomButton 
                        name={<FiLinkedin className="fill-[#F1F6F9] hover:scale-110 duration-100" />} 
                        styles="text-[24px] sm:text-[50px]"
                        link="https://www.linkedin.com/in/plode-vanichaka"
                        alt="LinkedIn"
                    />
                    <CustomButton
                        name={<FiFileText className="text-[#F1F6F9] hover:scale-110 duration-100" />}
                        styles="text-[24px] sm:text-[50px]"
                        alt="Resume"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home