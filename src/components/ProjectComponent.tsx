'use client'
import React, { useEffect, useState } from 'react'
import CursorFollower from './features/CursorFollower';
import Link from 'next/link';
import Image from 'next/image';
import { mbScreenshot } from '../../public/assets';

interface Props {
  name: string;
  role: string;
  image: any;
  link: string;
}

const ProjectComponent = ({ name, role, image, link }: Props) => {

  const [visible, setVisible] = useState<boolean>(false);

  const handleMouseMove = () => setVisible(true);
  const handleMouseOut = () => setVisible(false);

  return (
    <Link className='h-[180px] w-full border-neutral-300 border-y cursor-pointer flex items-center justify-center hover:bg-orange-500 duration-200' onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} href={link}>
      <div className='flex items-center justify-between h-full w-5/6'>
        <div className='flex-1 flex justify-start'>
          <p className='font-[700] uppercase text-[30px]'>{name}</p>
        </div>
        <div className='flex-1 justify-center flex'>
          <div className='w-1/2 text-end'>
            <p className='font-[300] capitalize tracking-wide text-[20px]'>{role}</p>
          </div>
        </div>
      </div>
        <CursorFollower>
          <div className={`${visible ? 'absolute' : 'hidden'} bg-neutral-300 lg:h-[250px] 3xl:h-[300px] aspect-[1.78] translate-x-1 translate-y-1 flex items-center justify-center`}>
            <Image src={image} alt="prject image" className='h-full w-full' />
          </div>
        </CursorFollower>
    </Link>
  )
}

export default ProjectComponent