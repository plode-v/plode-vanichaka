'use client'
import React, { MouseEvent, useState, useEffect, useRef, MouseEventHandler } from 'react'
import ProjectComponent from './ProjectComponent'


const Projects = () => {

  const projectList = [
    {
      name: "vcs group",
      role: "developer",
      image: 'example 1'
    },
    {
      name: 'ferworks security',
      role: 'designer & developer',
      image: 'example 2'
    },
    {
      name: 'maison berger thailand',
      role: 'teamlead developer',
      image: 'example 3'
    }

  ]

  return (
    <div className={`min-h-screen w-full flex bg-neutral-100 justify-center`}>
        <div className='flex w-[95%] 3xl:w-2/3 justify-center duration-300'>
          <div className='w-full h-full'>
            <p className='text-[50px] 3xl:text-[65px] font-[700] py-12 opacity-20 uppercase'>projects</p>
            {projectList.map((project, index) => (
                <ProjectComponent
                  key={index}
                  name={project.name}
                  role={project.role}
                  image={project.image}
                />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Projects