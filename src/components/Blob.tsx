import { useState, useEffect } from 'react'

const Blob = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y:0
    });

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div 
            id='blob'
            className='fixed w-[400px] h-[400px] rounded-full pointer-events-none z-90 -translate-x-1/2 -translate-y-1/2 opacity-40 ease shadow-md bg-gradient-to-t from-cyan-500 to-violet-500 blur-[150px]'
            style={{left: mousePosition.x, top: mousePosition.y}}
        />
    )
}

export default Blob