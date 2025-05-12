import style from "./select.module.scss"

const Select = ({children, label}) => {
    return (
        <div className={style.select}>
            <label>{label}</label>
            <select className={style.select__selecter}>
                {children}
            </select>
        </div>
    )
}

export default Select