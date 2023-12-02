import React from 'react'

const Projects = () => {
  return (
    <div className={`min-h-screen w-full flex bg-neutral-100 justify-center`}>
        <div className='flex w-[95%] 3xl:w-2/3 justify-center duration-300'>
          <div className='w-full h-full'>
            <p className='text-[50px] 3xl:text-[65px] font-[700] py-12 opacity-20 uppercase'>projects</p>
            <div className='border-y border-neutral-200 h-[150px] flex items-center justify-evenly px-5 cursor-pointer hover:bg-orange-500 duration-150 hover:duration-150'>
              <h1 className='text-[32px] font-[600] text-neutral-900'>VCS Group</h1>
              <p className='uppercase'>development</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects