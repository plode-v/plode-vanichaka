'use client'
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
    
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const handleShow = () => {
            window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleShow);

        return () => {
            window.removeEventListener('scroll', handleShow);
        }

    }, [])

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {showButton && (
                <button 
                    className='h-[5rem] w-[5rem] fixed bottom-[3%] right-[2%] bg-orange-500 rounded-full transition-transform duration-200' onClick={handleScroll}
                >
                    up
                </button>
            )}
        </>
  )
}

export default ScrollTop