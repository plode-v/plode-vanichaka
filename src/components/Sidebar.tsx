import React from 'react'

import { navItems } from '../constants'

const Sidebar = () => {
    return (
        <div className='w-1/2 h-screen fixed pt-[15vh] hidden sm:block'>
            <div className='bg-transparent text-white text-left w-full px-[10%]'>
                <h1 className='text-[50px] font-bold leading-auto w-max leading-[40px]'>Plode Vanichaka</h1>
                <h4 className='pb-[20px] w-max text-[24px]'>Web3 & Full-Stack Developer</h4>
                <p className='w-max'>Building the future of the web with passion and technology.</p>
            </div>
            <div className='pt-20 px-[10%]'>
                {navItems.map((item, index) => (
                    <div className='flex items-center cursor-pointer w-max' key={index}>
                        <div className='w-[30px] bg-white h-[2px] mr-[10px]' />
                        <li className='list-none'>
                            {item.name}
                        </li>
                    </div>
                ))}
            </div>
            <div className='h-max'>
                Logo
            </div>
        </div>
  )
}

export default Sidebar