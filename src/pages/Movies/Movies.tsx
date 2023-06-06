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
  user: User | null
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
      const response = await movieService.update(formData)
      const updatedMovie = response[1][0]

      let nextMovies = []
      for (let movie of movies) {
        if (formData.id === movie.id) {
          nextMovies.push(updatedMovie)
        } else {
          nextMovies.push(movie)
        }
      }
      console.log(nextMovies)
      setMovies(nextMovies)
      return updatedMovie
    } catch (error) {
      console.log(error)
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

  if (!movies.length) return <p>No movies yet</p>

  return (
    <main className="list">
      <h1>Hello. This is a list of all the movies.</h1>
      <button onClick={handleShowForm}>
        {" "}
        {showNewMovieForm ? "cancel" : "Add New Movie"}
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
