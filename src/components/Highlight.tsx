interface HighlightProps {
    word: string;
}

const Highlight = ({word}: HighlightProps) => {
    return (
        <a className="text-[#F1F6F9]">{word}</a>
    )
}

export default Highlight