import { Form } from "../components"
import { motion } from "framer-motion"

const Contact = (props:any) => {
    return (
        <motion.div variants={props.variants} className="my-10 w-full lg:px-10" id="contact-me-section">
            <h1 className="uppercase font-[700] text-[14px] lg:text-[18px] mb-10">Contact</h1>
            <Form />
        </motion.div>
    )
}

export default Contact