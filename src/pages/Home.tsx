import { FiGithub, FiLinkedin, FiFileText, FiMail } from "react-icons/fi"
import { HackerEffect, CustomButton } from "../components"

const Home = () => {

    const iconsFilled = "fill-[#F1F6F9] text-transparent hover:scale-110 duration-100 hover:fill-[#BBE1FA]"
    const iconsOutlined = "text-[#F1F6F9] hover:scale-110 duration-100 hover:text-[#BBE1FA]"

    return (
        <div className="h-[400px] sm:h-[70vh] bg-[#1B262C]" id="">
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
                <div className="flex items-center justify-between py-2 sm:py-4 w-[150px] sm:w-[270px]">
                    <CustomButton 
                        name={<FiGithub className={iconsFilled} />} 
                        styles="text-[30px] sm:text-[50px]"
                        link="https://github.com/plode-v"
                        alt="GitHub"
                    />
                    <CustomButton 
                        name={<FiLinkedin className={iconsFilled} />} 
                        styles="text-[30px] sm:text-[50px]"
                        link="https://www.linkedin.com/in/plode-vanichaka"
                        alt="LinkedIn"
                    />
                    <CustomButton
                        name={<FiFileText className={iconsOutlined} />}
                        styles="text-[30px] sm:text-[50px]"
                        alt="Resume"
                    />
                    <CustomButton 
                        name={<FiMail className={iconsOutlined} />}
                        styles="text-[30px] sm:text-[50px]"
                        link="mailto:plode.vanichaka@gmail.com"
                    />

                </div>
            </div>
        </div>
    )
}

export default Home