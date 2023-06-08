// npm modules
import { useState } from "react"

// types

interface VoteInputProps {
  defaultValue: number
}

const VoteInput = (props: VoteInputProps): JSX.Element => {
  const { defaultValue, onSubmit } = props

  const [value, setValue] = useState<number>(defaultValue)

  //onChange
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
    setValue(evt.target.value)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {

  }

  return (
    <form action="">
      <label htmlFor="vote-input">My Ripe Potato Score</label>
      <input
        type="number"
        name="rpScore"
        min="0"
        max="100"
        id="rpScore-input"
        // placeholder="RipePotato Score"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">SUBMIT 🥔</button>
    </form>
  )
}

export default VoteInput
