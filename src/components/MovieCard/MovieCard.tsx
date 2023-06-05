
// types
import { Movie } from '../../types/models'

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { movie } = props

  // const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      {/* <img src={profilePic} alt={`${profile.name}'s avatar`} /> */}
      <h1>{movie.title}</h1>
    </article>
  )
}

export default MovieCard