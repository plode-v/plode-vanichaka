import { useState, useEffect } from 'react'

const HackerEffect = ({ text, styles }:any) => {
    const [displayText, setDisplayText] = useState(text);

    const effect = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText((prevText:any) => {
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                const newText = prevText.split("").map((letter: any , index:number) => {
                    if (index < iterations) {
                        return text[index];
                        letter;
                        
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("");
                if (iterations >= text.length) clearInterval(interval);
                iterations += 1/5;
                return newText;
            });
        }, 30);
        return () => clearInterval(interval)
    }
    useEffect (()=> {
        return effect();
    }, []);

  return (
    <h1 className={styles} onMouseOver={effect}>{displayText}</h1>
  )
}

export default HackerEffect