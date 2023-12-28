import React, { useEffect, useState } from 'react'

interface Position {
    x: number;
    y: number;
}

const CursorFollower = ({ children }: { children: React.ReactNode }) => {

    const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        }
    }, []);

  return (
    <div className='absolute'>
        {children}
    </div>
  )
}

export default CursorFollower