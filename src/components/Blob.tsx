import React, { useEffect, useRef } from 'react'

const Blob = () => {

    const blobRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const blob = blobRef.current;
            const { clientX, clientY } = e;

            blob.style.left = `${clientX}px`;
            blob.style.top = `${clientY}px`;
        }

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div id='blob' ref={blobRef} />
    )
}

export default Blob