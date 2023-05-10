import { Highlight } from "../components"

const Home = () => {
    return (
        <div className="w-screen flex flex-row">
            <div className="hidden sm:flex flex-1" />

            <section className="flex-1 h-screen text-[#9BA4B5] text-[14px]">
                <p className="px-10 pt-[15vh] mb-5">
                    Hello, I'm Plode Vanichaka, a Thai-American based in Bangkok, Thailand. I'm a passionate developer with a focus on <Highlight word="web3 development"/>, <Highlight word="front-end development" />, and all things related to <Highlight word="programming" />.
                </p>
                <p className="px-10 mb-5">
                    As an <Highlight word="American citizen" />, I want to emphasize that I am open to <Highlight word="remote work" /> opportunities and <Highlight word="comfortable adjusting" /> my work hours to align with the employet's time zone. With no visa or permit requirement, I offer employers the convenience and flexibility to collaborate <Highlight word="seamlessly across borders" />.
                </p>
                <p className="px-10 mb-5">
                    My journey as a programmer began in October 2022, where I embarked on a <Highlight word="self-taught" /> path after completing my studies as an art student. It was during this time that I discovered my true passion for programming and its endless creativity possibilities.
                </p>
                <p className="px-10">
                    I am dedicated to continuously learning and delivering <Highlight word="high-quality" /> solutions, and I'm excited about the opportunity to contribute my skills to <Highlight word="meaningful projects" />.
                </p>
            </section>
        </div>
    )
}

export default Home