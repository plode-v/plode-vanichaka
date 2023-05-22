import { easyFit } from "../assets"
export const navItems = [
    {
        name: "About Me",
        sectionName: "about-me-section"
    },
    {
        name: "Projects",
        sectionName: "projects-section"
    },
    {
        name: "Contact Me",
        sectionName: "contact-me-section"
    },
]

export const colors = {
    navyBlue: "#1B262c",
    darkBlue: "#0F4C75",
    blue: "#3282B8",
    babyBlue: "#BBE1FA",
    white: "#F1F6F9",
    grey: "#9BA4B5",
}

export const motionContainer = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    }
}

export const motionItem = {
    hidden: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.2
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

export const projects = [
    {
        name: "EasyFit",
        desc: "Hello, I'm Plode Vanichaka, a Thai-American based in Bangkok, Thailand. I'm a passionate developer with a focus on web3 development, front-end development, and all things related to programming As an American citizen, I want to emphasize that I am open to remote work opportunities and comfortable adjusting my work hours to align with the employets time zone. With no visa or permit requirement",
        techStack: ["React", "Express", ""],
        image: easyFit,
        link: "https://easyfit-iota.vercel.app"
    },
    {
        name: "Wellness Supplements",
        desc: "Hello, I'm Plode Vanichaka, a Thai-American based in Bangkok, Thailand. I'm a passionate developer with a focus on web3 development, front-end development, and all things related to programming As an American citizen, I want to emphasize that I am open to remote work opportunities and comfortable adjusting my work hours to align with the employets time zone. With no visa or permit requirement, I offer employers the convenience and flexibility to collaborate seamlessly across borders.My journey as a programmer began in October 2022, where I embarked on a self-taught path after completing my studies as an art student. It was during this time that I discovered my true passion for programming and its endless creativity possibilities.I am dedicated to continuously learning and delivering high-quality solutions, and Im excited about the opportunity to contribute my skills to meaningful projects.",
        techStack: ["React", "Auth0", "ExpressJS", "Mongoose", "Stripe API"],
        image: "https://img.freepik.com/free-psd/landing-page-online-fashion-sale_23-2148585401.jpg",
        link: "replace with deployed link",
    }
]