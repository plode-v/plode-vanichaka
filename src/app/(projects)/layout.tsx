import React from 'react'

interface ChildrenProps {
    children: React.ReactNode
}

const layout = ({ children }: ChildrenProps)  => {
  return (
    <div className='pt-[80px] h-screen w-full bg-gradient-to-b from-[#131036] to-[#0A0A0A] flex justify-center items-center'>
      <div className='h-full w-full 3xl:w-2/3 px-8 duration-300'>
        {children}
      </div>
    </div>
  )
}

export default layout