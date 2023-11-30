import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  start: {
    opacity: 0,
    x: "-50%"
  },
  end: {
    opacity: 1,
    x: 0
  }
}

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-b from-[#131036] to-[#0A0A0A] h-screen w-full text-white items-center flex justify-center'>
      <div className='flex flex-col 3xl:w-2/3 items-center justify-center h-full duration-300'>
        <p>Insert Globe</p>
        <div className='absolute bottom-[12%] left-1/2 -translate-x-1/2 flex items-end w-[95%] 3xl:w-2/3 justify-between duration-300'>
          <motion.div
            variants={variants}
          />
            <h1 className='3xl:text-[120px] lg:text-[85px] leading-none tracking-tight font-[600]'>Plode Vanichaka</h1>
            <div className='uppercase flex gap-2 3xl:text-[20px] tracking-wider pb-2'>
              <p className='font-[300]'>freelance</p>
              <p className='font-[600]'>designer & developer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection