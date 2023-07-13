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
        desc: "EasyFit is a web-application for tracking daily calorie intake and achieving fitness goals. Built with React and ExpressJS, offers a seamless and intuitive experience. 'This is still under the development'. With EasyFit, you can effortlessly log your meals, monitor your calorie consumption, and make informed choices about your diet. The secure authentication system ensures that your data remains private and accessible only to you. Powered by MongoDB, EasyFit ensures efficient data management and scalability. Stay on track with your fitness journey with EasyFit's upcoming mobile application, which will provide the same convenience and functionality on-the-go.",
        techStack: ["React", "Express", "Mongoose", "MongoDB"],
        image: easyFit,
        link: "https://github.com/plode-v/easyfit.git"
    }
]

export const documentation = [
    {
        name: "EasyFit",
        techStack: ""
    }
]