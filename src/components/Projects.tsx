'use client'
import React, { MouseEvent, useState, useEffect, useRef, MouseEventHandler } from 'react'
import ProjectComponent from './ProjectComponent'


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
            <ProjectComponent></ProjectComponent>
          </div>
        </div>
    </div>
  )
}

export default Projects