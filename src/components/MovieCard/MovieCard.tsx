// types
import { Movie } from "../../types/models"

interface MovieCardProps {
  movie: Movie
  onEdit: (formData: Movie) => Promise<void>
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { movie } = props

  return (
    <div>
      <img src="./cinema.png" alt={`${movie.title}'s avatar`} />
      <h1>{movie.title}</h1>
      <h2>{movie.rtScore}</h2>
      <h2>RIPEPOTATO SCORE HERE</h2>
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  )
}

export default MovieCard
