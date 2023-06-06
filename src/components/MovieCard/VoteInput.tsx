// npm modules
import { useState } from "react"

// types
import { Movie, User } from "../../types/models"

interface VoteInputProps {
  movie: Movie
  user: User
}

const VoteInput = (props: VoteInputProps): JSX.Element => {
  const { movie, user } = props

  const voteCount = movie.votesReceived.length
  let voteSum = 0

  movie.votesReceived.forEach((vote) => (voteSum += vote.value))

  const movieRating = voteCount ? voteSum / voteCount : 1

  return (
    <section>
      <input type="number" />
    </section>
  )
}

export default VoteInput
