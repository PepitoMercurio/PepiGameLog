import style from "./auth_form.module.scss"
import Input from "../Input";
import Button from "../Button";

const AuthForm = ({type}) => {
    return (
        <form className={style.auth_form}>
            {type === "signin" &&
                <Input 
                    type={"text"}
                    label={"Pseudo"}
                    name={"username"}
                    placeholder={"ex: John Doe"}
                />
            }
            <Input 
                type={"email"}
                label={"Email"}
                name={"email"}
                placeholder={"ex: john.doe@email.com"}
            />

            <Input 
                type={"password"}
                label={"Mot de passe"}
                name={"password"}
                placeholder={""}
            />

            {type === "signin" &&
                <Input 
                    type={"password"}
                    label={"Confirmer le mot de passe"}
                    name={"confirmPassword"}
                    placeholder={""}
                />
            }

            <Button
                text={"Connexion"}
            />


        </form>
    )
}

export default AuthForm;