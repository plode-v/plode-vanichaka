import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] text-[#fafafa] flex justify-center z-20 absolute font-poppins'>
      <div className='bg-transparent h-full 3xl:w-2/3 w-full flex items-center justify-between p-8 duration-300'>
          <p className='text-[18px] font-[300]'>Plode Vanichaka</p>
        <div className='flex gap-8 3xl:text-[18px] font-[100]'>
          <div className='py-5 relative flex-col flex items-center'>
            <button className='hover:underline'>About</button>
          </div>
          <div className='py-5'>
            <button className=''>Work</button>
          </div>
          <div className='py-5'>
            <button className=''>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar