'use client'
import React from 'react'
import { motion } from 'framer-motion'
import MyScene from './MyScene'

const container = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // delayChildren: 0.8,
      staggerChildren: 0.2,
    }
  }
}

const item = {
  hidden: {
    y: -50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const HeroSection = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className='bg-gradient-to-b from-[#131036] to-[#0A0A0A] h-screen w-full text-white items-center flex justify-center'>
      <div className='h-full w-screen flex items-center justify-center'>
        <MyScene />
      </div>
      <div className='flex flex-col 3xl:w-2/3 items-center justify-center h-full duration-300'>
        <div className='absolute bottom-[12%] left-1/2 -translate-x-1/2 flex items-end w-[95%] 3xl:w-2/3 justify-between duration-300'>
            <motion.h1 variants={item} className='3xl:text-[120px] lg:text-[85px] leading-none tracking-tight font-[600]'>Plode Vanichaka</motion.h1>
            <div className='uppercase 3xl:text-[20px] tracking-wider pb-2'>
              <motion.p className='font-[300] flex gap-2' variants={item}>
                freelance <strong className='font-[600]'>designer & developer</strong>
              </motion.p>
            </div>
          </div>
      </div>
    </motion.div>
  )
}

export default HeroSection