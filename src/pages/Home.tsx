import { HackerEffect } from "../components"

const Home = () => {

    return (
        <div className='h-[500px] sm:h-[70vh] bg-[#394867]'>
            <div className="flex flex-col justify-start cursor-default pt-[40%] sm:pt-[20%] pl-[5%]">
                <HackerEffect 
                    text="Plode"
                    styles="leading-[50px] md:leading-[90px] uppercase font-bold font-epilogue md:text-[80px] text-[40px] text-[#F1F6F9] tracking-wider"
                />
                <HackerEffect 
                    text="Vanichaka"
                    styles="leading-[50px] md:leading-[90px] uppercase font-bold font-epilogue md:text-[80px] text-[40px] text-[#F1F6F9] tracking-wider"
                />
                <p className="sm:text-[24px] text-[14px] w-[80%] text-[#9BA4B5] font-normal tracking-wide">Building the future of the web with passion and technology.</p>

            </div>
        </div>
    )
}

export default Home