import { motion } from "framer-motion"

const Footer = (props: any) => {
    return (
        <motion.div variants={props.variants} className="flex flex-col my-5 lg:my-10 px-[15%] items-center justify-center">
            <p className="text-center text-[10px] text-[#9BA4B5] tracking-tighter">
                Built with Vite React Typescript and Tailwind CSS, and deployed with Vercel.
            </p>
        </motion.div>
    )
}

export default Footer