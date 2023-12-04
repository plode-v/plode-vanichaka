'use client'
import React, { MouseEvent, useState, useEffect, useRef, MouseEventHandler } from 'react'


const Projects = () => {

  const [mouseX, setMouseX] = useState<number>()
  const [mouseY, setMouseY] = useState<number>()

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }


  

  return (
    <div className={`min-h-screen w-full flex bg-neutral-100 justify-center`}>
        <div className='flex w-[95%] 3xl:w-2/3 justify-center duration-300'>
          <div className='w-full h-full'>
            <p className='text-[50px] 3xl:text-[65px] font-[700] py-12 opacity-20 uppercase'>projects</p>
            <div className='w-full h-[300px] border-black/10 border-y relative overflow-hidden' onMouseMove={handleMouseMove}>
              <div className='fixed bg-orange-500 w-[30px] h-[30px] rounded-full -translate-x-1/2 -translate-y-1/2' style={{ top: mouseY, left: mouseX}} />
              <div className='w-full h-full'>
                <h1>VCS Group</h1>
                <p>Development</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects