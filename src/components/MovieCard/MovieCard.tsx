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
      <h2>{movie.rtScore}</h2>
      <h3>EDIT BUTTON</h3>
      <h3>DELETE BUTTON</h3>
    </article>
  )
}

export default MovieCard
