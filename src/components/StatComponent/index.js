import style from "./stat-component.module.scss"

const StatComponent = ({value, label}) => {
    return(
        <div className={style.stat}>
            <p className={style.stat__value}>{value}</p>
            <p className={style.stat__label}>{label}</p>
        </div>
    )
}

export default StatComponent