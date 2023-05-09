const CustomButton = ({ name, styles, link}: any) => {
    return (
        <button className={`${styles}`}>
            <a href={link} target="_blank">
                {name}
            </a>
        </button>
    )
}

export default CustomButton