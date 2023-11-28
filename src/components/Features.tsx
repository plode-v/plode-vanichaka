import React from 'react'

interface Props {
  header: string
}

const Projects = ({ header }: Props ) => {
  return (
    <div className='h-screen w-full flex bg-neutral-100 justify-center'>
        <div className='flex w-[95%] 3xl:w-2/3 justify-center duration-300'>
          <div className='flex w-full h-full'>
            <p className='text-[50px] 3xl:text-[65px] font-[700] py-12 opacity-20 uppercase'>{header}</p>
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default Projects