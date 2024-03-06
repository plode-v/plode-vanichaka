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

const buttons = ['about', 'work', 'contact'];

const Navbar = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className='w-full h-[80px] text-[#fafafa] flex justify-center z-20 absolute font-poppins'>
      <div className='bg-transparent h-full 3xl:w-2/3 w-full flex items-center justify-between p-8 duration-300'>
          <motion.a variants={item} className='text-[18px] font-[300]' href='/'>Plode Vanichaka</motion.a>
        <div className='flex gap-8 3xl:text-[18px] text-[1em] font-[100]'>
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              variants={item}
              className='py-5 hover:text-orange-400'
            >
              <button className='capitalize hover:scale-110 duration-75 tracking-widest'>{button}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar