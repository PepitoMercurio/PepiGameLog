import style from "./style.module.scss"
import Input from "../Input"
import Button from "../Button"

const GameForm = ({formData, handleChange, handleSubmit}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <h1>Ajouter un jeu</h1>
            <Input
                type="text"
                label="Name"
                placeholder="Enter game name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <Input
                type="text"
                label="Cover URL"
                placeholder="Enter image URL"
                name="cover_url"
                value={formData.cover_url}
                onChange={handleChange}
            />
            <Input
                type="text"
                label="Storyline"
                placeholder="Enter storyline"
                name="storyline"
                value={formData.storyline}
                onChange={handleChange}
            />
            <Input
                type="text"
                label="Summary"
                placeholder="Enter summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
            />
            <Button text="Submit" type="submit" />
        </form>
    )
}

export default GameForm