import { motion } from "framer-motion"
const Sidebar = () => {

    return (
        <motion.nav variants={{
          hidden: {
            opacity: 1,
            y:-100
          },
          show: {
            y: 0,
            transition: {duration: 0}
          }
        }} className='w-full'>
        </motion.nav>
  )
}

export default Sidebar