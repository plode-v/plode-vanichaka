import React, { useRef, useEffect } from 'react'

const Blob = () => {

    const blobRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e :any) => {
            const blob = blobRef.current;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const blobWidth = blob.offsetWidth;
            const blobHeight = blob.offsetHeight;

            blob.style.transform = `translate(${mouseX - blobWidth / 2}px, ${mouseY - blobHeight / 2}px)`;
        };
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div ref={blobRef} id='blob' />
    )
}

export default Blob