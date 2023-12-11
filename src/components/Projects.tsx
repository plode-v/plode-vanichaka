'use client'
import React from 'react'
import ProjectComponent from './ProjectComponent'
import { projects } from '@/utils/data'


const Projects = () => {

  return (
    <div className={`min-h-screen w-full flex bg-neutral-100 justify-center`}>
        <div className='flex w-[95%] 3xl:w-2/3 justify-center duration-300'>
          <div className='w-full h-full'>
            <p className='text-[50px] 3xl:text-[65px] font-[700] py-12 opacity-20 uppercase'>projects</p>
            {projects.map((project, index) => (
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