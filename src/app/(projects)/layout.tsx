import React from 'react'

interface ChildrenProps {
    children: React.ReactNode
}

const layout = ({ children }: ChildrenProps)  => {
  return (
    <div className='h-full pt-[80px] min-h-screen w-full bg-neutral-500'>
        {children}
    </div>
  )
}

export default layout