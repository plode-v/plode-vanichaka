import React from 'react'

interface Props {
  header: string
}

const Projects = ({ header }: Props ) => {
  return (
    <div className='h-screen w-full flex bg-neutral-100 justify-center'>
        <div className='flex w-full 3xl:w-1/2 justify-center'>
          <div className='flex w-full h-full'>
            <p className='text-[90px] font-[700] p-12 opacity-20 uppercase'>{header}</p>
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default Projects