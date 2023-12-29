import React, { useEffect, useState } from 'react'

interface Positions {
    x: number;
    y: number;
}

interface Children {
    children: React.ReactNode;
}

const CursorFollower = ({ children }: Children) => {

    const [position, setPosition] = useState<Positions>({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY + window.scrollY });
        }

        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition)
        }
    }, []);

  return (
    <div className='absolute pointer-events-none' style={{ left: position.x, top: position.y }}>
        { children }
    </div>
  )
}

export default CursorFollower