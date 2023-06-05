// types
import { Movie } from "../../types/models"

interface MovieCardProps {
  movie: Movie
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { movie } = props

  return (
    <article>
      <img src="./cinema.png" alt={`${movie.title}'s avatar`} />
      <h1>{movie.title}</h1>
    </article>
  )
}

export default MovieCard
