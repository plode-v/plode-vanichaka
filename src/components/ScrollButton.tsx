import { useState } from 'react'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)
    const [color, setColor] = useState("transparent");

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
            setColor("red")
        }
        else if (scrolled <= 300) {
            setVisible(false);
            setColor("transparent")
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
        color;
    };

    window.addEventListener("scroll",toggleVisible);

    return (
        <div>
            {visible && (
                <button className='fixed bottom-5 right-5 border p-3 w-[64px] h-[64px] flex items-center justify-center rounded-full backdrop-blur-sm' onClick={scrollToTop}>Hello</button>
            )}
        </div>
    )
}

export default ScrollButton