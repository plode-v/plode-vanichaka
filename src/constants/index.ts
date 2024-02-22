import { vcsGroup, omni } from "../assets"
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
        name: "Omni-AI",
        desc: "Introducing Omni-AI, the all-in-one AI services platform that revolutionizes your creative experience. With seamless access to ChatGPT, DALL-E, and Replicate AI, Omni-AI empowers you to explore the realms of conversation, image generation, music, and videos – all under one subscription. Built on Next.js and styled with Tailwind CSS, the platform offers lightning-fast performance and a modern interface. Clerk ensures secure authentication, while the subscription-based model simplifies your workflow.",
        techStack: ['NextJS', "Tailwind CSS", "Prisma", "Clerk Auth", "OpenAI API"],
        image: omni,
        link: "https://omni-ai.vercel.app"
    },
    {
        name: "VCS Group, LLC",
        desc: "As a freelance frontend engineer and consultant for VCS Group, my role involved developing and deploying websites while ensuring they met design specifications and stakeholder needs. I collaborated closely with client to understand their vision and translate it into visually appealing and user-friendly web designs. Through proactive communicationand expert guidance, I successfully delivered high-quality websites that exceeded client expecetations and contributed to their online success.",
        techStack: ["Wordpress", "HTML", "CSS", "Javascript"],
        image: vcsGroup,
        link: "https://vcsgroupthai.com"
    },
]

export const documentation = [
    {
        name: "EasyFit",
        techStack: ""
    }
]