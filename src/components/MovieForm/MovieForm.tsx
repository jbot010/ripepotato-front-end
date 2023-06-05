// npm modules
import { useState } from "react"

// css

// types
import { movieFormData } from "../../types/forms"
import { Movie } from "../../types/models"

interface MovieFormProps {
  onSubmit: (formData: Movie) => Promise<void>
}

const defaultFormData = {
  title: "",
  rtScore: 0,
}

const MovieForm = (props: MovieFormProps) => {
  const [formData, setFormData] = useState<movieFormData>(defaultFormData)

  const handleChange = (evt) => {
    console.log(evt.target.name)
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
    console.log(formData)
    evt.preventDefault()
    props.onSubmit(formData).then(() => setFormData(defaultFormData))
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
