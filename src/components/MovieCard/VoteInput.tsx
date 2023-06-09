// npm modules
import { useState } from "react"

// style
import styles from "./MovieCard.module.css"

// types

interface VoteInputProps {
  defaultValue: number
  onSubmit: (movieId: number | null, value: number) => void
  movieId: number | null
}

const VoteInput = (props: VoteInputProps): JSX.Element => {
  const { defaultValue, onSubmit, movieId } = props

  const [value, setValue] = useState<number>(defaultValue)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(evt.target.value))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
    evt.preventDefault()
    onSubmit(movieId, value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>My Ripe Potato Score</label>
      <span>
        <input
          className={styles.voteInput}
          type="number"
          name="rpScore"
          min="0"
          max="100"
          id="rpScore-input"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT 🥔</button>
      </span>
    </form>
  )
}

export default VoteInput
