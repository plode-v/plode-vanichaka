import { HackerEffect } from "../components"
import { colors } from "../constants"

const Home = () => {

    return (
        <div className={`h-[500px] sm:h-[80vh] bg-[${colors.navyBlue}]`}>
            <div className="flex flex-col justify-start cursor-default pt-[5vh] sm:pt-[10vh] md:pt-[20vh] pl-[5%]">
                <HackerEffect 
                    text="Plode"
                    styles="leading-[50px] md:leading-[90px] uppercase font-bold font-epilogue md:text-[80px] text-[40px] text-[#F1F6F9] tracking-wider w-min cursor-pointer"
                />
                <HackerEffect 
                    text="Vanichaka"
                    styles="leading-[50px] md:leading-[90px] uppercase font-bold font-epilogue md:text-[80px] text-[40px] text-[#F1F6F9] tracking-wider w-min cursor-pointer"
                />
                <p className={`sm:text-[24px] text-[14px] w-[80%] text-[${colors.grey}] font-normal tracking-wide`}>Building the future of the web with passion and technology.</p>

            </div>
        </div>
    )
}

export default Home