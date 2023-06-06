// npm modules
import { useState } from "react"

// types
import { Movie } from "../../types/models"

interface VoteManagerProps {
  movie: Movie;
}

const VoteManager = (props: VoteManagerProps): JSX.Element => {
  const { movie } = props

  const ratingOptions = []
  const voteCount = movie.votesReceived.length
  let voteSum = 0

  movie.votesReceived.forEach(vote => voteSum += vote.value)

  const movieRating = voteCount ? voteSum / voteCount : 1

  return (
    <section>
      {ratingOptions.map((rating): JSX.Element => (
        <input
        id={rating.toSring()} 
        type="number"
        key={rating}
        />
      ))}
    </section>
  )
}

export default VoteManager