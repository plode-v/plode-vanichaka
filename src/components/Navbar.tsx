'use client'
import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const Navbar = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className='w-full h-[80px] text-[#fafafa] flex justify-center z-20 absolute font-poppins'>
      <div className='bg-transparent h-full 3xl:w-2/3 w-full flex items-center justify-between p-8 duration-300'>
          <motion.p variants={item} className='text-[18px] font-[300]'>Plode Vanichaka</motion.p>
        <div className='flex gap-8 3xl:text-[18px] font-[100]'>
          <motion.div variants={item} className='py-5 relative flex-col flex items-center'>
            <button>About</button>
          </motion.div>
          <motion.div variants={item} className='py-5'>
            <button>Work</button>
          </motion.div>
          <motion.div variants={item} className='py-5'>
            <button>Contact</button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar