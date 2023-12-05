'use client'
import React, { useState } from 'react'

interface Props {
  name: string;
  role: string
}

const ProjectComponent = ({ name, role }: Props) => {

  const [visible, setVisible] = useState<boolean>(false);

  const handleMouseMove = () => setVisible(true);
  const handleMouseOut = () => setVisible(false);

  return (
    <div className='h-[180px] w-full border-neutral-300 border-y cursor-pointer flex items-center justify-center hover:bg-neutral-200 duration-150' onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <div className='flex items-center justify-between h-full w-5/6'>
        <div className='flex-1 flex justify-start'>
          <p className='font-[700] uppercase text-[30px]'>{name}</p>
        </div>
        <div className='flex-1 justify-center flex'>
          <div className='w-1/2 text-end'>
            <p className='font-[300] capitalize tracking-wide text-[20px]'>{role}</p>
          </div>
        </div>
      </div>
      <div className={`${visible ? "fixed" : "hidden"} bg-neutral-300 bottom-0 right-0 lg:h-[300px] 3xl:h-[400px] aspect-[1.78] m-20 duration-300 flex items-center justify-center`}>
        <h1 className='opacity-20 text-[60px] font-[700] tracking-wider'>EXAMPLE</h1>
      </div>
    </div>
  )
}

export default ProjectComponent