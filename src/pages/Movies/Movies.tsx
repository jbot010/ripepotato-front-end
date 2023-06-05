// css
import styles from './Movies.module.css'

// components
import MovieCard from '../../components/MovieCard/MovieCard';

// types
import { Movie } from '../../types/models'

interface MoviesProps {
	movies: Movie[];
}

const Movies = (props: MoviesProps): JSX.Element => {
  const { movies } = props

  if(!movies.length) return <p>No movies yet</p>

  return (
    <main className='list'>
      <h1>Hello. This is a list of all the movies.</h1>
      {movies.map((movie: Movie) => 
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      )}
    </main>
  )
}

export default Movies