import { Highlight } from "../components"
import { navItems } from "../constants"
import { motion } from "framer-motion"

const Home = (props: any) => {
    return (
            <motion.div variants={props.variants} className="w-full flex justify-center">
                <section className="h-max text-[#9BA4B5] text-[14px] lg:text-[18px]" id={navItems[0].sectionName}>
                    <p className="lg:px-10 lg:pt-[15vh] pt-[5vh] mb-5">
                        Hello, I'm Plode Vanichaka, a Thai-American based in Bangkok, Thailand. I'm a passionate developer with a focus on <Highlight word="web3 development"/>, <Highlight word="front-end development" />, and <Highlight word="various other areas in programming in technology" />.
                    </p>
                    <p className="lg:px-10 mb-5">
                        As an <Highlight word="American citizen" />, I want to emphasize that I am open to <Highlight word="remote work" /> opportunities and <Highlight word="comfortable adjusting" /> my work hours to align with the employer's time zone. With no visa or permit requirement, I offer employers the convenience and flexibility to collaborate <Highlight word="seamlessly across borders" />.
                    </p>
                    <p className="lg:px-10 mb-5">
                        My journey as a programmer began in mid 2022, where I embarked on a <Highlight word="self-taught" /> path after completing my undergraduate at California State University, Fullerton. It was during this time that I discovered my true passion for programming and its endless creativity possibilities.
                    </p>
                    <p className="lg:px-10 mb-10">
                        I am dedicated to continuously learning and delivering <Highlight word="high-quality" /> solutions, and I'm excited and eager about the opportunity to utilize my skills to contribute to <Highlight word="meaningful projects" />.
                    </p>
                </section>
            </motion.div>
    )
}

export default Home