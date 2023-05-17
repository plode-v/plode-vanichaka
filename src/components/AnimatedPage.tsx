import { motion } from "framer-motion"

const variant = {
    initial: {
        opacity: 0,
        y: -50
    },
    animate: {
        opacity: 1,
        y: 0,
        duration: 1
    },
    exit: {
        opacity: 0,
        y: 0
    }
}

const AnimatedPage = ({ children }: any) => {
    return (
        <motion.div
            variants={variant}
            animate={variant.animate}
            initial={variant.initial}
            exit={variant.exit}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage