import React from 'react'
import { motion } from 'framer-motion'

const Introduction = () => {
  return (
    <motion.div className='h-[65vh] w-full flex items-center justify-center bg-neutral-100'>
        <div className='h-full w-[95%] 3xl:w-2/3 duration-300'>
            <h1 className='w-max py-12 text-[50px] 3xl:text-[65px] opacity-20 uppercase font-[700] leading-none'>Introduction</h1>
        </div>
    </motion.div>
  )
}

export default Introduction