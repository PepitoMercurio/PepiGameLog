import style from "./button.module.scss"

const Button = ({text, type}) => {
    return (
        <button 
            className={style.button}
            type="submit"
            // onClick={() => onClick}
        >
            {text}
        </button>
    )
}

export default Button