import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-[#131036] h-screen w-full text-white items-center flex justify-center flex-col'>
        <p>Insert Globe</p>
        <div className='absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-end w-[95%] justify-between'>
            <h1 className='text-[120px] leading-none tracking-tight font-[600]'>Plode Vanichaka</h1>
            <div className='uppercase flex gap-2 text-[20px] tracking-wider pb-2'>
              <p className='font-[300]'>freelance</p>
              <p className='font-[600]'>designer & developer</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection