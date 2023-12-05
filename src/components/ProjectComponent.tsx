'use client'
import React from 'react'
import { useState } from 'react'

const ProjectComponent = () => {

  const [visible, setVisible] = useState<boolean>(false);

  const handleMouseMove = () => setVisible(true);
  const handleMouseOut = () => setVisible(false);

  return (
    <div className={`h-[180px] w-full border-neutral-300 border-y cursor-pointer`} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <div className={`${visible ? "fixed" : "hidden"} bg-neutral-300 bottom-0 right-0 lg:h-[300px] 3xl:h-[400px] aspect-[1.78] m-20 duration-300 flex items-center justify-center`}>
        <h1 className='opacity-20 text-[60px] font-[700] tracking-wider'>EXAMPLE</h1>
      </div>
    </div>
  )
}

export default ProjectComponent