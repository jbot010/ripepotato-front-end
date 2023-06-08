import { useEffect } from "react"

// css
import styles from "./Movies.module.css"

// components
import MovieCard from "../../components/MovieCard/MovieCard"
import MovieForm from "../../components/MovieForm/MovieForm"

// types
import { Movie, User } from "../../types/models"
import { useState } from "react"
import { movieFormData } from "../../types/forms"

// service
import * as movieService from "../../services/movieService"

interface MoviesProps {
  // movies: Movie[]
  user: User
}

const Movies = (props: MoviesProps): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [showNewMovieForm, setShowNewMovieForm] = useState(false)

  const { user } = props

  useEffect((): void => {
    const fetchMovies = async (): Promise<void> => {
      try {
        const movieData: Movie[] = await movieService.getAllMovies()
        setMovies(movieData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchMovies() : setMovies([])
  }, [user])

  const handleShowForm = () => {
    setShowNewMovieForm(!showNewMovieForm)
  }

  const handleAddMovie = async (formData: movieFormData) => {
    try {
      const newMovie = await movieService.create(formData)
      setMovies([newMovie, ...movies])
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateMovie = async (formData: movieFormData) => {
    try {
      const updatedMovie = await movieService.update(formData)
      console.log({ updatedMovie })
      if (updatedMovie) {
        const nextMovies = []
        for (const movie of movies) {
          if (formData.id === movie.id) {
            nextMovies.push(updatedMovie)
          } else {
            nextMovies.push(movie)
          }
        }
        setMovies(nextMovies)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  
  const handleDeleteMovie = async (movieId: number): Promise<void> => {
    try {
      await movieService.deleteMovie(movieId)
      const nextMovies = movies.filter((movie) => movie.id !== movieId)
      setMovies(nextMovies)
    } catch (error) {
      console.log(error)
    }
  }

  // const handleUpdateVote = async (movieId: number, value: number): Promise<Movie> => {
    
  // }

  // if (!movies.length) return <p>No movies yet</p>

  return (
    <main className={styles.container}>
      <h1>Basket of Ripe Potatoes</h1>
      <button onClick={handleShowForm}>
        {" "}
        {showNewMovieForm ? "cancel" : "🎬 Add New Movie"}
      </button>
      {showNewMovieForm ? <MovieForm onSubmit={handleAddMovie} /> : ""}
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={handleDeleteMovie}
          onSubmit={handleUpdateMovie}
          user={user}
        />
      ))}
    </main>
  )
}

export default Movies
