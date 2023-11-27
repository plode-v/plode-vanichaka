import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] text-[#fafafa] flex justify-center z-20 absolute font-poppins'>
      <div className='bg-transparent h-full 3xl:w-2/3 w-full flex items-center justify-between p-8'>
          <p className='text-[18px] font-[300]'>Plode Vanichaka</p>
        <div className='flex gap-8 3xl:text-[18px] font-[100]'>
          <button>About</button>
          <button>Work</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar