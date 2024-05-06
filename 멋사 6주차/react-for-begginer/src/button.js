
import style from "./button.module.css"

function Button({text}){
    return <button className={style.btn}>{text}</button>
}

export default Button;