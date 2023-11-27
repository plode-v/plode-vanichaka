import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] text-[#fafafa] flex justify-center z-20 absolute'>
      <div className='bg-transparent h-full 3xl:w-2/3 w-full flex items-center justify-between p-8'>
        <div>
          <p className='text-[18px]'>Plode Vanichaka</p>
        </div>
        <div className='flex gap-8 text-[18px]'>
          <button>About</button>
          <button>Work</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar