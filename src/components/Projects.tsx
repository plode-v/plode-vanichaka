'use client'
import React from 'react'
import ProjectComponent from './ProjectComponent'
import { projects } from '@/utils/data'


const Projects = () => {

  return (
    <div className={`h-full w-full flex bg-neutral-100 justify-center`} id='projects'>
        <div className='flex w-[95%] 3xl:w-2/3 justify-center duration-300'>
          <div className='w-full h-full'>
            <div className='h-[150px] w-full flex'>
              <p className='text-[50px] 3xl:text-[65px] font-[700] opacity-20 uppercase h-full w-full items-center flex justify-start'>projects</p>
            </div>
            {projects.map((project, index) => (
                <ProjectComponent
                  key={index}
                  name={project.name}
                  role={project.role}
                  image={project.image}
                  link={project.link}
                />
            ))}
            <div className='w-full h-[150px] bg-neutral-100' />
          </div>
        </div>
    </div>
  )
}

export default Projects