import style from "./auth_form.module.scss"
import Input from "../Input";
import Button from "../Button";

const AuthForm = ({type, data, handleChange, onSubmit}) => {
    return (
        <form className={style.auth_form} onSubmit={onSubmit}>
            {type === "signin" &&
                <Input 
                    type={"text"}
                    label={"Pseudo"}
                    name={"username"}
                    placeholder={"ex: John Doe"}
                    value={data.username}
                    onChange={handleChange}
                />
            }
            <Input 
                type={"email"}
                label={"Email"}
                name={"email"}
                placeholder={"ex: john.doe@email.com"}
                value={data.email}
                onChange={handleChange}
            />

            <Input 
                type={"password"}
                label={"Mot de passe"}
                name={"password"}
                placeholder={""}
                value={data.password}
                onChange={handleChange}
            />

            {type === "signin" &&
                <Input 
                    type={"password"}
                    label={"Confirmer le mot de passe"}
                    name={"confirmPassword"}
                    placeholder={""}
                    value={data.confirmPassword}
                    onChange={handleChange}
                />
            }

            <Button
                text={"Connexion"}
                type={"submit"}
            />


        </form>
    )
}

export default AuthForm;