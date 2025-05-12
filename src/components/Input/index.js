import style from "./input.module.scss"

const Input = ({type, label, placeholder, name, value, onChange}) => {
    return (
        <div className={style.input}>
            <label>{label}</label>
            <div className={style.input__box}>
                <input 
                    type={type}
                    className={style.input__box__input}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input;