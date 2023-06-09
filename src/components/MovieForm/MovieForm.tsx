// npm modules
import { useState } from "react"

// css
import styles from "./MovieForm.module.css"


// types
import { movieFormData } from "../../types/forms"
import { Movie } from "../../types/models"

interface MovieFormProps {
  onSubmit: (formData: movieFormData) => void
  movie?: Movie
}

const defaultFormData = {
  title: "",
  rtScore: 0,
}

const MovieForm = (props: MovieFormProps) => {
  const [formData, setFormData] = useState<movieFormData>(
    props.movie || defaultFormData
  )

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
    evt.preventDefault()
    props.onSubmit(formData)
    setFormData(defaultFormData)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="title-input">Title</label>
      <input
        required
        type="text"
        name="title"
        id="title-input"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="rtScore-input">RottenTomato Score</label>
      <input
        required
        type="number"
        name="rtScore"
        value={formData.rtScore}
        min="0"
        max="60"
        id="rtScore-input"
        placeholder="RottenTomato Score"
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default MovieForm
